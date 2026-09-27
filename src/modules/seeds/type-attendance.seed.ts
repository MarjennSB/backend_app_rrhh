import { DataSource } from 'typeorm';
import { TypeAttendance } from '../type-attendance/entities/type-attendance.entity.js';

export async function seedTypeAttendances(dataSource: DataSource): Promise<void> {
    const typeAttendanceRepository = dataSource.getRepository(TypeAttendance);

    const typeAttendances = [
        { name: 'Ingreso' },
        { name: 'Salida' },
        { name: 'Inicio de Refrigerio' },
        { name: 'Fin de Refrigerio' },
    ];

    for (const type of typeAttendances) {
        const exists = await typeAttendanceRepository.findOne({ where: { name: type.name } });
        if (!exists) {
            await typeAttendanceRepository.save(typeAttendanceRepository.create(type));
            console.log(`  ✔ Tipo de asistencia creado: ${type.name}`);
        } else {
            console.log(`  - Tipo de asistencia ya existe: ${type.name}`);
        }
    }
}
