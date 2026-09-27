const fs = require('fs');
const path = require('path');

function parseData(content) {
    const lines = content.split('\n');
    const results = [];
    let currentObj = {};
    for(const line of lines) {
        const idMatch = line.match(/"id"\s*=>\s*"([^"]+)"/);
        if(idMatch) currentObj.id = idMatch[1];
        
        const descMatch = line.match(/"descripcion"\s*=>\s*"([^"]+)"/);
        if(descMatch) currentObj.descripcion = descMatch[1];
        
        const depMatch = line.match(/"departamento_id"\s*=>\s*"([^"]+)"/);
        if(depMatch) currentObj.departamento_id = depMatch[1];
        
        const provMatch = line.match(/"provincia_id"\s*=>\s*"([^"]+)"/);
        if(provMatch) currentObj.provincia_id = provMatch[1];
        
        if(line.includes(']') && currentObj.id) {
            results.push({...currentObj});
            currentObj = {};
        }
    }
    // Para el caso de departamentos que esten en una sola linea como: ["id" => "01", "descripcion" => "Amazonas"],
    if (results.length === 0) {
        for(const line of lines) {
            let obj = {};
            const idMatch = line.match(/"id"\s*=>\s*"([^"]+)"/);
            if(idMatch) obj.id = idMatch[1];
            
            const descMatch = line.match(/"descripcion"\s*=>\s*"([^"]+)"/);
            if(descMatch) obj.descripcion = descMatch[1];
            
            if(obj.id && obj.descripcion) {
                results.push(obj);
            }
        }
    }
    
    return results;
}

const dir = 'src/modules/seeds';

// Departments
const deptContent = fs.readFileSync(path.join(dir, 'department.seed.ts'), 'utf8');
const deptData = parseData(deptContent);
console.log('Dept count:', deptData.length);

let tsDept = `import { DataSource } from 'typeorm';
import { Department } from '../departments/entities/department.entity.js';

export async function seedDepartments(dataSource: DataSource): Promise<void> {
    const departmentRepository = dataSource.getRepository(Department);
    const data = ${JSON.stringify(deptData, null, 4)};

    for (const item of data) {
        // En tu tabla la llave primaria 'id' se definio como autoincrement. 
        // Asi que para mantener los IDs de ubigeo, forzamos el guardado
        const exists = await departmentRepository.findOne({ where: { description: item.descripcion } });
        if (!exists) {
            await departmentRepository.save(departmentRepository.create({ id: Number(item.id), description: item.descripcion }));
        }
    }
    console.log('✔ Departamentos sembrados (' + data.length + ').');
}
`;
fs.writeFileSync(path.join(dir, 'department.seed.ts'), tsDept);

// Provinces
const provContent = fs.readFileSync(path.join(dir, 'province.seed.ts'), 'utf8');
const provData = parseData(provContent);
console.log('Prov count:', provData.length);

let tsProv = `import { DataSource } from 'typeorm';
import { Province } from '../provinces/entities/province.entity.js';

export async function seedProvinces(dataSource: DataSource): Promise<void> {
    const provinceRepository = dataSource.getRepository(Province);
    const data = ${JSON.stringify(provData, null, 4)};

    for (const item of data) {
        const exists = await provinceRepository.findOne({ where: { description: item.descripcion, department_id: Number(item.departamento_id) } });
        if (!exists) {
            await provinceRepository.save(provinceRepository.create({ id: Number(item.id), description: item.descripcion, department_id: Number(item.departamento_id) }));
        }
    }
    console.log('✔ Provincias sembradas (' + data.length + ').');
}
`;
fs.writeFileSync(path.join(dir, 'province.seed.ts'), tsProv);

// Districts
const distContent = fs.readFileSync(path.join(dir, 'district.seed.ts'), 'utf8');
const distData = parseData(distContent);
console.log('Dist count:', distData.length);

let tsDist = `import { DataSource } from 'typeorm';
import { District } from '../districts/entities/district.entity.js';

export async function seedDistricts(dataSource: DataSource): Promise<void> {
    const districtRepository = dataSource.getRepository(District);
    const data = ${JSON.stringify(distData, null, 4)};

    const chunkSize = 200;
    for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        await Promise.all(chunk.map(async (item) => {
            const exists = await districtRepository.findOne({ where: { description: item.descripcion, province_id: Number(item.provincia_id) } });
            if (!exists) {
                await districtRepository.save(districtRepository.create({ id: Number(item.id), description: item.descripcion, province_id: Number(item.provincia_id) }));
            }
        }));
    }
    console.log('✔ Distritos sembrados (' + data.length + ').');
}
`;
fs.writeFileSync(path.join(dir, 'district.seed.ts'), tsDist);
