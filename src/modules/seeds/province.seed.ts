import { DataSource } from 'typeorm';
import { Province } from '../provinces/entities/province.entity.js';

export async function seedProvinces(dataSource: DataSource): Promise<void> {
    const provinceRepository = dataSource.getRepository(Province);
    const data = [
    {
        "id": "0101",
        "descripcion": "Chachapoyas",
        "departamento_id": "01"
    },
    {
        "id": "0102",
        "descripcion": "Bagua",
        "departamento_id": "01"
    },
    {
        "id": "0103",
        "descripcion": "Bongará",
        "departamento_id": "01"
    },
    {
        "id": "0104",
        "descripcion": "Condorcanqui",
        "departamento_id": "01"
    },
    {
        "id": "0105",
        "descripcion": "Luya",
        "departamento_id": "01"
    },
    {
        "id": "0106",
        "descripcion": "Rodríguez de Mendoza",
        "departamento_id": "01"
    },
    {
        "id": "0107",
        "descripcion": "Utcubamba",
        "departamento_id": "01"
    },
    {
        "id": "0201",
        "descripcion": "Huaraz",
        "departamento_id": "02"
    },
    {
        "id": "0202",
        "descripcion": "Aija",
        "departamento_id": "02"
    },
    {
        "id": "0203",
        "descripcion": "Antonio Raymondi",
        "departamento_id": "02"
    },
    {
        "id": "0204",
        "descripcion": "Asunción",
        "departamento_id": "02"
    },
    {
        "id": "0205",
        "descripcion": "Bolognesi",
        "departamento_id": "02"
    },
    {
        "id": "0206",
        "descripcion": "Carhuaz",
        "departamento_id": "02"
    },
    {
        "id": "0207",
        "descripcion": "Carlos Fermín Fitzcarrald",
        "departamento_id": "02"
    },
    {
        "id": "0208",
        "descripcion": "Casma",
        "departamento_id": "02"
    },
    {
        "id": "0209",
        "descripcion": "Corongo",
        "departamento_id": "02"
    },
    {
        "id": "0210",
        "descripcion": "Huari",
        "departamento_id": "02"
    },
    {
        "id": "0211",
        "descripcion": "Huarmey",
        "departamento_id": "02"
    },
    {
        "id": "0212",
        "descripcion": "Huaylas",
        "departamento_id": "02"
    },
    {
        "id": "0213",
        "descripcion": "Mariscal Luzuriaga",
        "departamento_id": "02"
    },
    {
        "id": "0214",
        "descripcion": "Ocros",
        "departamento_id": "02"
    },
    {
        "id": "0215",
        "descripcion": "Pallasca",
        "departamento_id": "02"
    },
    {
        "id": "0216",
        "descripcion": "Pomabamba",
        "departamento_id": "02"
    },
    {
        "id": "0217",
        "descripcion": "Recuay",
        "departamento_id": "02"
    },
    {
        "id": "0218",
        "descripcion": "Santa",
        "departamento_id": "02"
    },
    {
        "id": "0219",
        "descripcion": "Sihuas",
        "departamento_id": "02"
    },
    {
        "id": "0220",
        "descripcion": "Yungay",
        "departamento_id": "02"
    },
    {
        "id": "0301",
        "descripcion": "Abancay",
        "departamento_id": "03"
    },
    {
        "id": "0302",
        "descripcion": "Andahuaylas",
        "departamento_id": "03"
    },
    {
        "id": "0303",
        "descripcion": "Antabamba",
        "departamento_id": "03"
    },
    {
        "id": "0304",
        "descripcion": "Aymaraes",
        "departamento_id": "03"
    },
    {
        "id": "0305",
        "descripcion": "Cotabambas",
        "departamento_id": "03"
    },
    {
        "id": "0306",
        "descripcion": "Chincheros",
        "departamento_id": "03"
    },
    {
        "id": "0307",
        "descripcion": "Grau",
        "departamento_id": "03"
    },
    {
        "id": "0401",
        "descripcion": "Arequipa",
        "departamento_id": "04"
    },
    {
        "id": "0402",
        "descripcion": "Camaná",
        "departamento_id": "04"
    },
    {
        "id": "0403",
        "descripcion": "Caravelí",
        "departamento_id": "04"
    },
    {
        "id": "0404",
        "descripcion": "Castilla",
        "departamento_id": "04"
    },
    {
        "id": "0405",
        "descripcion": "Caylloma",
        "departamento_id": "04"
    },
    {
        "id": "0406",
        "descripcion": "Condesuyos",
        "departamento_id": "04"
    },
    {
        "id": "0407",
        "descripcion": "Islay",
        "departamento_id": "04"
    },
    {
        "id": "0408",
        "descripcion": "La Uniòn",
        "departamento_id": "04"
    },
    {
        "id": "0501",
        "descripcion": "Huamanga",
        "departamento_id": "05"
    },
    {
        "id": "0502",
        "descripcion": "Cangallo",
        "departamento_id": "05"
    },
    {
        "id": "0503",
        "descripcion": "Huanca Sancos",
        "departamento_id": "05"
    },
    {
        "id": "0504",
        "descripcion": "Huanta",
        "departamento_id": "05"
    },
    {
        "id": "0505",
        "descripcion": "La Mar",
        "departamento_id": "05"
    },
    {
        "id": "0506",
        "descripcion": "Lucanas",
        "departamento_id": "05"
    },
    {
        "id": "0507",
        "descripcion": "Parinacochas",
        "departamento_id": "05"
    },
    {
        "id": "0508",
        "descripcion": "Pàucar del Sara Sara",
        "departamento_id": "05"
    },
    {
        "id": "0509",
        "descripcion": "Sucre",
        "departamento_id": "05"
    },
    {
        "id": "0510",
        "descripcion": "Víctor Fajardo",
        "departamento_id": "05"
    },
    {
        "id": "0511",
        "descripcion": "Vilcas Huamán",
        "departamento_id": "05"
    },
    {
        "id": "0601",
        "descripcion": "Cajamarca",
        "departamento_id": "06"
    },
    {
        "id": "0602",
        "descripcion": "Cajabamba",
        "departamento_id": "06"
    },
    {
        "id": "0603",
        "descripcion": "Celendín",
        "departamento_id": "06"
    },
    {
        "id": "0604",
        "descripcion": "Chota",
        "departamento_id": "06"
    },
    {
        "id": "0605",
        "descripcion": "Contumazá",
        "departamento_id": "06"
    },
    {
        "id": "0606",
        "descripcion": "Cutervo",
        "departamento_id": "06"
    },
    {
        "id": "0607",
        "descripcion": "Hualgayoc",
        "departamento_id": "06"
    },
    {
        "id": "0608",
        "descripcion": "Jaén",
        "departamento_id": "06"
    },
    {
        "id": "0609",
        "descripcion": "San Ignacio",
        "departamento_id": "06"
    },
    {
        "id": "0610",
        "descripcion": "San Marcos",
        "departamento_id": "06"
    },
    {
        "id": "0611",
        "descripcion": "San Miguel",
        "departamento_id": "06"
    },
    {
        "id": "0612",
        "descripcion": "San Pablo",
        "departamento_id": "06"
    },
    {
        "id": "0613",
        "descripcion": "Santa Cruz",
        "departamento_id": "06"
    },
    {
        "id": "0701",
        "descripcion": "Prov. Const. del Callao",
        "departamento_id": "07"
    },
    {
        "id": "0801",
        "descripcion": "Cusco",
        "departamento_id": "08"
    },
    {
        "id": "0802",
        "descripcion": "Acomayo",
        "departamento_id": "08"
    },
    {
        "id": "0803",
        "descripcion": "Anta",
        "departamento_id": "08"
    },
    {
        "id": "0804",
        "descripcion": "Calca",
        "departamento_id": "08"
    },
    {
        "id": "0805",
        "descripcion": "Canas",
        "departamento_id": "08"
    },
    {
        "id": "0806",
        "descripcion": "Canchis",
        "departamento_id": "08"
    },
    {
        "id": "0807",
        "descripcion": "Chumbivilcas",
        "departamento_id": "08"
    },
    {
        "id": "0808",
        "descripcion": "Espinar",
        "departamento_id": "08"
    },
    {
        "id": "0809",
        "descripcion": "La Convención",
        "departamento_id": "08"
    },
    {
        "id": "0810",
        "descripcion": "Paruro",
        "departamento_id": "08"
    },
    {
        "id": "0811",
        "descripcion": "Paucartambo",
        "departamento_id": "08"
    },
    {
        "id": "0812",
        "descripcion": "Quispicanchi",
        "departamento_id": "08"
    },
    {
        "id": "0813",
        "descripcion": "Urubamba",
        "departamento_id": "08"
    },
    {
        "id": "0901",
        "descripcion": "Huancavelica",
        "departamento_id": "09"
    },
    {
        "id": "0902",
        "descripcion": "Acobamba",
        "departamento_id": "09"
    },
    {
        "id": "0903",
        "descripcion": "Angaraes",
        "departamento_id": "09"
    },
    {
        "id": "0904",
        "descripcion": "Castrovirreyna",
        "departamento_id": "09"
    },
    {
        "id": "0905",
        "descripcion": "Churcampa",
        "departamento_id": "09"
    },
    {
        "id": "0906",
        "descripcion": "Huaytará",
        "departamento_id": "09"
    },
    {
        "id": "0907",
        "descripcion": "Tayacaja",
        "departamento_id": "09"
    },
    {
        "id": "1001",
        "descripcion": "Huánuco",
        "departamento_id": "10"
    },
    {
        "id": "1002",
        "descripcion": "Ambo",
        "departamento_id": "10"
    },
    {
        "id": "1003",
        "descripcion": "Dos de Mayo",
        "departamento_id": "10"
    },
    {
        "id": "1004",
        "descripcion": "Huacaybamba",
        "departamento_id": "10"
    },
    {
        "id": "1005",
        "descripcion": "Huamalíes",
        "departamento_id": "10"
    },
    {
        "id": "1006",
        "descripcion": "Leoncio Prado",
        "departamento_id": "10"
    },
    {
        "id": "1007",
        "descripcion": "Marañón",
        "departamento_id": "10"
    },
    {
        "id": "1008",
        "descripcion": "Pachitea",
        "departamento_id": "10"
    },
    {
        "id": "1009",
        "descripcion": "Puerto Inca",
        "departamento_id": "10"
    },
    {
        "id": "1010",
        "descripcion": "Lauricocha ",
        "departamento_id": "10"
    },
    {
        "id": "1011",
        "descripcion": "Yarowilca ",
        "departamento_id": "10"
    },
    {
        "id": "1101",
        "descripcion": "Ica ",
        "departamento_id": "11"
    },
    {
        "id": "1102",
        "descripcion": "Chincha ",
        "departamento_id": "11"
    },
    {
        "id": "1103",
        "descripcion": "Nasca ",
        "departamento_id": "11"
    },
    {
        "id": "1104",
        "descripcion": "Palpa ",
        "departamento_id": "11"
    },
    {
        "id": "1105",
        "descripcion": "Pisco ",
        "departamento_id": "11"
    },
    {
        "id": "1201",
        "descripcion": "Huancayo ",
        "departamento_id": "12"
    },
    {
        "id": "1202",
        "descripcion": "Concepción ",
        "departamento_id": "12"
    },
    {
        "id": "1203",
        "descripcion": "Chanchamayo ",
        "departamento_id": "12"
    },
    {
        "id": "1204",
        "descripcion": "Jauja ",
        "departamento_id": "12"
    },
    {
        "id": "1205",
        "descripcion": "Junín ",
        "departamento_id": "12"
    },
    {
        "id": "1206",
        "descripcion": "Satipo ",
        "departamento_id": "12"
    },
    {
        "id": "1207",
        "descripcion": "Tarma ",
        "departamento_id": "12"
    },
    {
        "id": "1208",
        "descripcion": "Yauli ",
        "departamento_id": "12"
    },
    {
        "id": "1209",
        "descripcion": "Chupaca ",
        "departamento_id": "12"
    },
    {
        "id": "1301",
        "descripcion": "Trujillo ",
        "departamento_id": "13"
    },
    {
        "id": "1302",
        "descripcion": "Ascope ",
        "departamento_id": "13"
    },
    {
        "id": "1303",
        "descripcion": "Bolívar ",
        "departamento_id": "13"
    },
    {
        "id": "1304",
        "descripcion": "Chepén ",
        "departamento_id": "13"
    },
    {
        "id": "1305",
        "descripcion": "Julcán ",
        "departamento_id": "13"
    },
    {
        "id": "1306",
        "descripcion": "Otuzco ",
        "departamento_id": "13"
    },
    {
        "id": "1307",
        "descripcion": "Pacasmayo ",
        "departamento_id": "13"
    },
    {
        "id": "1308",
        "descripcion": "Pataz ",
        "departamento_id": "13"
    },
    {
        "id": "1309",
        "descripcion": "Sánchez Carrión ",
        "departamento_id": "13"
    },
    {
        "id": "1310",
        "descripcion": "Santiago de Chuco ",
        "departamento_id": "13"
    },
    {
        "id": "1311",
        "descripcion": "Gran Chimú ",
        "departamento_id": "13"
    },
    {
        "id": "1312",
        "descripcion": "Virú ",
        "departamento_id": "13"
    },
    {
        "id": "1401",
        "descripcion": "Chiclayo ",
        "departamento_id": "14"
    },
    {
        "id": "1402",
        "descripcion": "Ferreñafe ",
        "departamento_id": "14"
    },
    {
        "id": "1403",
        "descripcion": "Lambayeque ",
        "departamento_id": "14"
    },
    {
        "id": "1501",
        "descripcion": "Lima ",
        "departamento_id": "15"
    },
    {
        "id": "1502",
        "descripcion": "Barranca ",
        "departamento_id": "15"
    },
    {
        "id": "1503",
        "descripcion": "Cajatambo ",
        "departamento_id": "15"
    },
    {
        "id": "1504",
        "descripcion": "Canta ",
        "departamento_id": "15"
    },
    {
        "id": "1505",
        "descripcion": "Cañete ",
        "departamento_id": "15"
    },
    {
        "id": "1506",
        "descripcion": "Huaral ",
        "departamento_id": "15"
    },
    {
        "id": "1507",
        "descripcion": "Huarochirí ",
        "departamento_id": "15"
    },
    {
        "id": "1508",
        "descripcion": "Huaura ",
        "departamento_id": "15"
    },
    {
        "id": "1509",
        "descripcion": "Oyón ",
        "departamento_id": "15"
    },
    {
        "id": "1510",
        "descripcion": "Yauyos ",
        "departamento_id": "15"
    },
    {
        "id": "1601",
        "descripcion": "Maynas ",
        "departamento_id": "16"
    },
    {
        "id": "1602",
        "descripcion": "Alto Amazonas ",
        "departamento_id": "16"
    },
    {
        "id": "1603",
        "descripcion": "Loreto ",
        "departamento_id": "16"
    },
    {
        "id": "1604",
        "descripcion": "Mariscal Ramón Castilla ",
        "departamento_id": "16"
    },
    {
        "id": "1605",
        "descripcion": "Requena ",
        "departamento_id": "16"
    },
    {
        "id": "1606",
        "descripcion": "Ucayali ",
        "departamento_id": "16"
    },
    {
        "id": "1607",
        "descripcion": "Datem del Marañón ",
        "departamento_id": "16"
    },
    {
        "id": "1608",
        "descripcion": "Putumayo",
        "departamento_id": "16"
    },
    {
        "id": "1701",
        "descripcion": "Tambopata ",
        "departamento_id": "17"
    },
    {
        "id": "1702",
        "descripcion": "Manu ",
        "departamento_id": "17"
    },
    {
        "id": "1703",
        "descripcion": "Tahuamanu ",
        "departamento_id": "17"
    },
    {
        "id": "1801",
        "descripcion": "Mariscal Nieto ",
        "departamento_id": "18"
    },
    {
        "id": "1802",
        "descripcion": "General Sánchez Cerro ",
        "departamento_id": "18"
    },
    {
        "id": "1803",
        "descripcion": "Ilo ",
        "departamento_id": "18"
    },
    {
        "id": "1901",
        "descripcion": "Pasco ",
        "departamento_id": "19"
    },
    {
        "id": "1902",
        "descripcion": "Daniel Alcides Carrión ",
        "departamento_id": "19"
    },
    {
        "id": "1903",
        "descripcion": "Oxapampa ",
        "departamento_id": "19"
    },
    {
        "id": "2001",
        "descripcion": "Piura ",
        "departamento_id": "20"
    },
    {
        "id": "2002",
        "descripcion": "Ayabaca ",
        "departamento_id": "20"
    },
    {
        "id": "2003",
        "descripcion": "Huancabamba ",
        "departamento_id": "20"
    },
    {
        "id": "2004",
        "descripcion": "Morropón ",
        "departamento_id": "20"
    },
    {
        "id": "2005",
        "descripcion": "Paita ",
        "departamento_id": "20"
    },
    {
        "id": "2006",
        "descripcion": "Sullana ",
        "departamento_id": "20"
    },
    {
        "id": "2007",
        "descripcion": "Talara ",
        "departamento_id": "20"
    },
    {
        "id": "2008",
        "descripcion": "Sechura ",
        "departamento_id": "20"
    },
    {
        "id": "2101",
        "descripcion": "Puno ",
        "departamento_id": "21"
    },
    {
        "id": "2102",
        "descripcion": "Azángaro ",
        "departamento_id": "21"
    },
    {
        "id": "2103",
        "descripcion": "Carabaya ",
        "departamento_id": "21"
    },
    {
        "id": "2104",
        "descripcion": "Chucuito ",
        "departamento_id": "21"
    },
    {
        "id": "2105",
        "descripcion": "El Collao ",
        "departamento_id": "21"
    },
    {
        "id": "2106",
        "descripcion": "Huancané ",
        "departamento_id": "21"
    },
    {
        "id": "2107",
        "descripcion": "Lampa ",
        "departamento_id": "21"
    },
    {
        "id": "2108",
        "descripcion": "Melgar ",
        "departamento_id": "21"
    },
    {
        "id": "2109",
        "descripcion": "Moho ",
        "departamento_id": "21"
    },
    {
        "id": "2110",
        "descripcion": "San Antonio de Putina ",
        "departamento_id": "21"
    },
    {
        "id": "2111",
        "descripcion": "San Román ",
        "departamento_id": "21"
    },
    {
        "id": "2112",
        "descripcion": "Sandia ",
        "departamento_id": "21"
    },
    {
        "id": "2113",
        "descripcion": "Yunguyo ",
        "departamento_id": "21"
    },
    {
        "id": "2201",
        "descripcion": "Moyobamba ",
        "departamento_id": "22"
    },
    {
        "id": "2202",
        "descripcion": "Bellavista ",
        "departamento_id": "22"
    },
    {
        "id": "2203",
        "descripcion": "El Dorado ",
        "departamento_id": "22"
    },
    {
        "id": "2204",
        "descripcion": "Huallaga ",
        "departamento_id": "22"
    },
    {
        "id": "2205",
        "descripcion": "Lamas ",
        "departamento_id": "22"
    },
    {
        "id": "2206",
        "descripcion": "Mariscal Cáceres ",
        "departamento_id": "22"
    },
    {
        "id": "2207",
        "descripcion": "Picota ",
        "departamento_id": "22"
    },
    {
        "id": "2208",
        "descripcion": "Rioja ",
        "departamento_id": "22"
    },
    {
        "id": "2209",
        "descripcion": "San Martín ",
        "departamento_id": "22"
    },
    {
        "id": "2210",
        "descripcion": "Tocache ",
        "departamento_id": "22"
    },
    {
        "id": "2301",
        "descripcion": "Tacna ",
        "departamento_id": "23"
    },
    {
        "id": "2302",
        "descripcion": "Candarave ",
        "departamento_id": "23"
    },
    {
        "id": "2303",
        "descripcion": "Jorge Basadre ",
        "departamento_id": "23"
    },
    {
        "id": "2304",
        "descripcion": "Tarata ",
        "departamento_id": "23"
    },
    {
        "id": "2401",
        "descripcion": "Tumbes ",
        "departamento_id": "24"
    },
    {
        "id": "2402",
        "descripcion": "Contralmirante Villar ",
        "departamento_id": "24"
    },
    {
        "id": "2403",
        "descripcion": "Zarumilla ",
        "departamento_id": "24"
    },
    {
        "id": "2501",
        "descripcion": "Coronel Portillo ",
        "departamento_id": "25"
    },
    {
        "id": "2502",
        "descripcion": "Atalaya ",
        "departamento_id": "25"
    },
    {
        "id": "2503",
        "descripcion": "Padre Abad ",
        "departamento_id": "25"
    },
    {
        "id": "2504",
        "descripcion": "Purús",
        "departamento_id": "25"
    }
];

    for (const item of data) {
        const exists = await provinceRepository.findOne({ where: { id: item.id } });
        if (!exists) {
            await provinceRepository.save(provinceRepository.create({ id: item.id, description: item.descripcion, department_id: item.departamento_id }));
        }
    }
    console.log('✔ Provincias sembradas (' + data.length + ').');
}
