import { DataSource } from 'typeorm';
import { PersonalDocumentType } from '../personal-document-types/entities/personal-document-type.entity.js';

export async function seedPersonalDocumentTypes(dataSource: DataSource): Promise<void> {
    const personalDocumentTypeRepository = dataSource.getRepository(PersonalDocumentType);

    const docTypes = [
        { name: 'Currículum Vitae' },
        { name: 'Copia de DNI' },
        { name: 'Certificado de Antecedentes Policiales' },
        { name: 'Certificado Médico' },
        { name: 'Copia de Título/Bachiller' }
    ];

    for (const doc of docTypes) {
        const exists = await personalDocumentTypeRepository.findOne({ where: { name: doc.name } });
        if (!exists) {
            await personalDocumentTypeRepository.save(personalDocumentTypeRepository.create(doc));
            console.log(`  ✔ Tipo de documento personal creado: ${doc.name}`);
        } else {
            console.log(`  - Tipo de documento personal ya existe: ${doc.name}`);
        }
    }
}
