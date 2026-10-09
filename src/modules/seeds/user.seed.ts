import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../role/entities/role.entity.js';
import { User } from '../user/entities/user.entity.js';

export async function seedUsers(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    const roleRepository = dataSource.getRepository(Role);

    const adminExists = await userRepository.findOne({ where: { email: 'admin@correo.com' } });

    if (!adminExists) {
        const adminRole = await roleRepository.findOne({ where: { name: 'Administrador' } });

        if (!adminRole) {
            console.log('  ! No se encontró el rol Administrador. Ejecuta primero seedRoles.');
            return;
        }

        const hashedPassword = await bcrypt.hash('admin123', 10);

        const admin = userRepository.create({
            email: 'admin@correo.com',
            password: hashedPassword,
            first_name: 'Administrador',
            last_name: 'Sistema',
            status: true,
            role_id: adminRole.id,
        });

        await userRepository.save(admin);
        console.log(`  ✔ Usuario creado: email: admin@correo.com / admin123`);
    } else {
        console.log(`  - Usuario ya existe: admin`);
    }
}