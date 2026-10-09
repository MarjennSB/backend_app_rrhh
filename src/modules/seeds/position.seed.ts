import { DataSource } from 'typeorm';
import { Position } from '../positions/entities/position.entity.js';
import { OrganizationalUnit } from '../organizational-units/entities/organizational-unit.entity.js';

export async function seedPositions(dataSource: DataSource): Promise<void> {
    const positionRepository = dataSource.getRepository(Position);
    const orgUnitRepository = dataSource.getRepository(OrganizationalUnit);

    const positions = [
        { name: 'Gerente General', unitName: 'Operaciones' },
        { name: 'Jefe de Recursos Humanos', unitName: 'Recursos Humanos' },
        { name: 'Asistente Administrativo', unitName: 'Recursos Humanos' },
        { name: 'Desarrollador Senior', unitName: 'Sistemas' },
        { name: 'Desarrollador Junior', unitName: 'Sistemas' },
        { name: 'Contador General', unitName: 'Finanzas' },
    ];

    for (const pos of positions) {
        const unit = await orgUnitRepository.findOne({ where: { name: pos.unitName } });
        if (!unit) {
            console.log(`  ! Unidad Orgánica no encontrada: ${pos.unitName}. Saltando cargo ${pos.name}`);
            continue;
        }

        const exists = await positionRepository.findOne({ where: { name: pos.name } });
        if (!exists) {
            await positionRepository.save(positionRepository.create({
                name: pos.name,
                organizational_unit_id: unit.id
            }));
            console.log(`  ✔ Cargo creado: ${pos.name} (en ${pos.unitName})`);
        } else {
            if (exists.organizational_unit_id !== unit.id) {
                exists.organizational_unit_id = unit.id;
                await positionRepository.save(exists);
                console.log(`  ✔ Cargo actualizado con su unidad orgánica: ${pos.name} (en ${pos.unitName})`);
            } else {
                console.log(`  - Cargo ya existe y tiene la unidad correcta: ${pos.name}`);
            }
        }
    }
}
