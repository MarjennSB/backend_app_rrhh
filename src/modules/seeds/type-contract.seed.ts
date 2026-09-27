import { DataSource } from 'typeorm';
import { TypeContract } from '../type-contract/entities/type-contract.entity.js';

export async function seedTypeContracts(dataSource: DataSource): Promise<void> {
    const typeContractRepository = dataSource.getRepository(TypeContract);

    const typeContracts = [
        { name: 'Contrato a Plazo Indeterminado', description: 'Contrato sin fecha de finalización' },
        { name: 'Contrato a Plazo Fijo', description: 'Contrato con fecha de inicio y fin' },
        { name: 'Contrato por Locación de Servicios', description: 'Contrato independiente' },
        { name: 'Contrato de Prácticas', description: 'Prácticas pre y pro' }
    ];

    for (const contract of typeContracts) {
        const exists = await typeContractRepository.findOne({ where: { name: contract.name } });
        if (!exists) {
            await typeContractRepository.save(typeContractRepository.create(contract));
            console.log(`  ✔ Tipo de contrato creado: ${contract.name}`);
        } else {
            console.log(`  - Tipo de contrato ya existe: ${contract.name}`);
        }
    }
}
