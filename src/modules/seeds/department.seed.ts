import { DataSource } from 'typeorm';
import { Department } from '../departments/entities/department.entity.js';

export async function seedDepartments(dataSource: DataSource): Promise<void> {
    const departmentRepository = dataSource.getRepository(Department);
    const data = [
    {
        "id": "01",
        "descripcion": "Amazonas"
    },
    {
        "id": "02",
        "descripcion": "Áncash"
    },
    {
        "id": "03",
        "descripcion": "Apurímac"
    },
    {
        "id": "04",
        "descripcion": "Arequipa"
    },
    {
        "id": "05",
        "descripcion": "Ayacucho"
    },
    {
        "id": "06",
        "descripcion": "Cajamarca"
    },
    {
        "id": "07",
        "descripcion": "Callao"
    },
    {
        "id": "08",
        "descripcion": "Cusco"
    },
    {
        "id": "09",
        "descripcion": "Huancavelica"
    },
    {
        "id": "10",
        "descripcion": "Huánuco"
    },
    {
        "id": "11",
        "descripcion": "Ica"
    },
    {
        "id": "12",
        "descripcion": "Junín"
    },
    {
        "id": "13",
        "descripcion": "La Libertad"
    },
    {
        "id": "14",
        "descripcion": "Lambayeque"
    },
    {
        "id": "15",
        "descripcion": "Lima"
    },
    {
        "id": "16",
        "descripcion": "Loreto"
    },
    {
        "id": "17",
        "descripcion": "Madre de Dios"
    },
    {
        "id": "18",
        "descripcion": "Moquegua"
    },
    {
        "id": "19",
        "descripcion": "Pasco"
    },
    {
        "id": "20",
        "descripcion": "Piura"
    },
    {
        "id": "21",
        "descripcion": "Puno"
    },
    {
        "id": "22",
        "descripcion": "San Martín"
    },
    {
        "id": "23",
        "descripcion": "Tacna"
    },
    {
        "id": "24",
        "descripcion": "Tumbes"
    },
    {
        "id": "25",
        "descripcion": "Ucayali"
    }
];

    for (const item of data) {
        const exists = await departmentRepository.findOne({ where: { id: item.id } });
        if (!exists) {
            await departmentRepository.save(departmentRepository.create({ id: item.id, description: item.descripcion }));
        }
    }
    console.log('✔ Departamentos sembrados (' + data.length + ').');
}
