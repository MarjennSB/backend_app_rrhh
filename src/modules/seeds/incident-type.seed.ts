import { DataSource } from 'typeorm';
import { IncidentType } from '../incident-types/entities/incident-type.entity.js';

export async function seedIncidentTypes(dataSource: DataSource): Promise<void> {
    const incidentTypeRepository = dataSource.getRepository(IncidentType);

    const incidentTypes = [
        { name: 'Falta Injustificada' },
        { name: 'Falta Justificada' },
        { name: 'Permiso Personal' },
        { name: 'Descanso Médico' },
        { name: 'Licencia por Maternidad/Paternidad' }
    ];

    for (const incident of incidentTypes) {
        const exists = await incidentTypeRepository.findOne({ where: { name: incident.name } });
        if (!exists) {
            await incidentTypeRepository.save(incidentTypeRepository.create(incident));
            console.log(`  ✔ Tipo de incidencia creado: ${incident.name}`);
        } else {
            console.log(`  - Tipo de incidencia ya existe: ${incident.name}`);
        }
    }
}
