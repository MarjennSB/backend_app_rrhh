const fs = require('fs');
const path = require('path');

const modulesDir = 'C:/xampp/htdocs/RRHH/backend_app_rrhh/src/modules';

const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (filePath.endsWith('.dto.ts') && filePath.includes('create-')) {
      filesList.push(filePath);
    }
  }
  return filesList;
};

const allDtoFiles = getFiles(modulesDir);

allDtoFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check if it's mostly empty (just the export class ... {})
  if (content.replace(/\s+/g, '').match(/exportclass[a-zA-Z0-9_]+Dto\{\}/)) {
    const classNameMatch = content.match(/export class ([a-zA-Z0-9_]+Dto)/);
    if (classNameMatch) {
      const className = classNameMatch[1];
      const newContent = `import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';\n\nexport class ${className} {\n  @IsString()\n  @IsNotEmpty()\n  name: string;\n\n  @IsString()\n  @IsOptional()\n  description?: string;\n\n  @IsBoolean()\n  @IsOptional()\n  status?: boolean;\n}\n`;
      fs.writeFileSync(file, newContent);
      console.log('Fixed', file);
    }
  }
});
