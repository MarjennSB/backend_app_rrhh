import { DataSource } from 'typeorm';
import { VacationType } from '../vacation-types/entities/vacation-type.entity.js';

export async function seedVacationTypes(dataSource: DataSource): Promise<void> {
    const vacationTypeRepository = dataSource.getRepository(VacationType);

    const vacationTypes = [
        { name: 'Vacaciones Anuales' },
        { name: 'Vacaciones Truncas' },
        { name: 'Adelanto de Vacaciones' }
    ];

    for (const vType of vacationTypes) {
        const exists = await vacationTypeRepository.findOne({ where: { name: vType.name } });
        if (!exists) {
            await vacationTypeRepository.save(vacationTypeRepository.create(vType));
            console.log(`  ✔ Tipo de vacación creado: ${vType.name}`);
        } else {
            console.log(`  - Tipo de vacación ya existe: ${vType.name}`);
        }
    }
}
