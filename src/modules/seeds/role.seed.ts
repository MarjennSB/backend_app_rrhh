import { DataSource } from 'typeorm';
import { Role } from '../role/entities/role.entity.js';

export async function seedRoles(dataSource: DataSource): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);

    const roles = [
        { name: 'Administrador', description: 'Acceso total al sistema' },
    ];

    for (const role of roles) {
        const exists = await roleRepository.findOne({ where: { name: role.name } });
        if (!exists) {
            await roleRepository.save(roleRepository.create(role));
            console.log(`  ✔ Rol creado: ${role.name}`);
        } else {
            console.log(`  - Rol ya existe: ${role.name}`);
        }
    }
}