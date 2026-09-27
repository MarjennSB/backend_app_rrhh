import { DataSource } from 'typeorm';
import { OrganizationalUnit } from '../organizational-units/entities/organizational-unit.entity.js';

export async function seedOrganizationalUnits(dataSource: DataSource): Promise<void> {
    const orgUnitRepository = dataSource.getRepository(OrganizationalUnit);

    const units = [
        { name: 'Recursos Humanos', description: 'Gestión de personal' },
        { name: 'Sistemas', description: 'Desarrollo y soporte TI' },
        { name: 'Finanzas', description: 'Contabilidad y finanzas' },
        { name: 'Operaciones', description: 'Operaciones principales' }
    ];

    for (const unit of units) {
        const exists = await orgUnitRepository.findOne({ where: { name: unit.name } });
        if (!exists) {
            await orgUnitRepository.save(orgUnitRepository.create(unit));
            console.log(`  ✔ Unidad Organizacional creada: ${unit.name}`);
        } else {
            console.log(`  - Unidad Organizacional ya existe: ${unit.name}`);
        }
    }
}
