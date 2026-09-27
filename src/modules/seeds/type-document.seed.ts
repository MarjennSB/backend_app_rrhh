import { DataSource } from 'typeorm';
import { TypeDocument } from '../type-document/entities/type-document.entity.js';

export async function seedTypeDocuments(dataSource: DataSource): Promise<void> {
    const typeDocumentRepository = dataSource.getRepository(TypeDocument);

    const typeDocuments = [
        { acronym: 'DNI', name: 'Documento Nacional de Identidad' },
        { acronym: 'RUC', name: 'Registro Único de Contribuyentes' },
        { acronym: 'CE', name: 'Carnet de Extranjería' },
        { acronym: 'PAS', name: 'Pasaporte' },
    ];

    for (const typeDoc of typeDocuments) {
        const exists = await typeDocumentRepository.findOne({ where: { acronym: typeDoc.acronym } });
        if (!exists) {
            await typeDocumentRepository.save(typeDocumentRepository.create(typeDoc));
            console.log(`  ✔ Tipo documento creado: ${typeDoc.acronym}`);
        } else {
            console.log(`  - Tipo documento ya existe: ${typeDoc.acronym}`);
        }
    }
}