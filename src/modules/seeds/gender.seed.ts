import { DataSource } from 'typeorm';
import { Gender } from '../gender/entities/gender.entity.js';

export async function seedGenders(dataSource: DataSource): Promise<void> {
    const genderRepository = dataSource.getRepository(Gender);

    const genders = [
        { name: 'Masculino', acronym: 'M' },
        { name: 'Femenino', acronym: 'F' },
        { name: 'No Especificado', acronym: 'NE' },
    ];

    for (const gender of genders) {
        const exists = await genderRepository.findOne({ where: { name: gender.name } });
        if (!exists) {
            await genderRepository.save(genderRepository.create(gender));
            console.log(`  ✔ Género creado: ${gender.name}`);
        } else {
            console.log(`  - Género ya existe: ${gender.name}`);
        }
    }
}
