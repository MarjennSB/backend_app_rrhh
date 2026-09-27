import { DataSource } from 'typeorm';
import { Position } from '../positions/entities/position.entity.js';

export async function seedPositions(dataSource: DataSource): Promise<void> {
    const positionRepository = dataSource.getRepository(Position);

    const positions = [
        { name: 'Gerente General' },
        { name: 'Jefe de Recursos Humanos' },
        { name: 'Asistente Administrativo' },
        { name: 'Desarrollador Senior' },
        { name: 'Desarrollador Junior' },
    ];

    for (const pos of positions) {
        const exists = await positionRepository.findOne({ where: { name: pos.name } });
        if (!exists) {
            await positionRepository.save(positionRepository.create(pos));
            console.log(`  ✔ Cargo creado: ${pos.name}`);
        } else {
            console.log(`  - Cargo ya existe: ${pos.name}`);
        }
    }
}
