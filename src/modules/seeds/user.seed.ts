import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../role/entities/role.entity.js';
import { User } from '../user/entities/user.entity.js';

export async function seedUsers(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    const roleRepository = dataSource.getRepository(Role);

    const adminExists = await userRepository.findOne({ where: { login: 'admin' } });

    if (!adminExists) {
        const adminRole = await roleRepository.findOne({ where: { name: 'Administrador' } });

        if (!adminRole) {
            console.log('  ! No se encontró el rol Administrador. Ejecuta primero seedRoles.');
            return;
        }

        const hashedPassword = await bcrypt.hash('admin123', 10);

        const admin = userRepository.create({
            login: 'admin',
            email: 'admin@sistema.com',
            password: hashedPassword,
            first_name: 'Administrador',
            last_name: 'Sistema',
            status: true,
            role_id: adminRole.id,
        });

        await userRepository.save(admin);
        console.log(`  ✔ Usuario creado: login: admin / admin123`);
    } else {
        console.log(`  - Usuario ya existe: admin`);
    }
}