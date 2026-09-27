import { DataSource } from 'typeorm';
import { Schedule } from '../schedules/entities/schedule.entity.js';
import { OrganizationalUnit } from '../organizational-units/entities/organizational-unit.entity.js';

export async function seedSchedules(dataSource: DataSource): Promise<void> {
    const scheduleRepository = dataSource.getRepository(Schedule);
    const orgUnitRepository = dataSource.getRepository(OrganizationalUnit);

    const rhUnit = await orgUnitRepository.findOne({ where: { name: 'Recursos Humanos' } });
    if (!rhUnit) return;

    const schedules = [
        { 
            name: 'Turno Mañana Completo', 
            organizational_unit_id: rhUnit.id,
            start_time: '08:00:00',
            end_time: '17:00:00',
            tolerance_minutes: 15
        },
        { 
            name: 'Turno Tarde Completo', 
            organizational_unit_id: rhUnit.id,
            start_time: '14:00:00',
            end_time: '22:00:00',
            tolerance_minutes: 10
        }
    ];

    for (const sched of schedules) {
        const exists = await scheduleRepository.findOne({ where: { name: sched.name, organizational_unit_id: sched.organizational_unit_id } });
        if (!exists) {
            await scheduleRepository.save(scheduleRepository.create(sched));
            console.log(`  ✔ Horario creado: ${sched.name}`);
        } else {
            console.log(`  - Horario ya existe: ${sched.name}`);
        }
    }
}
