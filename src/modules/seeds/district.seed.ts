import { DataSource } from 'typeorm';
import { District } from '../districts/entities/district.entity.js';

export async function seedDistricts(dataSource: DataSource): Promise<void> {
    const districtRepository = dataSource.getRepository(District);
    const data = [
    {
        "id": "010101",
        "descripcion": "Chachapoyas",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010102",
        "descripcion": "Asunción",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010103",
        "descripcion": "Balsas",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010104",
        "descripcion": "Cheto",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010105",
        "descripcion": "Chiliquin",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010106",
        "descripcion": "Chuquibamba",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010107",
        "descripcion": "Granada",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010108",
        "descripcion": "Huancas",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010109",
        "descripcion": "La Jalca",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010110",
        "descripcion": "Leimebamba",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010111",
        "descripcion": "Levanto",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010112",
        "descripcion": "Magdalena",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010113",
        "descripcion": "Mariscal Castilla",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010114",
        "descripcion": "Molinopampa",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010115",
        "descripcion": "Montevideo",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010116",
        "descripcion": "Olleros",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010117",
        "descripcion": "Quinjalca",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010118",
        "descripcion": "San Francisco de Daguas",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010119",
        "descripcion": "San Isidro de Maino",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010120",
        "descripcion": "Soloco",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010121",
        "descripcion": "Sonche",
        "provincia_id": "0101",
        "departamento_id": "01"
    },
    {
        "id": "010201",
        "descripcion": "Bagua",
        "provincia_id": "0102",
        "departamento_id": "01"
    },
    {
        "id": "010202",
        "descripcion": "Aramango",
        "provincia_id": "0102",
        "departamento_id": "01"
    },
    {
        "id": "010203",
        "descripcion": "Copallin",
        "provincia_id": "0102",
        "departamento_id": "01"
    },
    {
        "id": "010204",
        "descripcion": "El Parco",
        "provincia_id": "0102",
        "departamento_id": "01"
    },
    {
        "id": "010205",
        "descripcion": "Imaza",
        "provincia_id": "0102",
        "departamento_id": "01"
    },
    {
        "id": "010206",
        "descripcion": "La Peca",
        "provincia_id": "0102",
        "departamento_id": "01"
    },
    {
        "id": "010301",
        "descripcion": "Jumbilla",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010302",
        "descripcion": "Chisquilla",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010303",
        "descripcion": "Churuja",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010304",
        "descripcion": "Corosha",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010305",
        "descripcion": "Cuispes",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010306",
        "descripcion": "Florida",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010307",
        "descripcion": "Jazan",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010308",
        "descripcion": "Recta",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010309",
        "descripcion": "San Carlos",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010310",
        "descripcion": "Shipasbamba",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010311",
        "descripcion": "Valera",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010312",
        "descripcion": "Yambrasbamba",
        "provincia_id": "0103",
        "departamento_id": "01"
    },
    {
        "id": "010401",
        "descripcion": "Nieva",
        "provincia_id": "0104",
        "departamento_id": "01"
    },
    {
        "id": "010402",
        "descripcion": "El Cenepa",
        "provincia_id": "0104",
        "departamento_id": "01"
    },
    {
        "id": "010403",
        "descripcion": "Río Santiago",
        "provincia_id": "0104",
        "departamento_id": "01"
    },
    {
        "id": "010501",
        "descripcion": "Lamud",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010502",
        "descripcion": "Camporredondo",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010503",
        "descripcion": "Cocabamba",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010504",
        "descripcion": "Colcamar",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010505",
        "descripcion": "Conila",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010506",
        "descripcion": "Inguilpata",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010507",
        "descripcion": "Longuita",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010508",
        "descripcion": "Lonya Chico",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010509",
        "descripcion": "Luya",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010510",
        "descripcion": "Luya Viejo",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010511",
        "descripcion": "María",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010512",
        "descripcion": "Ocalli",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010513",
        "descripcion": "Ocumal",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010514",
        "descripcion": "Pisuquia",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010515",
        "descripcion": "Providencia",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010516",
        "descripcion": "San Cristóbal",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010517",
        "descripcion": "San Francisco de Yeso",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010518",
        "descripcion": "San Jerónimo",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010519",
        "descripcion": "San Juan de Lopecancha",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010520",
        "descripcion": "Santa Catalina",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010521",
        "descripcion": "Santo Tomas",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010522",
        "descripcion": "Tingo",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010523",
        "descripcion": "Trita",
        "provincia_id": "0105",
        "departamento_id": "01"
    },
    {
        "id": "010601",
        "descripcion": "San Nicolás",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010602",
        "descripcion": "Chirimoto",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010603",
        "descripcion": "Cochamal",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010604",
        "descripcion": "Huambo",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010605",
        "descripcion": "Limabamba",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010606",
        "descripcion": "Longar",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010607",
        "descripcion": "Mariscal Benavides",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010608",
        "descripcion": "Milpuc",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010609",
        "descripcion": "Omia",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010610",
        "descripcion": "Santa Rosa",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010611",
        "descripcion": "Totora",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010612",
        "descripcion": "Vista Alegre",
        "provincia_id": "0106",
        "departamento_id": "01"
    },
    {
        "id": "010701",
        "descripcion": "Bagua Grande",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "010702",
        "descripcion": "Cajaruro",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "010703",
        "descripcion": "Cumba",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "010704",
        "descripcion": "El Milagro",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "010705",
        "descripcion": "Jamalca",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "010706",
        "descripcion": "Lonya Grande",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "010707",
        "descripcion": "Yamon",
        "provincia_id": "0107",
        "departamento_id": "01"
    },
    {
        "id": "020101",
        "descripcion": "Huaraz",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020102",
        "descripcion": "Cochabamba",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020103",
        "descripcion": "Colcabamba",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020104",
        "descripcion": "Huanchay",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020105",
        "descripcion": "Independencia",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020106",
        "descripcion": "Jangas",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020107",
        "descripcion": "La Libertad",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020108",
        "descripcion": "Olleros",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020109",
        "descripcion": "Pampas Grande",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020110",
        "descripcion": "Pariacoto",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020111",
        "descripcion": "Pira",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020112",
        "descripcion": "Tarica",
        "provincia_id": "0201",
        "departamento_id": "02"
    },
    {
        "id": "020201",
        "descripcion": "Aija",
        "provincia_id": "0202",
        "departamento_id": "02"
    },
    {
        "id": "020202",
        "descripcion": "Coris",
        "provincia_id": "0202",
        "departamento_id": "02"
    },
    {
        "id": "020203",
        "descripcion": "Huacllan",
        "provincia_id": "0202",
        "departamento_id": "02"
    },
    {
        "id": "020204",
        "descripcion": "La Merced",
        "provincia_id": "0202",
        "departamento_id": "02"
    },
    {
        "id": "020205",
        "descripcion": "Succha",
        "provincia_id": "0202",
        "departamento_id": "02"
    },
    {
        "id": "020301",
        "descripcion": "Llamellin",
        "provincia_id": "0203",
        "departamento_id": "02"
    },
    {
        "id": "020302",
        "descripcion": "Aczo",
        "provincia_id": "0203",
        "departamento_id": "02"
    },
    {
        "id": "020303",
        "descripcion": "Chaccho",
        "provincia_id": "0203",
        "departamento_id": "02"
    },
    {
        "id": "020304",
        "descripcion": "Chingas",
        "provincia_id": "0203",
        "departamento_id": "02"
    },
    {
        "id": "020305",
        "descripcion": "Mirgas",
        "provincia_id": "0203",
        "departamento_id": "02"
    },
    {
        "id": "020306",
        "descripcion": "San Juan de Rontoy",
        "provincia_id": "0203",
        "departamento_id": "02"
    },
    {
        "id": "020401",
        "descripcion": "Chacas",
        "provincia_id": "0204",
        "departamento_id": "02"
    },
    {
        "id": "020402",
        "descripcion": "Acochaca",
        "provincia_id": "0204",
        "departamento_id": "02"
    },
    {
        "id": "020501",
        "descripcion": "Chiquian",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020502",
        "descripcion": "Abelardo Pardo Lezameta",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020503",
        "descripcion": "Antonio Raymondi",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020504",
        "descripcion": "Aquia",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020505",
        "descripcion": "Cajacay",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020506",
        "descripcion": "Canis",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020507",
        "descripcion": "Colquioc",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020508",
        "descripcion": "Huallanca",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020509",
        "descripcion": "Huasta",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020510",
        "descripcion": "Huayllacayan",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020511",
        "descripcion": "La Primavera",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020512",
        "descripcion": "Mangas",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020513",
        "descripcion": "Pacllon",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020514",
        "descripcion": "San Miguel de Corpanqui",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020515",
        "descripcion": "Ticllos",
        "provincia_id": "0205",
        "departamento_id": "02"
    },
    {
        "id": "020601",
        "descripcion": "Carhuaz",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020602",
        "descripcion": "Acopampa",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020603",
        "descripcion": "Amashca",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020604",
        "descripcion": "Anta",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020605",
        "descripcion": "Ataquero",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020606",
        "descripcion": "Marcara",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020607",
        "descripcion": "Pariahuanca",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020608",
        "descripcion": "San Miguel de Aco",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020609",
        "descripcion": "Shilla",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020610",
        "descripcion": "Tinco",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020611",
        "descripcion": "Yungar",
        "provincia_id": "0206",
        "departamento_id": "02"
    },
    {
        "id": "020701",
        "descripcion": "San Luis",
        "provincia_id": "0207",
        "departamento_id": "02"
    },
    {
        "id": "020702",
        "descripcion": "San Nicolás",
        "provincia_id": "0207",
        "departamento_id": "02"
    },
    {
        "id": "020703",
        "descripcion": "Yauya",
        "provincia_id": "0207",
        "departamento_id": "02"
    },
    {
        "id": "020801",
        "descripcion": "Casma",
        "provincia_id": "0208",
        "departamento_id": "02"
    },
    {
        "id": "020802",
        "descripcion": "Buena Vista Alta",
        "provincia_id": "0208",
        "departamento_id": "02"
    },
    {
        "id": "020803",
        "descripcion": "Comandante Noel",
        "provincia_id": "0208",
        "departamento_id": "02"
    },
    {
        "id": "020804",
        "descripcion": "Yautan",
        "provincia_id": "0208",
        "departamento_id": "02"
    },
    {
        "id": "020901",
        "descripcion": "Corongo",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "020902",
        "descripcion": "Aco",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "020903",
        "descripcion": "Bambas",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "020904",
        "descripcion": "Cusca",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "020905",
        "descripcion": "La Pampa",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "020906",
        "descripcion": "Yanac",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "020907",
        "descripcion": "Yupan",
        "provincia_id": "0209",
        "departamento_id": "02"
    },
    {
        "id": "021001",
        "descripcion": "Huari",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021002",
        "descripcion": "Anra",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021003",
        "descripcion": "Cajay",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021004",
        "descripcion": "Chavin de Huantar",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021005",
        "descripcion": "Huacachi",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021006",
        "descripcion": "Huacchis",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021007",
        "descripcion": "Huachis",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021008",
        "descripcion": "Huantar",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021009",
        "descripcion": "Masin",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021010",
        "descripcion": "Paucas",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021011",
        "descripcion": "Ponto",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021012",
        "descripcion": "Rahuapampa",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021013",
        "descripcion": "Rapayan",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021014",
        "descripcion": "San Marcos",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021015",
        "descripcion": "San Pedro de Chana",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021016",
        "descripcion": "Uco",
        "provincia_id": "0210",
        "departamento_id": "02"
    },
    {
        "id": "021101",
        "descripcion": "Huarmey",
        "provincia_id": "0211",
        "departamento_id": "02"
    },
    {
        "id": "021102",
        "descripcion": "Cochapeti",
        "provincia_id": "0211",
        "departamento_id": "02"
    },
    {
        "id": "021103",
        "descripcion": "Culebras",
        "provincia_id": "0211",
        "departamento_id": "02"
    },
    {
        "id": "021104",
        "descripcion": "Huayan",
        "provincia_id": "0211",
        "departamento_id": "02"
    },
    {
        "id": "021105",
        "descripcion": "Malvas",
        "provincia_id": "0211",
        "departamento_id": "02"
    },
    {
        "id": "021201",
        "descripcion": "Caraz",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021202",
        "descripcion": "Huallanca",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021203",
        "descripcion": "Huata",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021204",
        "descripcion": "Huaylas",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021205",
        "descripcion": "Mato",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021206",
        "descripcion": "Pamparomas",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021207",
        "descripcion": "Pueblo Libre",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021208",
        "descripcion": "Santa Cruz",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021209",
        "descripcion": "Santo Toribio",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021210",
        "descripcion": "Yuracmarca",
        "provincia_id": "0212",
        "departamento_id": "02"
    },
    {
        "id": "021301",
        "descripcion": "Piscobamba",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021302",
        "descripcion": "Casca",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021303",
        "descripcion": "Eleazar Guzmán Barron",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021304",
        "descripcion": "Fidel Olivas Escudero",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021305",
        "descripcion": "Llama",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021306",
        "descripcion": "Llumpa",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021307",
        "descripcion": "Lucma",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021308",
        "descripcion": "Musga",
        "provincia_id": "0213",
        "departamento_id": "02"
    },
    {
        "id": "021401",
        "descripcion": "Ocros",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021402",
        "descripcion": "Acas",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021403",
        "descripcion": "Cajamarquilla",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021404",
        "descripcion": "Carhuapampa",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021405",
        "descripcion": "Cochas",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021406",
        "descripcion": "Congas",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021407",
        "descripcion": "Llipa",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021408",
        "descripcion": "San Cristóbal de Rajan",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021409",
        "descripcion": "San Pedro",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021410",
        "descripcion": "Santiago de Chilcas",
        "provincia_id": "0214",
        "departamento_id": "02"
    },
    {
        "id": "021501",
        "descripcion": "Cabana",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021502",
        "descripcion": "Bolognesi",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021503",
        "descripcion": "Conchucos",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021504",
        "descripcion": "Huacaschuque",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021505",
        "descripcion": "Huandoval",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021506",
        "descripcion": "Lacabamba",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021507",
        "descripcion": "Llapo",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021508",
        "descripcion": "Pallasca",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021509",
        "descripcion": "Pampas",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021510",
        "descripcion": "Santa Rosa",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021511",
        "descripcion": "Tauca",
        "provincia_id": "0215",
        "departamento_id": "02"
    },
    {
        "id": "021601",
        "descripcion": "Pomabamba",
        "provincia_id": "0216",
        "departamento_id": "02"
    },
    {
        "id": "021602",
        "descripcion": "Huayllan",
        "provincia_id": "0216",
        "departamento_id": "02"
    },
    {
        "id": "021603",
        "descripcion": "Parobamba",
        "provincia_id": "0216",
        "departamento_id": "02"
    },
    {
        "id": "021604",
        "descripcion": "Quinuabamba",
        "provincia_id": "0216",
        "departamento_id": "02"
    },
    {
        "id": "021701",
        "descripcion": "Recuay",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021702",
        "descripcion": "Catac",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021703",
        "descripcion": "Cotaparaco",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021704",
        "descripcion": "Huayllapampa",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021705",
        "descripcion": "Llacllin",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021706",
        "descripcion": "Marca",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021707",
        "descripcion": "Pampas Chico",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021708",
        "descripcion": "Pararin",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021709",
        "descripcion": "Tapacocha",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021710",
        "descripcion": "Ticapampa",
        "provincia_id": "0217",
        "departamento_id": "02"
    },
    {
        "id": "021801",
        "descripcion": "Chimbote",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021802",
        "descripcion": "Cáceres del Perú",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021803",
        "descripcion": "Coishco",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021804",
        "descripcion": "Macate",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021805",
        "descripcion": "Moro",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021806",
        "descripcion": "Nepeña",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021807",
        "descripcion": "Samanco",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021808",
        "descripcion": "Santa",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021809",
        "descripcion": "Nuevo Chimbote",
        "provincia_id": "0218",
        "departamento_id": "02"
    },
    {
        "id": "021901",
        "descripcion": "Sihuas",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021902",
        "descripcion": "Acobamba",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021903",
        "descripcion": "Alfonso Ugarte",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021904",
        "descripcion": "Cashapampa",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021905",
        "descripcion": "Chingalpo",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021906",
        "descripcion": "Huayllabamba",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021907",
        "descripcion": "Quiches",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021908",
        "descripcion": "Ragash",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021909",
        "descripcion": "San Juan",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "021910",
        "descripcion": "Sicsibamba",
        "provincia_id": "0219",
        "departamento_id": "02"
    },
    {
        "id": "022001",
        "descripcion": "Yungay",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022002",
        "descripcion": "Cascapara",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022003",
        "descripcion": "Mancos",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022004",
        "descripcion": "Matacoto",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022005",
        "descripcion": "Quillo",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022006",
        "descripcion": "Ranrahirca",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022007",
        "descripcion": "Shupluy",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "022008",
        "descripcion": "Yanama",
        "provincia_id": "0220",
        "departamento_id": "02"
    },
    {
        "id": "030101",
        "descripcion": "Abancay",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030102",
        "descripcion": "Chacoche",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030103",
        "descripcion": "Circa",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030104",
        "descripcion": "Curahuasi",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030105",
        "descripcion": "Huanipaca",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030106",
        "descripcion": "Lambrama",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030107",
        "descripcion": "Pichirhua",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030108",
        "descripcion": "San Pedro de Cachora",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030109",
        "descripcion": "Tamburco",
        "provincia_id": "0301",
        "departamento_id": "03"
    },
    {
        "id": "030201",
        "descripcion": "Andahuaylas",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030202",
        "descripcion": "Andarapa",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030203",
        "descripcion": "Chiara",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030204",
        "descripcion": "Huancarama",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030205",
        "descripcion": "Huancaray",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030206",
        "descripcion": "Huayana",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030207",
        "descripcion": "Kishuara",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030208",
        "descripcion": "Pacobamba",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030209",
        "descripcion": "Pacucha",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030210",
        "descripcion": "Pampachiri",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030211",
        "descripcion": "Pomacocha",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030212",
        "descripcion": "San Antonio de Cachi",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030213",
        "descripcion": "San Jerónimo",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030214",
        "descripcion": "San Miguel de Chaccrampa",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030215",
        "descripcion": "Santa María de Chicmo",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030216",
        "descripcion": "Talavera",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030217",
        "descripcion": "Tumay Huaraca",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030218",
        "descripcion": "Turpo",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030219",
        "descripcion": "Kaquiabamba",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030220",
        "descripcion": "José María Arguedas",
        "provincia_id": "0302",
        "departamento_id": "03"
    },
    {
        "id": "030301",
        "descripcion": "Antabamba",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030302",
        "descripcion": "El Oro",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030303",
        "descripcion": "Huaquirca",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030304",
        "descripcion": "Juan Espinoza Medrano",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030305",
        "descripcion": "Oropesa",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030306",
        "descripcion": "Pachaconas",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030307",
        "descripcion": "Sabaino",
        "provincia_id": "0303",
        "departamento_id": "03"
    },
    {
        "id": "030401",
        "descripcion": "Chalhuanca",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030402",
        "descripcion": "Capaya",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030403",
        "descripcion": "Caraybamba",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030404",
        "descripcion": "Chapimarca",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030405",
        "descripcion": "Colcabamba",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030406",
        "descripcion": "Cotaruse",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030407",
        "descripcion": "Ihuayllo",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030408",
        "descripcion": "Justo Apu Sahuaraura",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030409",
        "descripcion": "Lucre",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030410",
        "descripcion": "Pocohuanca",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030411",
        "descripcion": "San Juan de Chacña",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030412",
        "descripcion": "Sañayca",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030413",
        "descripcion": "Soraya",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030414",
        "descripcion": "Tapairihua",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030415",
        "descripcion": "Tintay",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030416",
        "descripcion": "Toraya",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030417",
        "descripcion": "Yanaca",
        "provincia_id": "0304",
        "departamento_id": "03"
    },
    {
        "id": "030501",
        "descripcion": "Tambobamba",
        "provincia_id": "0305",
        "departamento_id": "03"
    },
    {
        "id": "030502",
        "descripcion": "Cotabambas",
        "provincia_id": "0305",
        "departamento_id": "03"
    },
    {
        "id": "030503",
        "descripcion": "Coyllurqui",
        "provincia_id": "0305",
        "departamento_id": "03"
    },
    {
        "id": "030504",
        "descripcion": "Haquira",
        "provincia_id": "0305",
        "departamento_id": "03"
    },
    {
        "id": "030505",
        "descripcion": "Mara",
        "provincia_id": "0305",
        "departamento_id": "03"
    },
    {
        "id": "030506",
        "descripcion": "Challhuahuacho",
        "provincia_id": "0305",
        "departamento_id": "03"
    },
    {
        "id": "030601",
        "descripcion": "Chincheros",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030602",
        "descripcion": "Anco_Huallo",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030603",
        "descripcion": "Cocharcas",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030604",
        "descripcion": "Huaccana",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030605",
        "descripcion": "Ocobamba",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030606",
        "descripcion": "Ongoy",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030607",
        "descripcion": "Uranmarca",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030608",
        "descripcion": "Ranracancha",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030609",
        "descripcion": "Rocchacc",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030610",
        "descripcion": "El Porvenir",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030611",
        "descripcion": "Los Chankas",
        "provincia_id": "0306",
        "departamento_id": "03"
    },
    {
        "id": "030701",
        "descripcion": "Chuquibambilla",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030702",
        "descripcion": "Curpahuasi",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030703",
        "descripcion": "Gamarra",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030704",
        "descripcion": "Huayllati",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030705",
        "descripcion": "Mamara",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030706",
        "descripcion": "Micaela Bastidas",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030707",
        "descripcion": "Pataypampa",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030708",
        "descripcion": "Progreso",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030709",
        "descripcion": "San Antonio",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030710",
        "descripcion": "Santa Rosa",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030711",
        "descripcion": "Turpay",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030712",
        "descripcion": "Vilcabamba",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030713",
        "descripcion": "Virundo",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "030714",
        "descripcion": "Curasco",
        "provincia_id": "0307",
        "departamento_id": "03"
    },
    {
        "id": "040101",
        "descripcion": "Arequipa",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040102",
        "descripcion": "Alto Selva Alegre",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040103",
        "descripcion": "Cayma",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040104",
        "descripcion": "Cerro Colorado",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040105",
        "descripcion": "Characato",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040106",
        "descripcion": "Chiguata",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040107",
        "descripcion": "Jacobo Hunter",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040108",
        "descripcion": "La Joya",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040109",
        "descripcion": "Mariano Melgar",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040110",
        "descripcion": "Miraflores",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040111",
        "descripcion": "Mollebaya",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040112",
        "descripcion": "Paucarpata",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040113",
        "descripcion": "Pocsi",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040114",
        "descripcion": "Polobaya",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040115",
        "descripcion": "Quequeña",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040116",
        "descripcion": "Sabandia",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040117",
        "descripcion": "Sachaca",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040118",
        "descripcion": "San Juan de Siguas",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040119",
        "descripcion": "San Juan de Tarucani",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040120",
        "descripcion": "Santa Isabel de Siguas",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040121",
        "descripcion": "Santa Rita de Siguas",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040122",
        "descripcion": "Socabaya",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040123",
        "descripcion": "Tiabaya",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040124",
        "descripcion": "Uchumayo",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040125",
        "descripcion": "Vitor",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040126",
        "descripcion": "Yanahuara",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040127",
        "descripcion": "Yarabamba",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040128",
        "descripcion": "Yura",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040129",
        "descripcion": "José Luis Bustamante Y Rivero",
        "provincia_id": "0401",
        "departamento_id": "04"
    },
    {
        "id": "040201",
        "descripcion": "Camaná",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040202",
        "descripcion": "José María Quimper",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040203",
        "descripcion": "Mariano Nicolás Valcárcel",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040204",
        "descripcion": "Mariscal Cáceres",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040205",
        "descripcion": "Nicolás de Pierola",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040206",
        "descripcion": "Ocoña",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040207",
        "descripcion": "Quilca",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040208",
        "descripcion": "Samuel Pastor",
        "provincia_id": "0402",
        "departamento_id": "04"
    },
    {
        "id": "040301",
        "descripcion": "Caravelí",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040302",
        "descripcion": "Acarí",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040303",
        "descripcion": "Atico",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040304",
        "descripcion": "Atiquipa",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040305",
        "descripcion": "Bella Unión",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040306",
        "descripcion": "Cahuacho",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040307",
        "descripcion": "Chala",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040308",
        "descripcion": "Chaparra",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040309",
        "descripcion": "Huanuhuanu",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040310",
        "descripcion": "Jaqui",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040311",
        "descripcion": "Lomas",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040312",
        "descripcion": "Quicacha",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040313",
        "descripcion": "Yauca",
        "provincia_id": "0403",
        "departamento_id": "04"
    },
    {
        "id": "040401",
        "descripcion": "Aplao",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040402",
        "descripcion": "Andagua",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040403",
        "descripcion": "Ayo",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040404",
        "descripcion": "Chachas",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040405",
        "descripcion": "Chilcaymarca",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040406",
        "descripcion": "Choco",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040407",
        "descripcion": "Huancarqui",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040408",
        "descripcion": "Machaguay",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040409",
        "descripcion": "Orcopampa",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040410",
        "descripcion": "Pampacolca",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040411",
        "descripcion": "Tipan",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040412",
        "descripcion": "Uñon",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040413",
        "descripcion": "Uraca",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040414",
        "descripcion": "Viraco",
        "provincia_id": "0404",
        "departamento_id": "04"
    },
    {
        "id": "040501",
        "descripcion": "Chivay",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040502",
        "descripcion": "Achoma",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040503",
        "descripcion": "Cabanaconde",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040504",
        "descripcion": "Callalli",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040505",
        "descripcion": "Caylloma",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040506",
        "descripcion": "Coporaque",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040507",
        "descripcion": "Huambo",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040508",
        "descripcion": "Huanca",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040509",
        "descripcion": "Ichupampa",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040510",
        "descripcion": "Lari",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040511",
        "descripcion": "Lluta",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040512",
        "descripcion": "Maca",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040513",
        "descripcion": "Madrigal",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040514",
        "descripcion": "San Antonio de Chuca",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040515",
        "descripcion": "Sibayo",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040516",
        "descripcion": "Tapay",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040517",
        "descripcion": "Tisco",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040518",
        "descripcion": "Tuti",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040519",
        "descripcion": "Yanque",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040520",
        "descripcion": "Majes",
        "provincia_id": "0405",
        "departamento_id": "04"
    },
    {
        "id": "040601",
        "descripcion": "Chuquibamba",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040602",
        "descripcion": "Andaray",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040603",
        "descripcion": "Cayarani",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040604",
        "descripcion": "Chichas",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040605",
        "descripcion": "Iray",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040606",
        "descripcion": "Río Grande",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040607",
        "descripcion": "Salamanca",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040608",
        "descripcion": "Yanaquihua",
        "provincia_id": "0406",
        "departamento_id": "04"
    },
    {
        "id": "040701",
        "descripcion": "Mollendo",
        "provincia_id": "0407",
        "departamento_id": "04"
    },
    {
        "id": "040702",
        "descripcion": "Cocachacra",
        "provincia_id": "0407",
        "departamento_id": "04"
    },
    {
        "id": "040703",
        "descripcion": "Dean Valdivia",
        "provincia_id": "0407",
        "departamento_id": "04"
    },
    {
        "id": "040704",
        "descripcion": "Islay",
        "provincia_id": "0407",
        "departamento_id": "04"
    },
    {
        "id": "040705",
        "descripcion": "Mejia",
        "provincia_id": "0407",
        "departamento_id": "04"
    },
    {
        "id": "040706",
        "descripcion": "Punta de Bombón",
        "provincia_id": "0407",
        "departamento_id": "04"
    },
    {
        "id": "040801",
        "descripcion": "Cotahuasi",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040802",
        "descripcion": "Alca",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040803",
        "descripcion": "Charcana",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040804",
        "descripcion": "Huaynacotas",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040805",
        "descripcion": "Pampamarca",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040806",
        "descripcion": "Puyca",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040807",
        "descripcion": "Quechualla",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040808",
        "descripcion": "Sayla",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040809",
        "descripcion": "Tauria",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040810",
        "descripcion": "Tomepampa",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "040811",
        "descripcion": "Toro",
        "provincia_id": "0408",
        "departamento_id": "04"
    },
    {
        "id": "050101",
        "descripcion": "Ayacucho",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050102",
        "descripcion": "Acocro",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050103",
        "descripcion": "Acos Vinchos",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050104",
        "descripcion": "Carmen Alto",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050105",
        "descripcion": "Chiara",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050106",
        "descripcion": "Ocros",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050107",
        "descripcion": "Pacaycasa",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050108",
        "descripcion": "Quinua",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050109",
        "descripcion": "San José de Ticllas",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050110",
        "descripcion": "San Juan Bautista",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050111",
        "descripcion": "Santiago de Pischa",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050112",
        "descripcion": "Socos",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050113",
        "descripcion": "Tambillo",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050114",
        "descripcion": "Vinchos",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050115",
        "descripcion": "Jesús Nazareno",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050116",
        "descripcion": "Andrés Avelino Cáceres Dorregaray",
        "provincia_id": "0501",
        "departamento_id": "05"
    },
    {
        "id": "050201",
        "descripcion": "Cangallo",
        "provincia_id": "0502",
        "departamento_id": "05"
    },
    {
        "id": "050202",
        "descripcion": "Chuschi",
        "provincia_id": "0502",
        "departamento_id": "05"
    },
    {
        "id": "050203",
        "descripcion": "Los Morochucos",
        "provincia_id": "0502",
        "departamento_id": "05"
    },
    {
        "id": "050204",
        "descripcion": "María Parado de Bellido",
        "provincia_id": "0502",
        "departamento_id": "05"
    },
    {
        "id": "050205",
        "descripcion": "Paras",
        "provincia_id": "0502",
        "departamento_id": "05"
    },
    {
        "id": "050206",
        "descripcion": "Totos",
        "provincia_id": "0502",
        "departamento_id": "05"
    },
    {
        "id": "050301",
        "descripcion": "Sancos",
        "provincia_id": "0503",
        "departamento_id": "05"
    },
    {
        "id": "050302",
        "descripcion": "Carapo",
        "provincia_id": "0503",
        "departamento_id": "05"
    },
    {
        "id": "050303",
        "descripcion": "Sacsamarca",
        "provincia_id": "0503",
        "departamento_id": "05"
    },
    {
        "id": "050304",
        "descripcion": "Santiago de Lucanamarca",
        "provincia_id": "0503",
        "departamento_id": "05"
    },
    {
        "id": "050401",
        "descripcion": "Huanta",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050402",
        "descripcion": "Ayahuanco",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050403",
        "descripcion": "Huamanguilla",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050404",
        "descripcion": "Iguain",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050405",
        "descripcion": "Luricocha",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050406",
        "descripcion": "Santillana",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050407",
        "descripcion": "Sivia",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050408",
        "descripcion": "Llochegua",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050409",
        "descripcion": "Canayre",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050410",
        "descripcion": "Uchuraccay",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050411",
        "descripcion": "Pucacolpa",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050412",
        "descripcion": "Chaca",
        "provincia_id": "0504",
        "departamento_id": "05"
    },
    {
        "id": "050501",
        "descripcion": "San Miguel",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050502",
        "descripcion": "Anco",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050503",
        "descripcion": "Ayna",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050504",
        "descripcion": "Chilcas",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050505",
        "descripcion": "Chungui",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050506",
        "descripcion": "Luis Carranza",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050507",
        "descripcion": "Santa Rosa",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050508",
        "descripcion": "Tambo",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050509",
        "descripcion": "Samugari",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050510",
        "descripcion": "Anchihuay",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050511",
        "descripcion": "Oronccoy",
        "provincia_id": "0505",
        "departamento_id": "05"
    },
    {
        "id": "050601",
        "descripcion": "Puquio",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050602",
        "descripcion": "Aucara",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050603",
        "descripcion": "Cabana",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050604",
        "descripcion": "Carmen Salcedo",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050605",
        "descripcion": "Chaviña",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050606",
        "descripcion": "Chipao",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050607",
        "descripcion": "Huac-Huas",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050608",
        "descripcion": "Laramate",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050609",
        "descripcion": "Leoncio Prado",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050610",
        "descripcion": "Llauta",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050611",
        "descripcion": "Lucanas",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050612",
        "descripcion": "Ocaña",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050613",
        "descripcion": "Otoca",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050614",
        "descripcion": "Saisa",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050615",
        "descripcion": "San Cristóbal",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050616",
        "descripcion": "San Juan",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050617",
        "descripcion": "San Pedro",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050618",
        "descripcion": "San Pedro de Palco",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050619",
        "descripcion": "Sancos",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050620",
        "descripcion": "Santa Ana de Huaycahuacho",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050621",
        "descripcion": "Santa Lucia",
        "provincia_id": "0506",
        "departamento_id": "05"
    },
    {
        "id": "050701",
        "descripcion": "Coracora",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050702",
        "descripcion": "Chumpi",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050703",
        "descripcion": "Coronel Castañeda",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050704",
        "descripcion": "Pacapausa",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050705",
        "descripcion": "Pullo",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050706",
        "descripcion": "Puyusca",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050707",
        "descripcion": "San Francisco de Ravacayco",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050708",
        "descripcion": "Upahuacho",
        "provincia_id": "0507",
        "departamento_id": "05"
    },
    {
        "id": "050801",
        "descripcion": "Pausa",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050802",
        "descripcion": "Colta",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050803",
        "descripcion": "Corculla",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050804",
        "descripcion": "Lampa",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050805",
        "descripcion": "Marcabamba",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050806",
        "descripcion": "Oyolo",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050807",
        "descripcion": "Pararca",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050808",
        "descripcion": "San Javier de Alpabamba",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050809",
        "descripcion": "San José de Ushua",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050810",
        "descripcion": "Sara Sara",
        "provincia_id": "0508",
        "departamento_id": "05"
    },
    {
        "id": "050901",
        "descripcion": "Querobamba",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050902",
        "descripcion": "Belén",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050903",
        "descripcion": "Chalcos",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050904",
        "descripcion": "Chilcayoc",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050905",
        "descripcion": "Huacaña",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050906",
        "descripcion": "Morcolla",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050907",
        "descripcion": "Paico",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050908",
        "descripcion": "San Pedro de Larcay",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050909",
        "descripcion": "San Salvador de Quije",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050910",
        "descripcion": "Santiago de Paucaray",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "050911",
        "descripcion": "Soras",
        "provincia_id": "0509",
        "departamento_id": "05"
    },
    {
        "id": "051001",
        "descripcion": "Huancapi",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051002",
        "descripcion": "Alcamenca",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051003",
        "descripcion": "Apongo",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051004",
        "descripcion": "Asquipata",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051005",
        "descripcion": "Canaria",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051006",
        "descripcion": "Cayara",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051007",
        "descripcion": "Colca",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051008",
        "descripcion": "Huamanquiquia",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051009",
        "descripcion": "Huancaraylla",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051010",
        "descripcion": "Hualla",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051011",
        "descripcion": "Sarhua",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051012",
        "descripcion": "Vilcanchos",
        "provincia_id": "0510",
        "departamento_id": "05"
    },
    {
        "id": "051101",
        "descripcion": "Vilcas Huaman",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051102",
        "descripcion": "Accomarca",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051103",
        "descripcion": "Carhuanca",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051104",
        "descripcion": "Concepción",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051105",
        "descripcion": "Huambalpa",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051106",
        "descripcion": "Independencia",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051107",
        "descripcion": "Saurama",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "051108",
        "descripcion": "Vischongo",
        "provincia_id": "0511",
        "departamento_id": "05"
    },
    {
        "id": "060101",
        "descripcion": "Cajamarca",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060102",
        "descripcion": "Asunción",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060103",
        "descripcion": "Chetilla",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060104",
        "descripcion": "Cospan",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060105",
        "descripcion": "Encañada",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060106",
        "descripcion": "Jesús",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060107",
        "descripcion": "Llacanora",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060108",
        "descripcion": "Los Baños del Inca",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060109",
        "descripcion": "Magdalena",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060110",
        "descripcion": "Matara",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060111",
        "descripcion": "Namora",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060112",
        "descripcion": "San Juan",
        "provincia_id": "0601",
        "departamento_id": "06"
    },
    {
        "id": "060201",
        "descripcion": "Cajabamba",
        "provincia_id": "0602",
        "departamento_id": "06"
    },
    {
        "id": "060202",
        "descripcion": "Cachachi",
        "provincia_id": "0602",
        "departamento_id": "06"
    },
    {
        "id": "060203",
        "descripcion": "Condebamba",
        "provincia_id": "0602",
        "departamento_id": "06"
    },
    {
        "id": "060204",
        "descripcion": "Sitacocha",
        "provincia_id": "0602",
        "departamento_id": "06"
    },
    {
        "id": "060301",
        "descripcion": "Celendín",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060302",
        "descripcion": "Chumuch",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060303",
        "descripcion": "Cortegana",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060304",
        "descripcion": "Huasmin",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060305",
        "descripcion": "Jorge Chávez",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060306",
        "descripcion": "José Gálvez",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060307",
        "descripcion": "Miguel Iglesias",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060308",
        "descripcion": "Oxamarca",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060309",
        "descripcion": "Sorochuco",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060310",
        "descripcion": "Sucre",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060311",
        "descripcion": "Utco",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060312",
        "descripcion": "La Libertad de Pallan",
        "provincia_id": "0603",
        "departamento_id": "06"
    },
    {
        "id": "060401",
        "descripcion": "Chota",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060402",
        "descripcion": "Anguia",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060403",
        "descripcion": "Chadin",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060404",
        "descripcion": "Chiguirip",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060405",
        "descripcion": "Chimban",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060406",
        "descripcion": "Choropampa",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060407",
        "descripcion": "Cochabamba",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060408",
        "descripcion": "Conchan",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060409",
        "descripcion": "Huambos",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060410",
        "descripcion": "Lajas",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060411",
        "descripcion": "Llama",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060412",
        "descripcion": "Miracosta",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060413",
        "descripcion": "Paccha",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060414",
        "descripcion": "Pion",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060415",
        "descripcion": "Querocoto",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060416",
        "descripcion": "San Juan de Licupis",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060417",
        "descripcion": "Tacabamba",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060418",
        "descripcion": "Tocmoche",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060419",
        "descripcion": "Chalamarca",
        "provincia_id": "0604",
        "departamento_id": "06"
    },
    {
        "id": "060501",
        "descripcion": "Contumaza",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060502",
        "descripcion": "Chilete",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060503",
        "descripcion": "Cupisnique",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060504",
        "descripcion": "Guzmango",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060505",
        "descripcion": "San Benito",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060506",
        "descripcion": "Santa Cruz de Toledo",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060507",
        "descripcion": "Tantarica",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060508",
        "descripcion": "Yonan",
        "provincia_id": "0605",
        "departamento_id": "06"
    },
    {
        "id": "060601",
        "descripcion": "Cutervo",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060602",
        "descripcion": "Callayuc",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060603",
        "descripcion": "Choros",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060604",
        "descripcion": "Cujillo",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060605",
        "descripcion": "La Ramada",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060606",
        "descripcion": "Pimpingos",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060607",
        "descripcion": "Querocotillo",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060608",
        "descripcion": "San Andrés de Cutervo",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060609",
        "descripcion": "San Juan de Cutervo",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060610",
        "descripcion": "San Luis de Lucma",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060611",
        "descripcion": "Santa Cruz",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060612",
        "descripcion": "Santo Domingo de la Capilla",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060613",
        "descripcion": "Santo Tomas",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060614",
        "descripcion": "Socota",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060615",
        "descripcion": "Toribio Casanova",
        "provincia_id": "0606",
        "departamento_id": "06"
    },
    {
        "id": "060701",
        "descripcion": "Bambamarca",
        "provincia_id": "0607",
        "departamento_id": "06"
    },
    {
        "id": "060702",
        "descripcion": "Chugur",
        "provincia_id": "0607",
        "departamento_id": "06"
    },
    {
        "id": "060703",
        "descripcion": "Hualgayoc",
        "provincia_id": "0607",
        "departamento_id": "06"
    },
    {
        "id": "060801",
        "descripcion": "Jaén",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060802",
        "descripcion": "Bellavista",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060803",
        "descripcion": "Chontali",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060804",
        "descripcion": "Colasay",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060805",
        "descripcion": "Huabal",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060806",
        "descripcion": "Las Pirias",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060807",
        "descripcion": "Pomahuaca",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060808",
        "descripcion": "Pucara",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060809",
        "descripcion": "Sallique",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060810",
        "descripcion": "San Felipe",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060811",
        "descripcion": "San José del Alto",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060812",
        "descripcion": "Santa Rosa",
        "provincia_id": "0608",
        "departamento_id": "06"
    },
    {
        "id": "060901",
        "descripcion": "San Ignacio",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "060902",
        "descripcion": "Chirinos",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "060903",
        "descripcion": "Huarango",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "060904",
        "descripcion": "La Coipa",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "060905",
        "descripcion": "Namballe",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "060906",
        "descripcion": "San José de Lourdes",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "060907",
        "descripcion": "Tabaconas",
        "provincia_id": "0609",
        "departamento_id": "06"
    },
    {
        "id": "061001",
        "descripcion": "Pedro Gálvez",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061002",
        "descripcion": "Chancay",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061003",
        "descripcion": "Eduardo Villanueva",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061004",
        "descripcion": "Gregorio Pita",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061005",
        "descripcion": "Ichocan",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061006",
        "descripcion": "José Manuel Quiroz",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061007",
        "descripcion": "José Sabogal",
        "provincia_id": "0610",
        "departamento_id": "06"
    },
    {
        "id": "061101",
        "descripcion": "San Miguel",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061102",
        "descripcion": "Bolívar",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061103",
        "descripcion": "Calquis",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061104",
        "descripcion": "Catilluc",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061105",
        "descripcion": "El Prado",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061106",
        "descripcion": "La Florida",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061107",
        "descripcion": "Llapa",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061108",
        "descripcion": "Nanchoc",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061109",
        "descripcion": "Niepos",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061110",
        "descripcion": "San Gregorio",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061111",
        "descripcion": "San Silvestre de Cochan",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061112",
        "descripcion": "Tongod",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061113",
        "descripcion": "Unión Agua Blanca",
        "provincia_id": "0611",
        "departamento_id": "06"
    },
    {
        "id": "061201",
        "descripcion": "San Pablo",
        "provincia_id": "0612",
        "departamento_id": "06"
    },
    {
        "id": "061202",
        "descripcion": "San Bernardino",
        "provincia_id": "0612",
        "departamento_id": "06"
    },
    {
        "id": "061203",
        "descripcion": "San Luis",
        "provincia_id": "0612",
        "departamento_id": "06"
    },
    {
        "id": "061204",
        "descripcion": "Tumbaden",
        "provincia_id": "0612",
        "departamento_id": "06"
    },
    {
        "id": "061301",
        "descripcion": "Santa Cruz",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061302",
        "descripcion": "Andabamba",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061303",
        "descripcion": "Catache",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061304",
        "descripcion": "Chancaybaños",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061305",
        "descripcion": "La Esperanza",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061306",
        "descripcion": "Ninabamba",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061307",
        "descripcion": "Pulan",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061308",
        "descripcion": "Saucepampa",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061309",
        "descripcion": "Sexi",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061310",
        "descripcion": "Uticyacu",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "061311",
        "descripcion": "Yauyucan",
        "provincia_id": "0613",
        "departamento_id": "06"
    },
    {
        "id": "070101",
        "descripcion": "Callao",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "070102",
        "descripcion": "Bellavista",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "070103",
        "descripcion": "Carmen de la Legua Reynoso",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "070104",
        "descripcion": "La Perla",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "070105",
        "descripcion": "La Punta",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "070106",
        "descripcion": "Ventanilla",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "070107",
        "descripcion": "Mi Perú",
        "provincia_id": "0701",
        "departamento_id": "07"
    },
    {
        "id": "080101",
        "descripcion": "Cusco",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080102",
        "descripcion": "Ccorca",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080103",
        "descripcion": "Poroy",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080104",
        "descripcion": "San Jerónimo",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080105",
        "descripcion": "San Sebastian",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080106",
        "descripcion": "Santiago",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080107",
        "descripcion": "Saylla",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080108",
        "descripcion": "Wanchaq",
        "provincia_id": "0801",
        "departamento_id": "08"
    },
    {
        "id": "080201",
        "descripcion": "Acomayo",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080202",
        "descripcion": "Acopia",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080203",
        "descripcion": "Acos",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080204",
        "descripcion": "Mosoc Llacta",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080205",
        "descripcion": "Pomacanchi",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080206",
        "descripcion": "Rondocan",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080207",
        "descripcion": "Sangarara",
        "provincia_id": "0802",
        "departamento_id": "08"
    },
    {
        "id": "080301",
        "descripcion": "Anta",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080302",
        "descripcion": "Ancahuasi",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080303",
        "descripcion": "Cachimayo",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080304",
        "descripcion": "Chinchaypujio",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080305",
        "descripcion": "Huarocondo",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080306",
        "descripcion": "Limatambo",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080307",
        "descripcion": "Mollepata",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080308",
        "descripcion": "Pucyura",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080309",
        "descripcion": "Zurite",
        "provincia_id": "0803",
        "departamento_id": "08"
    },
    {
        "id": "080401",
        "descripcion": "Calca",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080402",
        "descripcion": "Coya",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080403",
        "descripcion": "Lamay",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080404",
        "descripcion": "Lares",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080405",
        "descripcion": "Pisac",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080406",
        "descripcion": "San Salvador",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080407",
        "descripcion": "Taray",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080408",
        "descripcion": "Yanatile",
        "provincia_id": "0804",
        "departamento_id": "08"
    },
    {
        "id": "080501",
        "descripcion": "Yanaoca",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080502",
        "descripcion": "Checca",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080503",
        "descripcion": "Kunturkanki",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080504",
        "descripcion": "Langui",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080505",
        "descripcion": "Layo",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080506",
        "descripcion": "Pampamarca",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080507",
        "descripcion": "Quehue",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080508",
        "descripcion": "Tupac Amaru",
        "provincia_id": "0805",
        "departamento_id": "08"
    },
    {
        "id": "080601",
        "descripcion": "Sicuani",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080602",
        "descripcion": "Checacupe",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080603",
        "descripcion": "Combapata",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080604",
        "descripcion": "Marangani",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080605",
        "descripcion": "Pitumarca",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080606",
        "descripcion": "San Pablo",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080607",
        "descripcion": "San Pedro",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080608",
        "descripcion": "Tinta",
        "provincia_id": "0806",
        "departamento_id": "08"
    },
    {
        "id": "080701",
        "descripcion": "Santo Tomas",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080702",
        "descripcion": "Capacmarca",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080703",
        "descripcion": "Chamaca",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080704",
        "descripcion": "Colquemarca",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080705",
        "descripcion": "Livitaca",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080706",
        "descripcion": "Llusco",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080707",
        "descripcion": "Quiñota",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080708",
        "descripcion": "Velille",
        "provincia_id": "0807",
        "departamento_id": "08"
    },
    {
        "id": "080801",
        "descripcion": "Espinar",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080802",
        "descripcion": "Condoroma",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080803",
        "descripcion": "Coporaque",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080804",
        "descripcion": "Ocoruro",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080805",
        "descripcion": "Pallpata",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080806",
        "descripcion": "Pichigua",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080807",
        "descripcion": "Suyckutambo",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080808",
        "descripcion": "Alto Pichigua",
        "provincia_id": "0808",
        "departamento_id": "08"
    },
    {
        "id": "080901",
        "descripcion": "Santa Ana",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080902",
        "descripcion": "Echarate",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080903",
        "descripcion": "Huayopata",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080904",
        "descripcion": "Maranura",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080905",
        "descripcion": "Ocobamba",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080906",
        "descripcion": "Quellouno",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080907",
        "descripcion": "Kimbiri",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080908",
        "descripcion": "Santa Teresa",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080909",
        "descripcion": "Vilcabamba",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080910",
        "descripcion": "Pichari",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080911",
        "descripcion": "Inkawasi",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080912",
        "descripcion": "Villa Virgen",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080913",
        "descripcion": "Villa Kintiarina",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "080914",
        "descripcion": "Megantoni",
        "provincia_id": "0809",
        "departamento_id": "08"
    },
    {
        "id": "081001",
        "descripcion": "Paruro",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081002",
        "descripcion": "Accha",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081003",
        "descripcion": "Ccapi",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081004",
        "descripcion": "Colcha",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081005",
        "descripcion": "Huanoquite",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081006",
        "descripcion": "Omachaç",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081007",
        "descripcion": "Paccaritambo",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081008",
        "descripcion": "Pillpinto",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081009",
        "descripcion": "Yaurisque",
        "provincia_id": "0810",
        "departamento_id": "08"
    },
    {
        "id": "081101",
        "descripcion": "Paucartambo",
        "provincia_id": "0811",
        "departamento_id": "08"
    },
    {
        "id": "081102",
        "descripcion": "Caicay",
        "provincia_id": "0811",
        "departamento_id": "08"
    },
    {
        "id": "081103",
        "descripcion": "Challabamba",
        "provincia_id": "0811",
        "departamento_id": "08"
    },
    {
        "id": "081104",
        "descripcion": "Colquepata",
        "provincia_id": "0811",
        "departamento_id": "08"
    },
    {
        "id": "081105",
        "descripcion": "Huancarani",
        "provincia_id": "0811",
        "departamento_id": "08"
    },
    {
        "id": "081106",
        "descripcion": "Kosñipata",
        "provincia_id": "0811",
        "departamento_id": "08"
    },
    {
        "id": "081201",
        "descripcion": "Urcos",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081202",
        "descripcion": "Andahuaylillas",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081203",
        "descripcion": "Camanti",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081204",
        "descripcion": "Ccarhuayo",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081205",
        "descripcion": "Ccatca",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081206",
        "descripcion": "Cusipata",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081207",
        "descripcion": "Huaro",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081208",
        "descripcion": "Lucre",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081209",
        "descripcion": "Marcapata",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081210",
        "descripcion": "Ocongate",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081211",
        "descripcion": "Oropesa",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081212",
        "descripcion": "Quiquijana",
        "provincia_id": "0812",
        "departamento_id": "08"
    },
    {
        "id": "081301",
        "descripcion": "Urubamba",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "081302",
        "descripcion": "Chinchero",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "081303",
        "descripcion": "Huayllabamba",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "081304",
        "descripcion": "Machupicchu",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "081305",
        "descripcion": "Maras",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "081306",
        "descripcion": "Ollantaytambo",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "081307",
        "descripcion": "Yucay",
        "provincia_id": "0813",
        "departamento_id": "08"
    },
    {
        "id": "090101",
        "descripcion": "Huancavelica",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090102",
        "descripcion": "Acobambilla",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090103",
        "descripcion": "Acoria",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090104",
        "descripcion": "Conayca",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090105",
        "descripcion": "Cuenca",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090106",
        "descripcion": "Huachocolpa",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090107",
        "descripcion": "Huayllahuara",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090108",
        "descripcion": "Izcuchaca",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090109",
        "descripcion": "Laria",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090110",
        "descripcion": "Manta",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090111",
        "descripcion": "Mariscal Cáceres",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090112",
        "descripcion": "Moya",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090113",
        "descripcion": "Nuevo Occoro",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090114",
        "descripcion": "Palca",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090115",
        "descripcion": "Pilchaca",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090116",
        "descripcion": "Vilca",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090117",
        "descripcion": "Yauli",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090118",
        "descripcion": "Ascensión",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090119",
        "descripcion": "Huando",
        "provincia_id": "0901",
        "departamento_id": "09"
    },
    {
        "id": "090201",
        "descripcion": "Acobamba",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090202",
        "descripcion": "Andabamba",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090203",
        "descripcion": "Anta",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090204",
        "descripcion": "Caja",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090205",
        "descripcion": "Marcas",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090206",
        "descripcion": "Paucara",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090207",
        "descripcion": "Pomacocha",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090208",
        "descripcion": "Rosario",
        "provincia_id": "0902",
        "departamento_id": "09"
    },
    {
        "id": "090301",
        "descripcion": "Lircay",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090302",
        "descripcion": "Anchonga",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090303",
        "descripcion": "Callanmarca",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090304",
        "descripcion": "Ccochaccasa",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090305",
        "descripcion": "Chincho",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090306",
        "descripcion": "Congalla",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090307",
        "descripcion": "Huanca-Huanca",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090308",
        "descripcion": "Huayllay Grande",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090309",
        "descripcion": "Julcamarca",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090310",
        "descripcion": "San Antonio de Antaparco",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090311",
        "descripcion": "Santo Tomas de Pata",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090312",
        "descripcion": "Secclla",
        "provincia_id": "0903",
        "departamento_id": "09"
    },
    {
        "id": "090401",
        "descripcion": "Castrovirreyna",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090402",
        "descripcion": "Arma",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090403",
        "descripcion": "Aurahua",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090404",
        "descripcion": "Capillas",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090405",
        "descripcion": "Chupamarca",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090406",
        "descripcion": "Cocas",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090407",
        "descripcion": "Huachos",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090408",
        "descripcion": "Huamatambo",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090409",
        "descripcion": "Mollepampa",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090410",
        "descripcion": "San Juan",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090411",
        "descripcion": "Santa Ana",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090412",
        "descripcion": "Tantara",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090413",
        "descripcion": "Ticrapo",
        "provincia_id": "0904",
        "departamento_id": "09"
    },
    {
        "id": "090501",
        "descripcion": "Churcampa",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090502",
        "descripcion": "Anco",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090503",
        "descripcion": "Chinchihuasi",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090504",
        "descripcion": "El Carmen",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090505",
        "descripcion": "La Merced",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090506",
        "descripcion": "Locroja",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090507",
        "descripcion": "Paucarbamba",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090508",
        "descripcion": "San Miguel de Mayocc",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090509",
        "descripcion": "San Pedro de Coris",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090510",
        "descripcion": "Pachamarca",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090511",
        "descripcion": "Cosme",
        "provincia_id": "0905",
        "departamento_id": "09"
    },
    {
        "id": "090601",
        "descripcion": "Huaytara",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090602",
        "descripcion": "Ayavi",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090603",
        "descripcion": "Córdova",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090604",
        "descripcion": "Huayacundo Arma",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090605",
        "descripcion": "Laramarca",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090606",
        "descripcion": "Ocoyo",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090607",
        "descripcion": "Pilpichaca",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090608",
        "descripcion": "Querco",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090609",
        "descripcion": "Quito-Arma",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090610",
        "descripcion": "San Antonio de Cusicancha",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090611",
        "descripcion": "San Francisco de Sangayaico",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090612",
        "descripcion": "San Isidro",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090613",
        "descripcion": "Santiago de Chocorvos",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090614",
        "descripcion": "Santiago de Quirahuara",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090615",
        "descripcion": "Santo Domingo de Capillas",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090616",
        "descripcion": "Tambo",
        "provincia_id": "0906",
        "departamento_id": "09"
    },
    {
        "id": "090701",
        "descripcion": "Pampas",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090702",
        "descripcion": "Acostambo",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090703",
        "descripcion": "Acraquia",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090704",
        "descripcion": "Ahuaycha",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090705",
        "descripcion": "Colcabamba",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090706",
        "descripcion": "Daniel Hernández",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090707",
        "descripcion": "Huachocolpa",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090709",
        "descripcion": "Huaribamba",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090710",
        "descripcion": "Ñahuimpuquio",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090711",
        "descripcion": "Pazos",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090713",
        "descripcion": "Quishuar",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090714",
        "descripcion": "Salcabamba",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090715",
        "descripcion": "Salcahuasi",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090716",
        "descripcion": "San Marcos de Rocchac",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090717",
        "descripcion": "Surcubamba",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090718",
        "descripcion": "Tintay Puncu",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090719",
        "descripcion": "Quichuas",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090720",
        "descripcion": "Andaymarca",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090721",
        "descripcion": "Roble",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090722",
        "descripcion": "Pichos",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "090723",
        "descripcion": "Santiago de Tucuma",
        "provincia_id": "0907",
        "departamento_id": "09"
    },
    {
        "id": "100101",
        "descripcion": "Huanuco",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100102",
        "descripcion": "Amarilis",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100103",
        "descripcion": "Chinchao",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100104",
        "descripcion": "Churubamba",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100105",
        "descripcion": "Margos",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100106",
        "descripcion": "Quisqui (Kichki)",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100107",
        "descripcion": "San Francisco de Cayran",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100108",
        "descripcion": "San Pedro de Chaulan",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100109",
        "descripcion": "Santa María del Valle",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100110",
        "descripcion": "Yarumayo",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100111",
        "descripcion": "Pillco Marca",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100112",
        "descripcion": "Yacus",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100113",
        "descripcion": "San Pablo de Pillao",
        "provincia_id": "1001",
        "departamento_id": "10"
    },
    {
        "id": "100201",
        "descripcion": "Ambo",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100202",
        "descripcion": "Cayna",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100203",
        "descripcion": "Colpas",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100204",
        "descripcion": "Conchamarca",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100205",
        "descripcion": "Huacar",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100206",
        "descripcion": "San Francisco",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100207",
        "descripcion": "San Rafael",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100208",
        "descripcion": "Tomay Kichwa",
        "provincia_id": "1002",
        "departamento_id": "10"
    },
    {
        "id": "100301",
        "descripcion": "La Unión",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100307",
        "descripcion": "Chuquis",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100311",
        "descripcion": "Marías",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100313",
        "descripcion": "Pachas",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100316",
        "descripcion": "Quivilla",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100317",
        "descripcion": "Ripan",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100321",
        "descripcion": "Shunqui",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100322",
        "descripcion": "Sillapata",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100323",
        "descripcion": "Yanas",
        "provincia_id": "1003",
        "departamento_id": "10"
    },
    {
        "id": "100401",
        "descripcion": "Huacaybamba",
        "provincia_id": "1004",
        "departamento_id": "10"
    },
    {
        "id": "100402",
        "descripcion": "Canchabamba",
        "provincia_id": "1004",
        "departamento_id": "10"
    },
    {
        "id": "100403",
        "descripcion": "Cochabamba",
        "provincia_id": "1004",
        "departamento_id": "10"
    },
    {
        "id": "100404",
        "descripcion": "Pinra",
        "provincia_id": "1004",
        "departamento_id": "10"
    },
    {
        "id": "100501",
        "descripcion": "Llata",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100502",
        "descripcion": "Arancay",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100503",
        "descripcion": "Chavín de Pariarca",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100504",
        "descripcion": "Jacas Grande",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100505",
        "descripcion": "Jircan",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100506",
        "descripcion": "Miraflores",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100507",
        "descripcion": "Monzón",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100508",
        "descripcion": "Punchao",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100509",
        "descripcion": "Puños",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100510",
        "descripcion": "Singa",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100511",
        "descripcion": "Tantamayo",
        "provincia_id": "1005",
        "departamento_id": "10"
    },
    {
        "id": "100601",
        "descripcion": "Rupa-Rupa",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100602",
        "descripcion": "Daniel Alomía Robles",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100603",
        "descripcion": "Hermílio Valdizan",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100604",
        "descripcion": "José Crespo y Castillo",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100605",
        "descripcion": "Luyando",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100606",
        "descripcion": "Mariano Damaso Beraun",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100607",
        "descripcion": "Pucayacu",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100608",
        "descripcion": "Castillo Grande",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100609",
        "descripcion": "Pueblo Nuevo",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100610",
        "descripcion": "Santo Domingo de Anda",
        "provincia_id": "1006",
        "departamento_id": "10"
    },
    {
        "id": "100701",
        "descripcion": "Huacrachuco",
        "provincia_id": "1007",
        "departamento_id": "10"
    },
    {
        "id": "100702",
        "descripcion": "Cholon",
        "provincia_id": "1007",
        "departamento_id": "10"
    },
    {
        "id": "100703",
        "descripcion": "San Buenaventura",
        "provincia_id": "1007",
        "departamento_id": "10"
    },
    {
        "id": "100704",
        "descripcion": "La Morada",
        "provincia_id": "1007",
        "departamento_id": "10"
    },
    {
        "id": "100705",
        "descripcion": "Santa Rosa de Alto Yanajanca",
        "provincia_id": "1007",
        "departamento_id": "10"
    },
    {
        "id": "100801",
        "descripcion": "Panao",
        "provincia_id": "1008",
        "departamento_id": "10"
    },
    {
        "id": "100802",
        "descripcion": "Chaglla",
        "provincia_id": "1008",
        "departamento_id": "10"
    },
    {
        "id": "100803",
        "descripcion": "Molino",
        "provincia_id": "1008",
        "departamento_id": "10"
    },
    {
        "id": "100804",
        "descripcion": "Umari",
        "provincia_id": "1008",
        "departamento_id": "10"
    },
    {
        "id": "100901",
        "descripcion": "Puerto Inca",
        "provincia_id": "1009",
        "departamento_id": "10"
    },
    {
        "id": "100902",
        "descripcion": "Codo del Pozuzo",
        "provincia_id": "1009",
        "departamento_id": "10"
    },
    {
        "id": "100903",
        "descripcion": "Honoria",
        "provincia_id": "1009",
        "departamento_id": "10"
    },
    {
        "id": "100904",
        "descripcion": "Tournavista",
        "provincia_id": "1009",
        "departamento_id": "10"
    },
    {
        "id": "100905",
        "descripcion": "Yuyapichis",
        "provincia_id": "1009",
        "departamento_id": "10"
    },
    {
        "id": "101001",
        "descripcion": "Jesús",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101002",
        "descripcion": "Baños",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101003",
        "descripcion": "Jivia",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101004",
        "descripcion": "Queropalca",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101005",
        "descripcion": "Rondos",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101006",
        "descripcion": "San Francisco de Asís",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101007",
        "descripcion": "San Miguel de Cauri",
        "provincia_id": "1010",
        "departamento_id": "10"
    },
    {
        "id": "101101",
        "descripcion": "Chavinillo",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101102",
        "descripcion": "Cahuac",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101103",
        "descripcion": "Chacabamba",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101104",
        "descripcion": "Aparicio Pomares",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101105",
        "descripcion": "Jacas Chico",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101106",
        "descripcion": "Obas",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101107",
        "descripcion": "Pampamarca",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "101108",
        "descripcion": "Choras",
        "provincia_id": "1011",
        "departamento_id": "10"
    },
    {
        "id": "110101",
        "descripcion": "Ica",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110102",
        "descripcion": "La Tinguiña",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110103",
        "descripcion": "Los Aquijes",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110104",
        "descripcion": "Ocucaje",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110105",
        "descripcion": "Pachacutec",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110106",
        "descripcion": "Parcona",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110107",
        "descripcion": "Pueblo Nuevo",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110108",
        "descripcion": "Salas",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110109",
        "descripcion": "San José de Los Molinos",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110110",
        "descripcion": "San Juan Bautista",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110111",
        "descripcion": "Santiago",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110112",
        "descripcion": "Subtanjalla",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110113",
        "descripcion": "Tate",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110114",
        "descripcion": "Yauca del Rosario",
        "provincia_id": "1101",
        "departamento_id": "11"
    },
    {
        "id": "110201",
        "descripcion": "Chincha Alta",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110202",
        "descripcion": "Alto Laran",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110203",
        "descripcion": "Chavin",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110204",
        "descripcion": "Chincha Baja",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110205",
        "descripcion": "El Carmen",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110206",
        "descripcion": "Grocio Prado",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110207",
        "descripcion": "Pueblo Nuevo",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110208",
        "descripcion": "San Juan de Yanac",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110209",
        "descripcion": "San Pedro de Huacarpana",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110210",
        "descripcion": "Sunampe",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110211",
        "descripcion": "Tambo de Mora",
        "provincia_id": "1102",
        "departamento_id": "11"
    },
    {
        "id": "110301",
        "descripcion": "Nasca",
        "provincia_id": "1103",
        "departamento_id": "11"
    },
    {
        "id": "110302",
        "descripcion": "Changuillo",
        "provincia_id": "1103",
        "departamento_id": "11"
    },
    {
        "id": "110303",
        "descripcion": "El Ingenio",
        "provincia_id": "1103",
        "departamento_id": "11"
    },
    {
        "id": "110304",
        "descripcion": "Marcona",
        "provincia_id": "1103",
        "departamento_id": "11"
    },
    {
        "id": "110305",
        "descripcion": "Vista Alegre",
        "provincia_id": "1103",
        "departamento_id": "11"
    },
    {
        "id": "110401",
        "descripcion": "Palpa",
        "provincia_id": "1104",
        "departamento_id": "11"
    },
    {
        "id": "110402",
        "descripcion": "Llipata",
        "provincia_id": "1104",
        "departamento_id": "11"
    },
    {
        "id": "110403",
        "descripcion": "Río Grande",
        "provincia_id": "1104",
        "departamento_id": "11"
    },
    {
        "id": "110404",
        "descripcion": "Santa Cruz",
        "provincia_id": "1104",
        "departamento_id": "11"
    },
    {
        "id": "110405",
        "descripcion": "Tibillo",
        "provincia_id": "1104",
        "departamento_id": "11"
    },
    {
        "id": "110501",
        "descripcion": "Pisco",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110502",
        "descripcion": "Huancano",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110503",
        "descripcion": "Humay",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110504",
        "descripcion": "Independencia",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110505",
        "descripcion": "Paracas",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110506",
        "descripcion": "San Andrés",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110507",
        "descripcion": "San Clemente",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "110508",
        "descripcion": "Tupac Amaru Inca",
        "provincia_id": "1105",
        "departamento_id": "11"
    },
    {
        "id": "120101",
        "descripcion": "Huancayo",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120104",
        "descripcion": "Carhuacallanga",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120105",
        "descripcion": "Chacapampa",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120106",
        "descripcion": "Chicche",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120107",
        "descripcion": "Chilca",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120108",
        "descripcion": "Chongos Alto",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120111",
        "descripcion": "Chupuro",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120112",
        "descripcion": "Colca",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120113",
        "descripcion": "Cullhuas",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120114",
        "descripcion": "El Tambo",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120116",
        "descripcion": "Huacrapuquio",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120117",
        "descripcion": "Hualhuas",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120119",
        "descripcion": "Huancan",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120120",
        "descripcion": "Huasicancha",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120121",
        "descripcion": "Huayucachi",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120122",
        "descripcion": "Ingenio",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120124",
        "descripcion": "Pariahuanca",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120125",
        "descripcion": "Pilcomayo",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120126",
        "descripcion": "Pucara",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120127",
        "descripcion": "Quichuay",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120128",
        "descripcion": "Quilcas",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120129",
        "descripcion": "San Agustín",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120130",
        "descripcion": "San Jerónimo de Tunan",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120132",
        "descripcion": "Saño",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120133",
        "descripcion": "Sapallanga",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120134",
        "descripcion": "Sicaya",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120135",
        "descripcion": "Santo Domingo de Acobamba",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120136",
        "descripcion": "Viques",
        "provincia_id": "1201",
        "departamento_id": "12"
    },
    {
        "id": "120201",
        "descripcion": "Concepción",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120202",
        "descripcion": "Aco",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120203",
        "descripcion": "Andamarca",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120204",
        "descripcion": "Chambara",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120205",
        "descripcion": "Cochas",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120206",
        "descripcion": "Comas",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120207",
        "descripcion": "Heroínas Toledo",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120208",
        "descripcion": "Manzanares",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120209",
        "descripcion": "Mariscal Castilla",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120210",
        "descripcion": "Matahuasi",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120211",
        "descripcion": "Mito",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120212",
        "descripcion": "Nueve de Julio",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120213",
        "descripcion": "Orcotuna",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120214",
        "descripcion": "San José de Quero",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120215",
        "descripcion": "Santa Rosa de Ocopa",
        "provincia_id": "1202",
        "departamento_id": "12"
    },
    {
        "id": "120301",
        "descripcion": "Chanchamayo",
        "provincia_id": "1203",
        "departamento_id": "12"
    },
    {
        "id": "120302",
        "descripcion": "Perene",
        "provincia_id": "1203",
        "departamento_id": "12"
    },
    {
        "id": "120303",
        "descripcion": "Pichanaqui",
        "provincia_id": "1203",
        "departamento_id": "12"
    },
    {
        "id": "120304",
        "descripcion": "San Luis de Shuaro",
        "provincia_id": "1203",
        "departamento_id": "12"
    },
    {
        "id": "120305",
        "descripcion": "San Ramón",
        "provincia_id": "1203",
        "departamento_id": "12"
    },
    {
        "id": "120306",
        "descripcion": "Vitoc",
        "provincia_id": "1203",
        "departamento_id": "12"
    },
    {
        "id": "120401",
        "descripcion": "Jauja",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120402",
        "descripcion": "Acolla",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120403",
        "descripcion": "Apata",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120404",
        "descripcion": "Ataura",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120405",
        "descripcion": "Canchayllo",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120406",
        "descripcion": "Curicaca",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120407",
        "descripcion": "El Mantaro",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120408",
        "descripcion": "Huamali",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120409",
        "descripcion": "Huaripampa",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120410",
        "descripcion": "Huertas",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120411",
        "descripcion": "Janjaillo",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120412",
        "descripcion": "Julcán",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120413",
        "descripcion": "Leonor Ordóñez",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120414",
        "descripcion": "Llocllapampa",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120415",
        "descripcion": "Marco",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120416",
        "descripcion": "Masma",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120417",
        "descripcion": "Masma Chicche",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120418",
        "descripcion": "Molinos",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120419",
        "descripcion": "Monobamba",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120420",
        "descripcion": "Muqui",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120421",
        "descripcion": "Muquiyauyo",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120422",
        "descripcion": "Paca",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120423",
        "descripcion": "Paccha",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120424",
        "descripcion": "Pancan",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120425",
        "descripcion": "Parco",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120426",
        "descripcion": "Pomacancha",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120427",
        "descripcion": "Ricran",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120428",
        "descripcion": "San Lorenzo",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120429",
        "descripcion": "San Pedro de Chunan",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120430",
        "descripcion": "Sausa",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120431",
        "descripcion": "Sincos",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120432",
        "descripcion": "Tunan Marca",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120433",
        "descripcion": "Yauli",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120434",
        "descripcion": "Yauyos",
        "provincia_id": "1204",
        "departamento_id": "12"
    },
    {
        "id": "120501",
        "descripcion": "Junin",
        "provincia_id": "1205",
        "departamento_id": "12"
    },
    {
        "id": "120502",
        "descripcion": "Carhuamayo",
        "provincia_id": "1205",
        "departamento_id": "12"
    },
    {
        "id": "120503",
        "descripcion": "Ondores",
        "provincia_id": "1205",
        "departamento_id": "12"
    },
    {
        "id": "120504",
        "descripcion": "Ulcumayo",
        "provincia_id": "1205",
        "departamento_id": "12"
    },
    {
        "id": "120601",
        "descripcion": "Satipo",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120602",
        "descripcion": "Coviriali",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120603",
        "descripcion": "Llaylla",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120604",
        "descripcion": "Mazamari",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120605",
        "descripcion": "Pampa Hermosa",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120606",
        "descripcion": "Pangoa",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120607",
        "descripcion": "Río Negro",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120608",
        "descripcion": "Río Tambo",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120609",
        "descripcion": "Vizcatan del Ene",
        "provincia_id": "1206",
        "departamento_id": "12"
    },
    {
        "id": "120701",
        "descripcion": "Tarma",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120702",
        "descripcion": "Acobamba",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120703",
        "descripcion": "Huaricolca",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120704",
        "descripcion": "Huasahuasi",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120705",
        "descripcion": "La Unión",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120706",
        "descripcion": "Palca",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120707",
        "descripcion": "Palcamayo",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120708",
        "descripcion": "San Pedro de Cajas",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120709",
        "descripcion": "Tapo",
        "provincia_id": "1207",
        "departamento_id": "12"
    },
    {
        "id": "120801",
        "descripcion": "La Oroya",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120802",
        "descripcion": "Chacapalpa",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120803",
        "descripcion": "Huay-Huay",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120804",
        "descripcion": "Marcapomacocha",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120805",
        "descripcion": "Morococha",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120806",
        "descripcion": "Paccha",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120807",
        "descripcion": "Santa Bárbara de Carhuacayan",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120808",
        "descripcion": "Santa Rosa de Sacco",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120809",
        "descripcion": "Suitucancha",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120810",
        "descripcion": "Yauli",
        "provincia_id": "1208",
        "departamento_id": "12"
    },
    {
        "id": "120901",
        "descripcion": "Chupaca",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120902",
        "descripcion": "Ahuac",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120903",
        "descripcion": "Chongos Bajo",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120904",
        "descripcion": "Huachac",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120905",
        "descripcion": "Huamancaca Chico",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120906",
        "descripcion": "San Juan de Iscos",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120907",
        "descripcion": "San Juan de Jarpa",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120908",
        "descripcion": "Tres de Diciembre",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "120909",
        "descripcion": "Yanacancha",
        "provincia_id": "1209",
        "departamento_id": "12"
    },
    {
        "id": "130101",
        "descripcion": "Trujillo",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130102",
        "descripcion": "El Porvenir",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130103",
        "descripcion": "Florencia de Mora",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130104",
        "descripcion": "Huanchaco",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130105",
        "descripcion": "La Esperanza",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130106",
        "descripcion": "Laredo",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130107",
        "descripcion": "Moche",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130108",
        "descripcion": "Poroto",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130109",
        "descripcion": "Salaverry",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130110",
        "descripcion": "Simbal",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130111",
        "descripcion": "Victor Larco Herrera",
        "provincia_id": "1301",
        "departamento_id": "13"
    },
    {
        "id": "130201",
        "descripcion": "Ascope",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130202",
        "descripcion": "Chicama",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130203",
        "descripcion": "Chocope",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130204",
        "descripcion": "Magdalena de Cao",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130205",
        "descripcion": "Paijan",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130206",
        "descripcion": "Rázuri",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130207",
        "descripcion": "Santiago de Cao",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130208",
        "descripcion": "Casa Grande",
        "provincia_id": "1302",
        "departamento_id": "13"
    },
    {
        "id": "130301",
        "descripcion": "Bolívar",
        "provincia_id": "1303",
        "departamento_id": "13"
    },
    {
        "id": "130302",
        "descripcion": "Bambamarca",
        "provincia_id": "1303",
        "departamento_id": "13"
    },
    {
        "id": "130303",
        "descripcion": "Condormarca",
        "provincia_id": "1303",
        "departamento_id": "13"
    },
    {
        "id": "130304",
        "descripcion": "Longotea",
        "provincia_id": "1303",
        "departamento_id": "13"
    },
    {
        "id": "130305",
        "descripcion": "Uchumarca",
        "provincia_id": "1303",
        "departamento_id": "13"
    },
    {
        "id": "130306",
        "descripcion": "Ucuncha",
        "provincia_id": "1303",
        "departamento_id": "13"
    },
    {
        "id": "130401",
        "descripcion": "Chepen",
        "provincia_id": "1304",
        "departamento_id": "13"
    },
    {
        "id": "130402",
        "descripcion": "Pacanga",
        "provincia_id": "1304",
        "departamento_id": "13"
    },
    {
        "id": "130403",
        "descripcion": "Pueblo Nuevo",
        "provincia_id": "1304",
        "departamento_id": "13"
    },
    {
        "id": "130501",
        "descripcion": "Julcan",
        "provincia_id": "1305",
        "departamento_id": "13"
    },
    {
        "id": "130502",
        "descripcion": "Calamarca",
        "provincia_id": "1305",
        "departamento_id": "13"
    },
    {
        "id": "130503",
        "descripcion": "Carabamba",
        "provincia_id": "1305",
        "departamento_id": "13"
    },
    {
        "id": "130504",
        "descripcion": "Huaso",
        "provincia_id": "1305",
        "departamento_id": "13"
    },
    {
        "id": "130601",
        "descripcion": "Otuzco",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130602",
        "descripcion": "Agallpampa",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130604",
        "descripcion": "Charat",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130605",
        "descripcion": "Huaranchal",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130606",
        "descripcion": "La Cuesta",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130608",
        "descripcion": "Mache",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130610",
        "descripcion": "Paranday",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130611",
        "descripcion": "Salpo",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130613",
        "descripcion": "Sinsicap",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130614",
        "descripcion": "Usquil",
        "provincia_id": "1306",
        "departamento_id": "13"
    },
    {
        "id": "130701",
        "descripcion": "San Pedro de Lloc",
        "provincia_id": "1307",
        "departamento_id": "13"
    },
    {
        "id": "130702",
        "descripcion": "Guadalupe",
        "provincia_id": "1307",
        "departamento_id": "13"
    },
    {
        "id": "130703",
        "descripcion": "Jequetepeque",
        "provincia_id": "1307",
        "departamento_id": "13"
    },
    {
        "id": "130704",
        "descripcion": "Pacasmayo",
        "provincia_id": "1307",
        "departamento_id": "13"
    },
    {
        "id": "130705",
        "descripcion": "San José",
        "provincia_id": "1307",
        "departamento_id": "13"
    },
    {
        "id": "130801",
        "descripcion": "Tayabamba",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130802",
        "descripcion": "Buldibuyo",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130803",
        "descripcion": "Chillia",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130804",
        "descripcion": "Huancaspata",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130805",
        "descripcion": "Huaylillas",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130806",
        "descripcion": "Huayo",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130807",
        "descripcion": "Ongon",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130808",
        "descripcion": "Parcoy",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130809",
        "descripcion": "Pataz",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130810",
        "descripcion": "Pias",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130811",
        "descripcion": "Santiago de Challas",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130812",
        "descripcion": "Taurija",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130813",
        "descripcion": "Urpay",
        "provincia_id": "1308",
        "departamento_id": "13"
    },
    {
        "id": "130901",
        "descripcion": "Huamachuco",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130902",
        "descripcion": "Chugay",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130903",
        "descripcion": "Cochorco",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130904",
        "descripcion": "Curgos",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130905",
        "descripcion": "Marcabal",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130906",
        "descripcion": "Sanagoran",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130907",
        "descripcion": "Sarin",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "130908",
        "descripcion": "Sartimbamba",
        "provincia_id": "1309",
        "departamento_id": "13"
    },
    {
        "id": "131001",
        "descripcion": "Santiago de Chuco",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131002",
        "descripcion": "Angasmarca",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131003",
        "descripcion": "Cachicadan",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131004",
        "descripcion": "Mollebamba",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131005",
        "descripcion": "Mollepata",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131006",
        "descripcion": "Quiruvilca",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131007",
        "descripcion": "Santa Cruz de Chuca",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131008",
        "descripcion": "Sitabamba",
        "provincia_id": "1310",
        "departamento_id": "13"
    },
    {
        "id": "131101",
        "descripcion": "Cascas",
        "provincia_id": "1311",
        "departamento_id": "13"
    },
    {
        "id": "131102",
        "descripcion": "Lucma",
        "provincia_id": "1311",
        "departamento_id": "13"
    },
    {
        "id": "131103",
        "descripcion": "Marmot",
        "provincia_id": "1311",
        "departamento_id": "13"
    },
    {
        "id": "131104",
        "descripcion": "Sayapullo",
        "provincia_id": "1311",
        "departamento_id": "13"
    },
    {
        "id": "131201",
        "descripcion": "Viru",
        "provincia_id": "1312",
        "departamento_id": "13"
    },
    {
        "id": "131202",
        "descripcion": "Chao",
        "provincia_id": "1312",
        "departamento_id": "13"
    },
    {
        "id": "131203",
        "descripcion": "Guadalupito",
        "provincia_id": "1312",
        "departamento_id": "13"
    },
    {
        "id": "140101",
        "descripcion": "Chiclayo",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140102",
        "descripcion": "Chongoyape",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140103",
        "descripcion": "Eten",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140104",
        "descripcion": "Eten Puerto",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140105",
        "descripcion": "José Leonardo Ortiz",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140106",
        "descripcion": "La Victoria",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140107",
        "descripcion": "Lagunas",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140108",
        "descripcion": "Monsefu",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140109",
        "descripcion": "Nueva Arica",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140110",
        "descripcion": "Oyotun",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140111",
        "descripcion": "Picsi",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140112",
        "descripcion": "Pimentel",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140113",
        "descripcion": "Reque",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140114",
        "descripcion": "Santa Rosa",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140115",
        "descripcion": "Saña",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140116",
        "descripcion": "Cayalti",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140117",
        "descripcion": "Patapo",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140118",
        "descripcion": "Pomalca",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140119",
        "descripcion": "Pucala",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140120",
        "descripcion": "Tuman",
        "provincia_id": "1401",
        "departamento_id": "14"
    },
    {
        "id": "140201",
        "descripcion": "Ferreñafe",
        "provincia_id": "1402",
        "departamento_id": "14"
    },
    {
        "id": "140202",
        "descripcion": "Cañaris",
        "provincia_id": "1402",
        "departamento_id": "14"
    },
    {
        "id": "140203",
        "descripcion": "Incahuasi",
        "provincia_id": "1402",
        "departamento_id": "14"
    },
    {
        "id": "140204",
        "descripcion": "Manuel Antonio Mesones Muro",
        "provincia_id": "1402",
        "departamento_id": "14"
    },
    {
        "id": "140205",
        "descripcion": "Pitipo",
        "provincia_id": "1402",
        "departamento_id": "14"
    },
    {
        "id": "140206",
        "descripcion": "Pueblo Nuevo",
        "provincia_id": "1402",
        "departamento_id": "14"
    },
    {
        "id": "140301",
        "descripcion": "Lambayeque",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140302",
        "descripcion": "Chochope",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140303",
        "descripcion": "Illimo",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140304",
        "descripcion": "Jayanca",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140305",
        "descripcion": "Mochumi",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140306",
        "descripcion": "Morrope",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140307",
        "descripcion": "Motupe",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140308",
        "descripcion": "Olmos",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140309",
        "descripcion": "Pacora",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140310",
        "descripcion": "Salas",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140311",
        "descripcion": "San José",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "140312",
        "descripcion": "Tucume",
        "provincia_id": "1403",
        "departamento_id": "14"
    },
    {
        "id": "150101",
        "descripcion": "Lima",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150102",
        "descripcion": "Ancón",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150103",
        "descripcion": "Ate",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150104",
        "descripcion": "Barranco",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150105",
        "descripcion": "Breña",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150106",
        "descripcion": "Carabayllo",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150107",
        "descripcion": "Chaclacayo",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150108",
        "descripcion": "Chorrillos",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150109",
        "descripcion": "Cieneguilla",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150110",
        "descripcion": "Comas",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150111",
        "descripcion": "El Agustino",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150112",
        "descripcion": "Independencia",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150113",
        "descripcion": "Jesús María",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150114",
        "descripcion": "La Molina",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150115",
        "descripcion": "La Victoria",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150116",
        "descripcion": "Lince",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150117",
        "descripcion": "Los Olivos",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150118",
        "descripcion": "Lurigancho",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150119",
        "descripcion": "Lurin",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150120",
        "descripcion": "Magdalena del Mar",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150121",
        "descripcion": "Pueblo Libre",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150122",
        "descripcion": "Miraflores",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150123",
        "descripcion": "Pachacamac",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150124",
        "descripcion": "Pucusana",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150125",
        "descripcion": "Puente Piedra",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150126",
        "descripcion": "Punta Hermosa",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150127",
        "descripcion": "Punta Negra",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150128",
        "descripcion": "Rímac",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150129",
        "descripcion": "San Bartolo",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150130",
        "descripcion": "San Borja",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150131",
        "descripcion": "San Isidro",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150132",
        "descripcion": "San Juan de Lurigancho",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150133",
        "descripcion": "San Juan de Miraflores",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150134",
        "descripcion": "San Luis",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150135",
        "descripcion": "San Martín de Porres",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150136",
        "descripcion": "San Miguel",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150137",
        "descripcion": "Santa Anita",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150138",
        "descripcion": "Santa María del Mar",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150139",
        "descripcion": "Santa Rosa",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150140",
        "descripcion": "Santiago de Surco",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150141",
        "descripcion": "Surquillo",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150142",
        "descripcion": "Villa El Salvador",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150143",
        "descripcion": "Villa María del Triunfo",
        "provincia_id": "1501",
        "departamento_id": "15"
    },
    {
        "id": "150201",
        "descripcion": "Barranca",
        "provincia_id": "1502",
        "departamento_id": "15"
    },
    {
        "id": "150202",
        "descripcion": "Paramonga",
        "provincia_id": "1502",
        "departamento_id": "15"
    },
    {
        "id": "150203",
        "descripcion": "Pativilca",
        "provincia_id": "1502",
        "departamento_id": "15"
    },
    {
        "id": "150204",
        "descripcion": "Supe",
        "provincia_id": "1502",
        "departamento_id": "15"
    },
    {
        "id": "150205",
        "descripcion": "Supe Puerto",
        "provincia_id": "1502",
        "departamento_id": "15"
    },
    {
        "id": "150301",
        "descripcion": "Cajatambo",
        "provincia_id": "1503",
        "departamento_id": "15"
    },
    {
        "id": "150302",
        "descripcion": "Copa",
        "provincia_id": "1503",
        "departamento_id": "15"
    },
    {
        "id": "150303",
        "descripcion": "Gorgor",
        "provincia_id": "1503",
        "departamento_id": "15"
    },
    {
        "id": "150304",
        "descripcion": "Huancapon",
        "provincia_id": "1503",
        "departamento_id": "15"
    },
    {
        "id": "150305",
        "descripcion": "Manas",
        "provincia_id": "1503",
        "departamento_id": "15"
    },
    {
        "id": "150401",
        "descripcion": "Canta",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150402",
        "descripcion": "Arahuay",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150403",
        "descripcion": "Huamantanga",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150404",
        "descripcion": "Huaros",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150405",
        "descripcion": "Lachaqui",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150406",
        "descripcion": "San Buenaventura",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150407",
        "descripcion": "Santa Rosa de Quives",
        "provincia_id": "1504",
        "departamento_id": "15"
    },
    {
        "id": "150501",
        "descripcion": "San Vicente de Cañete",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150502",
        "descripcion": "Asia",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150503",
        "descripcion": "Calango",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150504",
        "descripcion": "Cerro Azul",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150505",
        "descripcion": "Chilca",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150506",
        "descripcion": "Coayllo",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150507",
        "descripcion": "Imperial",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150508",
        "descripcion": "Lunahuana",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150509",
        "descripcion": "Mala",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150510",
        "descripcion": "Nuevo Imperial",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150511",
        "descripcion": "Pacaran",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150512",
        "descripcion": "Quilmana",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150513",
        "descripcion": "San Antonio",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150514",
        "descripcion": "San Luis",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150515",
        "descripcion": "Santa Cruz de Flores",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150516",
        "descripcion": "Zúñiga",
        "provincia_id": "1505",
        "departamento_id": "15"
    },
    {
        "id": "150601",
        "descripcion": "Huaral",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150602",
        "descripcion": "Atavillos Alto",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150603",
        "descripcion": "Atavillos Bajo",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150604",
        "descripcion": "Aucallama",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150605",
        "descripcion": "Chancay",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150606",
        "descripcion": "Ihuari",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150607",
        "descripcion": "Lampian",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150608",
        "descripcion": "Pacaraos",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150609",
        "descripcion": "San Miguel de Acos",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150610",
        "descripcion": "Santa Cruz de Andamarca",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150611",
        "descripcion": "Sumbilca",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150612",
        "descripcion": "Veintisiete de Noviembre",
        "provincia_id": "1506",
        "departamento_id": "15"
    },
    {
        "id": "150701",
        "descripcion": "Matucana",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150702",
        "descripcion": "Antioquia",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150703",
        "descripcion": "Callahuanca",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150704",
        "descripcion": "Carampoma",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150705",
        "descripcion": "Chicla",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150706",
        "descripcion": "Cuenca",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150707",
        "descripcion": "Huachupampa",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150708",
        "descripcion": "Huanza",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150709",
        "descripcion": "Huarochiri",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150710",
        "descripcion": "Lahuaytambo",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150711",
        "descripcion": "Langa",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150712",
        "descripcion": "Laraos",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150713",
        "descripcion": "Mariatana",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150714",
        "descripcion": "Ricardo Palma",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150715",
        "descripcion": "San Andrés de Tupicocha",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150716",
        "descripcion": "San Antonio",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150717",
        "descripcion": "San Bartolomé",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150718",
        "descripcion": "San Damian",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150719",
        "descripcion": "San Juan de Iris",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150720",
        "descripcion": "San Juan de Tantaranche",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150721",
        "descripcion": "San Lorenzo de Quinti",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150722",
        "descripcion": "San Mateo",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150723",
        "descripcion": "San Mateo de Otao",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150724",
        "descripcion": "San Pedro de Casta",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150725",
        "descripcion": "San Pedro de Huancayre",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150726",
        "descripcion": "Sangallaya",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150727",
        "descripcion": "Santa Cruz de Cocachacra",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150728",
        "descripcion": "Santa Eulalia",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150729",
        "descripcion": "Santiago de Anchucaya",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150730",
        "descripcion": "Santiago de Tuna",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150731",
        "descripcion": "Santo Domingo de Los Olleros",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150732",
        "descripcion": "Surco",
        "provincia_id": "1507",
        "departamento_id": "15"
    },
    {
        "id": "150801",
        "descripcion": "Huacho",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150802",
        "descripcion": "Ambar",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150803",
        "descripcion": "Caleta de Carquin",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150804",
        "descripcion": "Checras",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150805",
        "descripcion": "Hualmay",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150806",
        "descripcion": "Huaura",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150807",
        "descripcion": "Leoncio Prado",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150808",
        "descripcion": "Paccho",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150809",
        "descripcion": "Santa Leonor",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150810",
        "descripcion": "Santa María",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150811",
        "descripcion": "Sayan",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150812",
        "descripcion": "Vegueta",
        "provincia_id": "1508",
        "departamento_id": "15"
    },
    {
        "id": "150901",
        "descripcion": "Oyon",
        "provincia_id": "1509",
        "departamento_id": "15"
    },
    {
        "id": "150902",
        "descripcion": "Andajes",
        "provincia_id": "1509",
        "departamento_id": "15"
    },
    {
        "id": "150903",
        "descripcion": "Caujul",
        "provincia_id": "1509",
        "departamento_id": "15"
    },
    {
        "id": "150904",
        "descripcion": "Cochamarca",
        "provincia_id": "1509",
        "departamento_id": "15"
    },
    {
        "id": "150905",
        "descripcion": "Navan",
        "provincia_id": "1509",
        "departamento_id": "15"
    },
    {
        "id": "150906",
        "descripcion": "Pachangara",
        "provincia_id": "1509",
        "departamento_id": "15"
    },
    {
        "id": "151001",
        "descripcion": "Yauyos",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151002",
        "descripcion": "Alis",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151003",
        "descripcion": "Allauca",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151004",
        "descripcion": "Ayaviri",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151005",
        "descripcion": "Azángaro",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151006",
        "descripcion": "Cacra",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151007",
        "descripcion": "Carania",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151008",
        "descripcion": "Catahuasi",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151009",
        "descripcion": "Chocos",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151010",
        "descripcion": "Cochas",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151011",
        "descripcion": "Colonia",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151012",
        "descripcion": "Hongos",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151013",
        "descripcion": "Huampara",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151014",
        "descripcion": "Huancaya",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151015",
        "descripcion": "Huangascar",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151016",
        "descripcion": "Huantan",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151017",
        "descripcion": "Huañec",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151018",
        "descripcion": "Laraos",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151019",
        "descripcion": "Lincha",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151020",
        "descripcion": "Madean",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151021",
        "descripcion": "Miraflores",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151022",
        "descripcion": "Omas",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151023",
        "descripcion": "Putinza",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151024",
        "descripcion": "Quinches",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151025",
        "descripcion": "Quinocay",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151026",
        "descripcion": "San Joaquín",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151027",
        "descripcion": "San Pedro de Pilas",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151028",
        "descripcion": "Tanta",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151029",
        "descripcion": "Tauripampa",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151030",
        "descripcion": "Tomas",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151031",
        "descripcion": "Tupe",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151032",
        "descripcion": "Viñac",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "151033",
        "descripcion": "Vitis",
        "provincia_id": "1510",
        "departamento_id": "15"
    },
    {
        "id": "160101",
        "descripcion": "Iquitos",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160102",
        "descripcion": "Alto Nanay",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160103",
        "descripcion": "Fernando Lores",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160104",
        "descripcion": "Indiana",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160105",
        "descripcion": "Las Amazonas",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160106",
        "descripcion": "Mazan",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160107",
        "descripcion": "Napo",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160108",
        "descripcion": "Punchana",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160110",
        "descripcion": "Torres Causana",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160112",
        "descripcion": "Belén",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160113",
        "descripcion": "San Juan Bautista",
        "provincia_id": "1601",
        "departamento_id": "16"
    },
    {
        "id": "160201",
        "descripcion": "Yurimaguas",
        "provincia_id": "1602",
        "departamento_id": "16"
    },
    {
        "id": "160202",
        "descripcion": "Balsapuerto",
        "provincia_id": "1602",
        "departamento_id": "16"
    },
    {
        "id": "160205",
        "descripcion": "Jeberos",
        "provincia_id": "1602",
        "departamento_id": "16"
    },
    {
        "id": "160206",
        "descripcion": "Lagunas",
        "provincia_id": "1602",
        "departamento_id": "16"
    },
    {
        "id": "160210",
        "descripcion": "Santa Cruz",
        "provincia_id": "1602",
        "departamento_id": "16"
    },
    {
        "id": "160211",
        "descripcion": "Teniente Cesar López Rojas",
        "provincia_id": "1602",
        "departamento_id": "16"
    },
    {
        "id": "160301",
        "descripcion": "Nauta",
        "provincia_id": "1603",
        "departamento_id": "16"
    },
    {
        "id": "160302",
        "descripcion": "Parinari",
        "provincia_id": "1603",
        "departamento_id": "16"
    },
    {
        "id": "160303",
        "descripcion": "Tigre",
        "provincia_id": "1603",
        "departamento_id": "16"
    },
    {
        "id": "160304",
        "descripcion": "Trompeteros",
        "provincia_id": "1603",
        "departamento_id": "16"
    },
    {
        "id": "160305",
        "descripcion": "Urarinas",
        "provincia_id": "1603",
        "departamento_id": "16"
    },
    {
        "id": "160401",
        "descripcion": "Ramón Castilla",
        "provincia_id": "1604",
        "departamento_id": "16"
    },
    {
        "id": "160402",
        "descripcion": "Pebas",
        "provincia_id": "1604",
        "departamento_id": "16"
    },
    {
        "id": "160403",
        "descripcion": "Yavari",
        "provincia_id": "1604",
        "departamento_id": "16"
    },
    {
        "id": "160404",
        "descripcion": "San Pablo",
        "provincia_id": "1604",
        "departamento_id": "16"
    },
    {
        "id": "160501",
        "descripcion": "Requena",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160502",
        "descripcion": "Alto Tapiche",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160503",
        "descripcion": "Capelo",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160504",
        "descripcion": "Emilio San Martín",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160505",
        "descripcion": "Maquia",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160506",
        "descripcion": "Puinahua",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160507",
        "descripcion": "Saquena",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160508",
        "descripcion": "Soplin",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160509",
        "descripcion": "Tapiche",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160510",
        "descripcion": "Jenaro Herrera",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160511",
        "descripcion": "Yaquerana",
        "provincia_id": "1605",
        "departamento_id": "16"
    },
    {
        "id": "160601",
        "descripcion": "Contamana",
        "provincia_id": "1606",
        "departamento_id": "16"
    },
    {
        "id": "160602",
        "descripcion": "Inahuaya",
        "provincia_id": "1606",
        "departamento_id": "16"
    },
    {
        "id": "160603",
        "descripcion": "Padre Márquez",
        "provincia_id": "1606",
        "departamento_id": "16"
    },
    {
        "id": "160604",
        "descripcion": "Pampa Hermosa",
        "provincia_id": "1606",
        "departamento_id": "16"
    },
    {
        "id": "160605",
        "descripcion": "Sarayacu",
        "provincia_id": "1606",
        "departamento_id": "16"
    },
    {
        "id": "160606",
        "descripcion": "Vargas Guerra",
        "provincia_id": "1606",
        "departamento_id": "16"
    },
    {
        "id": "160701",
        "descripcion": "Barranca",
        "provincia_id": "1607",
        "departamento_id": "16"
    },
    {
        "id": "160702",
        "descripcion": "Cahuapanas",
        "provincia_id": "1607",
        "departamento_id": "16"
    },
    {
        "id": "160703",
        "descripcion": "Manseriche",
        "provincia_id": "1607",
        "departamento_id": "16"
    },
    {
        "id": "160704",
        "descripcion": "Morona",
        "provincia_id": "1607",
        "departamento_id": "16"
    },
    {
        "id": "160705",
        "descripcion": "Pastaza",
        "provincia_id": "1607",
        "departamento_id": "16"
    },
    {
        "id": "160706",
        "descripcion": "Andoas",
        "provincia_id": "1607",
        "departamento_id": "16"
    },
    {
        "id": "160801",
        "descripcion": "Putumayo",
        "provincia_id": "1608",
        "departamento_id": "16"
    },
    {
        "id": "160802",
        "descripcion": "Rosa Panduro",
        "provincia_id": "1608",
        "departamento_id": "16"
    },
    {
        "id": "160803",
        "descripcion": "Teniente Manuel Clavero",
        "provincia_id": "1608",
        "departamento_id": "16"
    },
    {
        "id": "160804",
        "descripcion": "Yaguas",
        "provincia_id": "1608",
        "departamento_id": "16"
    },
    {
        "id": "170101",
        "descripcion": "Tambopata",
        "provincia_id": "1701",
        "departamento_id": "17"
    },
    {
        "id": "170102",
        "descripcion": "Inambari",
        "provincia_id": "1701",
        "departamento_id": "17"
    },
    {
        "id": "170103",
        "descripcion": "Las Piedras",
        "provincia_id": "1701",
        "departamento_id": "17"
    },
    {
        "id": "170104",
        "descripcion": "Laberinto",
        "provincia_id": "1701",
        "departamento_id": "17"
    },
    {
        "id": "170201",
        "descripcion": "Manu",
        "provincia_id": "1702",
        "departamento_id": "17"
    },
    {
        "id": "170202",
        "descripcion": "Fitzcarrald",
        "provincia_id": "1702",
        "departamento_id": "17"
    },
    {
        "id": "170203",
        "descripcion": "Madre de Dios",
        "provincia_id": "1702",
        "departamento_id": "17"
    },
    {
        "id": "170204",
        "descripcion": "Huepetuhe",
        "provincia_id": "1702",
        "departamento_id": "17"
    },
    {
        "id": "170301",
        "descripcion": "Iñapari",
        "provincia_id": "1703",
        "departamento_id": "17"
    },
    {
        "id": "170302",
        "descripcion": "Iberia",
        "provincia_id": "1703",
        "departamento_id": "17"
    },
    {
        "id": "170303",
        "descripcion": "Tahuamanu",
        "provincia_id": "1703",
        "departamento_id": "17"
    },
    {
        "id": "180101",
        "descripcion": "Moquegua",
        "provincia_id": "1801",
        "departamento_id": "18"
    },
    {
        "id": "180102",
        "descripcion": "Carumas",
        "provincia_id": "1801",
        "departamento_id": "18"
    },
    {
        "id": "180103",
        "descripcion": "Cuchumbaya",
        "provincia_id": "1801",
        "departamento_id": "18"
    },
    {
        "id": "180104",
        "descripcion": "Samegua",
        "provincia_id": "1801",
        "departamento_id": "18"
    },
    {
        "id": "180105",
        "descripcion": "San Cristóbal",
        "provincia_id": "1801",
        "departamento_id": "18"
    },
    {
        "id": "180106",
        "descripcion": "Torata",
        "provincia_id": "1801",
        "departamento_id": "18"
    },
    {
        "id": "180201",
        "descripcion": "Omate",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180202",
        "descripcion": "Chojata",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180203",
        "descripcion": "Coalaque",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180204",
        "descripcion": "Ichuña",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180205",
        "descripcion": "La Capilla",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180206",
        "descripcion": "Lloque",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180207",
        "descripcion": "Matalaque",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180208",
        "descripcion": "Puquina",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180209",
        "descripcion": "Quinistaquillas",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180210",
        "descripcion": "Ubinas",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180211",
        "descripcion": "Yunga",
        "provincia_id": "1802",
        "departamento_id": "18"
    },
    {
        "id": "180301",
        "descripcion": "Ilo",
        "provincia_id": "1803",
        "departamento_id": "18"
    },
    {
        "id": "180302",
        "descripcion": "El Algarrobal",
        "provincia_id": "1803",
        "departamento_id": "18"
    },
    {
        "id": "180303",
        "descripcion": "Pacocha",
        "provincia_id": "1803",
        "departamento_id": "18"
    },
    {
        "id": "190101",
        "descripcion": "Chaupimarca",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190102",
        "descripcion": "Huachon",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190103",
        "descripcion": "Huariaca",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190104",
        "descripcion": "Huayllay",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190105",
        "descripcion": "Ninacaca",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190106",
        "descripcion": "Pallanchacra",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190107",
        "descripcion": "Paucartambo",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190108",
        "descripcion": "San Francisco de Asís de Yarusyacan",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190109",
        "descripcion": "Simon Bolívar",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190110",
        "descripcion": "Ticlacayan",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190111",
        "descripcion": "Tinyahuarco",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190112",
        "descripcion": "Vicco",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190113",
        "descripcion": "Yanacancha",
        "provincia_id": "1901",
        "departamento_id": "19"
    },
    {
        "id": "190201",
        "descripcion": "Yanahuanca",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190202",
        "descripcion": "Chacayan",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190203",
        "descripcion": "Goyllarisquizga",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190204",
        "descripcion": "Paucar",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190205",
        "descripcion": "San Pedro de Pillao",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190206",
        "descripcion": "Santa Ana de Tusi",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190207",
        "descripcion": "Tapuc",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190208",
        "descripcion": "Vilcabamba",
        "provincia_id": "1902",
        "departamento_id": "19"
    },
    {
        "id": "190301",
        "descripcion": "Oxapampa",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190302",
        "descripcion": "Chontabamba",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190303",
        "descripcion": "Huancabamba",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190304",
        "descripcion": "Palcazu",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190305",
        "descripcion": "Pozuzo",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190306",
        "descripcion": "Puerto Bermúdez",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190307",
        "descripcion": "Villa Rica",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "190308",
        "descripcion": "Constitución",
        "provincia_id": "1903",
        "departamento_id": "19"
    },
    {
        "id": "200101",
        "descripcion": "Piura",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200104",
        "descripcion": "Castilla",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200105",
        "descripcion": "Catacaos",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200107",
        "descripcion": "Cura Mori",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200108",
        "descripcion": "El Tallan",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200109",
        "descripcion": "La Arena",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200110",
        "descripcion": "La Unión",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200111",
        "descripcion": "Las Lomas",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200114",
        "descripcion": "Tambo Grande",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200115",
        "descripcion": "Veintiseis de Octubre",
        "provincia_id": "2001",
        "departamento_id": "20"
    },
    {
        "id": "200201",
        "descripcion": "Ayabaca",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200202",
        "descripcion": "Frias",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200203",
        "descripcion": "Jilili",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200204",
        "descripcion": "Lagunas",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200205",
        "descripcion": "Montero",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200206",
        "descripcion": "Pacaipampa",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200207",
        "descripcion": "Paimas",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200208",
        "descripcion": "Sapillica",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200209",
        "descripcion": "Sicchez",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200210",
        "descripcion": "Suyo",
        "provincia_id": "2002",
        "departamento_id": "20"
    },
    {
        "id": "200301",
        "descripcion": "Huancabamba",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200302",
        "descripcion": "Canchaque",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200303",
        "descripcion": "El Carmen de la Frontera",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200304",
        "descripcion": "Huarmaca",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200305",
        "descripcion": "Lalaquiz",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200306",
        "descripcion": "San Miguel de El Faique",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200307",
        "descripcion": "Sondor",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200308",
        "descripcion": "Sondorillo",
        "provincia_id": "2003",
        "departamento_id": "20"
    },
    {
        "id": "200401",
        "descripcion": "Chulucanas",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200402",
        "descripcion": "Buenos Aires",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200403",
        "descripcion": "Chalaco",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200404",
        "descripcion": "La Matanza",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200405",
        "descripcion": "Morropon",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200406",
        "descripcion": "Salitral",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200407",
        "descripcion": "San Juan de Bigote",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200408",
        "descripcion": "Santa Catalina de Mossa",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200409",
        "descripcion": "Santo Domingo",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200410",
        "descripcion": "Yamango",
        "provincia_id": "2004",
        "departamento_id": "20"
    },
    {
        "id": "200501",
        "descripcion": "Paita",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200502",
        "descripcion": "Amotape",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200503",
        "descripcion": "Arenal",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200504",
        "descripcion": "Colan",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200505",
        "descripcion": "La Huaca",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200506",
        "descripcion": "Tamarindo",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200507",
        "descripcion": "Vichayal",
        "provincia_id": "2005",
        "departamento_id": "20"
    },
    {
        "id": "200601",
        "descripcion": "Sullana",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200602",
        "descripcion": "Bellavista",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200603",
        "descripcion": "Ignacio Escudero",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200604",
        "descripcion": "Lancones",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200605",
        "descripcion": "Marcavelica",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200606",
        "descripcion": "Miguel Checa",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200607",
        "descripcion": "Querecotillo",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200608",
        "descripcion": "Salitral",
        "provincia_id": "2006",
        "departamento_id": "20"
    },
    {
        "id": "200701",
        "descripcion": "Pariñas",
        "provincia_id": "2007",
        "departamento_id": "20"
    },
    {
        "id": "200702",
        "descripcion": "El Alto",
        "provincia_id": "2007",
        "departamento_id": "20"
    },
    {
        "id": "200703",
        "descripcion": "La Brea",
        "provincia_id": "2007",
        "departamento_id": "20"
    },
    {
        "id": "200704",
        "descripcion": "Lobitos",
        "provincia_id": "2007",
        "departamento_id": "20"
    },
    {
        "id": "200705",
        "descripcion": "Los Organos",
        "provincia_id": "2007",
        "departamento_id": "20"
    },
    {
        "id": "200706",
        "descripcion": "Mancora",
        "provincia_id": "2007",
        "departamento_id": "20"
    },
    {
        "id": "200801",
        "descripcion": "Sechura",
        "provincia_id": "2008",
        "departamento_id": "20"
    },
    {
        "id": "200802",
        "descripcion": "Bellavista de la Unión",
        "provincia_id": "2008",
        "departamento_id": "20"
    },
    {
        "id": "200803",
        "descripcion": "Bernal",
        "provincia_id": "2008",
        "departamento_id": "20"
    },
    {
        "id": "200804",
        "descripcion": "Cristo Nos Valga",
        "provincia_id": "2008",
        "departamento_id": "20"
    },
    {
        "id": "200805",
        "descripcion": "Vice",
        "provincia_id": "2008",
        "departamento_id": "20"
    },
    {
        "id": "200806",
        "descripcion": "Rinconada Llicuar",
        "provincia_id": "2008",
        "departamento_id": "20"
    },
    {
        "id": "210101",
        "descripcion": "Puno",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210102",
        "descripcion": "Acora",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210103",
        "descripcion": "Amantani",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210104",
        "descripcion": "Atuncolla",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210105",
        "descripcion": "Capachica",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210106",
        "descripcion": "Chucuito",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210107",
        "descripcion": "Coata",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210108",
        "descripcion": "Huata",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210109",
        "descripcion": "Mañazo",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210110",
        "descripcion": "Paucarcolla",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210111",
        "descripcion": "Pichacani",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210112",
        "descripcion": "Plateria",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210113",
        "descripcion": "San Antonio",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210114",
        "descripcion": "Tiquillaca",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210115",
        "descripcion": "Vilque",
        "provincia_id": "2101",
        "departamento_id": "21"
    },
    {
        "id": "210201",
        "descripcion": "Azángaro",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210202",
        "descripcion": "Achaya",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210203",
        "descripcion": "Arapa",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210204",
        "descripcion": "Asillo",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210205",
        "descripcion": "Caminaca",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210206",
        "descripcion": "Chupa",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210207",
        "descripcion": "José Domingo Choquehuanca",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210208",
        "descripcion": "Muñani",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210209",
        "descripcion": "Potoni",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210210",
        "descripcion": "Saman",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210211",
        "descripcion": "San Anton",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210212",
        "descripcion": "San José",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210213",
        "descripcion": "San Juan de Salinas",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210214",
        "descripcion": "Santiago de Pupuja",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210215",
        "descripcion": "Tirapata",
        "provincia_id": "2102",
        "departamento_id": "21"
    },
    {
        "id": "210301",
        "descripcion": "Macusani",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210302",
        "descripcion": "Ajoyani",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210303",
        "descripcion": "Ayapata",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210304",
        "descripcion": "Coasa",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210305",
        "descripcion": "Corani",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210306",
        "descripcion": "Crucero",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210307",
        "descripcion": "Ituata",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210308",
        "descripcion": "Ollachea",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210309",
        "descripcion": "San Gaban",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210310",
        "descripcion": "Usicayos",
        "provincia_id": "2103",
        "departamento_id": "21"
    },
    {
        "id": "210401",
        "descripcion": "Juli",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210402",
        "descripcion": "Desaguadero",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210403",
        "descripcion": "Huacullani",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210404",
        "descripcion": "Kelluyo",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210405",
        "descripcion": "Pisacoma",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210406",
        "descripcion": "Pomata",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210407",
        "descripcion": "Zepita",
        "provincia_id": "2104",
        "departamento_id": "21"
    },
    {
        "id": "210501",
        "descripcion": "Ilave",
        "provincia_id": "2105",
        "departamento_id": "21"
    },
    {
        "id": "210502",
        "descripcion": "Capazo",
        "provincia_id": "2105",
        "departamento_id": "21"
    },
    {
        "id": "210503",
        "descripcion": "Pilcuyo",
        "provincia_id": "2105",
        "departamento_id": "21"
    },
    {
        "id": "210504",
        "descripcion": "Santa Rosa",
        "provincia_id": "2105",
        "departamento_id": "21"
    },
    {
        "id": "210505",
        "descripcion": "Conduriri",
        "provincia_id": "2105",
        "departamento_id": "21"
    },
    {
        "id": "210601",
        "descripcion": "Huancane",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210602",
        "descripcion": "Cojata",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210603",
        "descripcion": "Huatasani",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210604",
        "descripcion": "Inchupalla",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210605",
        "descripcion": "Pusi",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210606",
        "descripcion": "Rosaspata",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210607",
        "descripcion": "Taraco",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210608",
        "descripcion": "Vilque Chico",
        "provincia_id": "2106",
        "departamento_id": "21"
    },
    {
        "id": "210701",
        "descripcion": "Lampa",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210702",
        "descripcion": "Cabanilla",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210703",
        "descripcion": "Calapuja",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210704",
        "descripcion": "Nicasio",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210705",
        "descripcion": "Ocuviri",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210706",
        "descripcion": "Palca",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210707",
        "descripcion": "Paratia",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210708",
        "descripcion": "Pucara",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210709",
        "descripcion": "Santa Lucia",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210710",
        "descripcion": "Vilavila",
        "provincia_id": "2107",
        "departamento_id": "21"
    },
    {
        "id": "210801",
        "descripcion": "Ayaviri",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210802",
        "descripcion": "Antauta",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210803",
        "descripcion": "Cupi",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210804",
        "descripcion": "Llalli",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210805",
        "descripcion": "Macari",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210806",
        "descripcion": "Nuñoa",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210807",
        "descripcion": "Orurillo",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210808",
        "descripcion": "Santa Rosa",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210809",
        "descripcion": "Umachiri",
        "provincia_id": "2108",
        "departamento_id": "21"
    },
    {
        "id": "210901",
        "descripcion": "Moho",
        "provincia_id": "2109",
        "departamento_id": "21"
    },
    {
        "id": "210902",
        "descripcion": "Conima",
        "provincia_id": "2109",
        "departamento_id": "21"
    },
    {
        "id": "210903",
        "descripcion": "Huayrapata",
        "provincia_id": "2109",
        "departamento_id": "21"
    },
    {
        "id": "210904",
        "descripcion": "Tilali",
        "provincia_id": "2109",
        "departamento_id": "21"
    },
    {
        "id": "211001",
        "descripcion": "Putina",
        "provincia_id": "2110",
        "departamento_id": "21"
    },
    {
        "id": "211002",
        "descripcion": "Ananea",
        "provincia_id": "2110",
        "departamento_id": "21"
    },
    {
        "id": "211003",
        "descripcion": "Pedro Vilca Apaza",
        "provincia_id": "2110",
        "departamento_id": "21"
    },
    {
        "id": "211004",
        "descripcion": "Quilcapuncu",
        "provincia_id": "2110",
        "departamento_id": "21"
    },
    {
        "id": "211005",
        "descripcion": "Sina",
        "provincia_id": "2110",
        "departamento_id": "21"
    },
    {
        "id": "211101",
        "descripcion": "Juliaca",
        "provincia_id": "2111",
        "departamento_id": "21"
    },
    {
        "id": "211102",
        "descripcion": "Cabana",
        "provincia_id": "2111",
        "departamento_id": "21"
    },
    {
        "id": "211103",
        "descripcion": "Cabanillas",
        "provincia_id": "2111",
        "departamento_id": "21"
    },
    {
        "id": "211104",
        "descripcion": "Caracoto",
        "provincia_id": "2111",
        "departamento_id": "21"
    },
    {
        "id": "211105",
        "descripcion": "San Miguel",
        "provincia_id": "2111",
        "departamento_id": "21"
    },
    {
        "id": "211201",
        "descripcion": "Sandia",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211202",
        "descripcion": "Cuyocuyo",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211203",
        "descripcion": "Limbani",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211204",
        "descripcion": "Patambuco",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211205",
        "descripcion": "Phara",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211206",
        "descripcion": "Quiaca",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211207",
        "descripcion": "San Juan del Oro",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211208",
        "descripcion": "Yanahuaya",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211209",
        "descripcion": "Alto Inambari",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211210",
        "descripcion": "San Pedro de Putina Punco",
        "provincia_id": "2112",
        "departamento_id": "21"
    },
    {
        "id": "211301",
        "descripcion": "Yunguyo",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "211302",
        "descripcion": "Anapia",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "211303",
        "descripcion": "Copani",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "211304",
        "descripcion": "Cuturapi",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "211305",
        "descripcion": "Ollaraya",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "211306",
        "descripcion": "Tinicachi",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "211307",
        "descripcion": "Unicachi",
        "provincia_id": "2113",
        "departamento_id": "21"
    },
    {
        "id": "220101",
        "descripcion": "Moyobamba",
        "provincia_id": "2201",
        "departamento_id": "22"
    },
    {
        "id": "220102",
        "descripcion": "Calzada",
        "provincia_id": "2201",
        "departamento_id": "22"
    },
    {
        "id": "220103",
        "descripcion": "Habana",
        "provincia_id": "2201",
        "departamento_id": "22"
    },
    {
        "id": "220104",
        "descripcion": "Jepelacio",
        "provincia_id": "2201",
        "departamento_id": "22"
    },
    {
        "id": "220105",
        "descripcion": "Soritor",
        "provincia_id": "2201",
        "departamento_id": "22"
    },
    {
        "id": "220106",
        "descripcion": "Yantalo",
        "provincia_id": "2201",
        "departamento_id": "22"
    },
    {
        "id": "220201",
        "descripcion": "Bellavista",
        "provincia_id": "2202",
        "departamento_id": "22"
    },
    {
        "id": "220202",
        "descripcion": "Alto Biavo",
        "provincia_id": "2202",
        "departamento_id": "22"
    },
    {
        "id": "220203",
        "descripcion": "Bajo Biavo",
        "provincia_id": "2202",
        "departamento_id": "22"
    },
    {
        "id": "220204",
        "descripcion": "Huallaga",
        "provincia_id": "2202",
        "departamento_id": "22"
    },
    {
        "id": "220205",
        "descripcion": "San Pablo",
        "provincia_id": "2202",
        "departamento_id": "22"
    },
    {
        "id": "220206",
        "descripcion": "San Rafael",
        "provincia_id": "2202",
        "departamento_id": "22"
    },
    {
        "id": "220301",
        "descripcion": "San José de Sisa",
        "provincia_id": "2203",
        "departamento_id": "22"
    },
    {
        "id": "220302",
        "descripcion": "Agua Blanca",
        "provincia_id": "2203",
        "departamento_id": "22"
    },
    {
        "id": "220303",
        "descripcion": "San Martín",
        "provincia_id": "2203",
        "departamento_id": "22"
    },
    {
        "id": "220304",
        "descripcion": "Santa Rosa",
        "provincia_id": "2203",
        "departamento_id": "22"
    },
    {
        "id": "220305",
        "descripcion": "Shatoja",
        "provincia_id": "2203",
        "departamento_id": "22"
    },
    {
        "id": "220401",
        "descripcion": "Saposoa",
        "provincia_id": "2204",
        "departamento_id": "22"
    },
    {
        "id": "220402",
        "descripcion": "Alto Saposoa",
        "provincia_id": "2204",
        "departamento_id": "22"
    },
    {
        "id": "220403",
        "descripcion": "El Eslabón",
        "provincia_id": "2204",
        "departamento_id": "22"
    },
    {
        "id": "220404",
        "descripcion": "Piscoyacu",
        "provincia_id": "2204",
        "departamento_id": "22"
    },
    {
        "id": "220405",
        "descripcion": "Sacanche",
        "provincia_id": "2204",
        "departamento_id": "22"
    },
    {
        "id": "220406",
        "descripcion": "Tingo de Saposoa",
        "provincia_id": "2204",
        "departamento_id": "22"
    },
    {
        "id": "220501",
        "descripcion": "Lamas",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220502",
        "descripcion": "Alonso de Alvarado",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220503",
        "descripcion": "Barranquita",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220504",
        "descripcion": "Caynarachi",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220505",
        "descripcion": "Cuñumbuqui",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220506",
        "descripcion": "Pinto Recodo",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220507",
        "descripcion": "Rumisapa",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220508",
        "descripcion": "San Roque de Cumbaza",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220509",
        "descripcion": "Shanao",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220510",
        "descripcion": "Tabalosos",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220511",
        "descripcion": "Zapatero",
        "provincia_id": "2205",
        "departamento_id": "22"
    },
    {
        "id": "220601",
        "descripcion": "Juanjuí",
        "provincia_id": "2206",
        "departamento_id": "22"
    },
    {
        "id": "220602",
        "descripcion": "Campanilla",
        "provincia_id": "2206",
        "departamento_id": "22"
    },
    {
        "id": "220603",
        "descripcion": "Huicungo",
        "provincia_id": "2206",
        "departamento_id": "22"
    },
    {
        "id": "220604",
        "descripcion": "Pachiza",
        "provincia_id": "2206",
        "departamento_id": "22"
    },
    {
        "id": "220605",
        "descripcion": "Pajarillo",
        "provincia_id": "2206",
        "departamento_id": "22"
    },
    {
        "id": "220701",
        "descripcion": "Picota",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220702",
        "descripcion": "Buenos Aires",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220703",
        "descripcion": "Caspisapa",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220704",
        "descripcion": "Pilluana",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220705",
        "descripcion": "Pucacaca",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220706",
        "descripcion": "San Cristóbal",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220707",
        "descripcion": "San Hilarión",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220708",
        "descripcion": "Shamboyacu",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220709",
        "descripcion": "Tingo de Ponasa",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220710",
        "descripcion": "Tres Unidos",
        "provincia_id": "2207",
        "departamento_id": "22"
    },
    {
        "id": "220801",
        "descripcion": "Rioja",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220802",
        "descripcion": "Awajun",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220803",
        "descripcion": "Elías Soplin Vargas",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220804",
        "descripcion": "Nueva Cajamarca",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220805",
        "descripcion": "Pardo Miguel",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220806",
        "descripcion": "Posic",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220807",
        "descripcion": "San Fernando",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220808",
        "descripcion": "Yorongos",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220809",
        "descripcion": "Yuracyacu",
        "provincia_id": "2208",
        "departamento_id": "22"
    },
    {
        "id": "220901",
        "descripcion": "Tarapoto",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220902",
        "descripcion": "Alberto Leveau",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220903",
        "descripcion": "Cacatachi",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220904",
        "descripcion": "Chazuta",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220905",
        "descripcion": "Chipurana",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220906",
        "descripcion": "El Porvenir",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220907",
        "descripcion": "Huimbayoc",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220908",
        "descripcion": "Juan Guerra",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220909",
        "descripcion": "La Banda de Shilcayo",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220910",
        "descripcion": "Morales",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220911",
        "descripcion": "Papaplaya",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220912",
        "descripcion": "San Antonio",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220913",
        "descripcion": "Sauce",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "220914",
        "descripcion": "Shapaja",
        "provincia_id": "2209",
        "departamento_id": "22"
    },
    {
        "id": "221001",
        "descripcion": "Tocache",
        "provincia_id": "2210",
        "departamento_id": "22"
    },
    {
        "id": "221002",
        "descripcion": "Nuevo Progreso",
        "provincia_id": "2210",
        "departamento_id": "22"
    },
    {
        "id": "221003",
        "descripcion": "Polvora",
        "provincia_id": "2210",
        "departamento_id": "22"
    },
    {
        "id": "221004",
        "descripcion": "Shunte",
        "provincia_id": "2210",
        "departamento_id": "22"
    },
    {
        "id": "221005",
        "descripcion": "Uchiza",
        "provincia_id": "2210",
        "departamento_id": "22"
    },
    {
        "id": "230101",
        "descripcion": "Tacna",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230102",
        "descripcion": "Alto de la Alianza",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230103",
        "descripcion": "Calana",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230104",
        "descripcion": "Ciudad Nueva",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230105",
        "descripcion": "Inclan",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230106",
        "descripcion": "Pachia",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230107",
        "descripcion": "Palca",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230108",
        "descripcion": "Pocollay",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230109",
        "descripcion": "Sama",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230110",
        "descripcion": "Coronel Gregorio Albarracín Lanchipa",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230111",
        "descripcion": "La Yarada los Palos",
        "provincia_id": "2301",
        "departamento_id": "23"
    },
    {
        "id": "230201",
        "descripcion": "Candarave",
        "provincia_id": "2302",
        "departamento_id": "23"
    },
    {
        "id": "230202",
        "descripcion": "Cairani",
        "provincia_id": "2302",
        "departamento_id": "23"
    },
    {
        "id": "230203",
        "descripcion": "Camilaca",
        "provincia_id": "2302",
        "departamento_id": "23"
    },
    {
        "id": "230204",
        "descripcion": "Curibaya",
        "provincia_id": "2302",
        "departamento_id": "23"
    },
    {
        "id": "230205",
        "descripcion": "Huanuara",
        "provincia_id": "2302",
        "departamento_id": "23"
    },
    {
        "id": "230206",
        "descripcion": "Quilahuani",
        "provincia_id": "2302",
        "departamento_id": "23"
    },
    {
        "id": "230301",
        "descripcion": "Locumba",
        "provincia_id": "2303",
        "departamento_id": "23"
    },
    {
        "id": "230302",
        "descripcion": "Ilabaya",
        "provincia_id": "2303",
        "departamento_id": "23"
    },
    {
        "id": "230303",
        "descripcion": "Ite",
        "provincia_id": "2303",
        "departamento_id": "23"
    },
    {
        "id": "230401",
        "descripcion": "Tarata",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230402",
        "descripcion": "Héroes Albarracín",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230403",
        "descripcion": "Estique",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230404",
        "descripcion": "Estique-Pampa",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230405",
        "descripcion": "Sitajara",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230406",
        "descripcion": "Susapaya",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230407",
        "descripcion": "Tarucachi",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "230408",
        "descripcion": "Ticaco",
        "provincia_id": "2304",
        "departamento_id": "23"
    },
    {
        "id": "240101",
        "descripcion": "Tumbes",
        "provincia_id": "2401",
        "departamento_id": "24"
    },
    {
        "id": "240102",
        "descripcion": "Corrales",
        "provincia_id": "2401",
        "departamento_id": "24"
    },
    {
        "id": "240103",
        "descripcion": "La Cruz",
        "provincia_id": "2401",
        "departamento_id": "24"
    },
    {
        "id": "240104",
        "descripcion": "Pampas de Hospital",
        "provincia_id": "2401",
        "departamento_id": "24"
    },
    {
        "id": "240105",
        "descripcion": "San Jacinto",
        "provincia_id": "2401",
        "departamento_id": "24"
    },
    {
        "id": "240106",
        "descripcion": "San Juan de la Virgen",
        "provincia_id": "2401",
        "departamento_id": "24"
    },
    {
        "id": "240201",
        "descripcion": "Zorritos",
        "provincia_id": "2402",
        "departamento_id": "24"
    },
    {
        "id": "240202",
        "descripcion": "Casitas",
        "provincia_id": "2402",
        "departamento_id": "24"
    },
    {
        "id": "240203",
        "descripcion": "Canoas de Punta Sal",
        "provincia_id": "2402",
        "departamento_id": "24"
    },
    {
        "id": "240301",
        "descripcion": "Zarumilla",
        "provincia_id": "2403",
        "departamento_id": "24"
    },
    {
        "id": "240302",
        "descripcion": "Aguas Verdes",
        "provincia_id": "2403",
        "departamento_id": "24"
    },
    {
        "id": "240303",
        "descripcion": "Matapalo",
        "provincia_id": "2403",
        "departamento_id": "24"
    },
    {
        "id": "240304",
        "descripcion": "Papayal",
        "provincia_id": "2403",
        "departamento_id": "24"
    },
    {
        "id": "250101",
        "descripcion": "Calleria",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250102",
        "descripcion": "Campoverde",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250103",
        "descripcion": "Iparia",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250104",
        "descripcion": "Masisea",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250105",
        "descripcion": "Yarinacocha",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250106",
        "descripcion": "Nueva Requena",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250107",
        "descripcion": "Manantay",
        "provincia_id": "2501",
        "departamento_id": "25"
    },
    {
        "id": "250201",
        "descripcion": "Raymondi",
        "provincia_id": "2502",
        "departamento_id": "25"
    },
    {
        "id": "250202",
        "descripcion": "Sepahua",
        "provincia_id": "2502",
        "departamento_id": "25"
    },
    {
        "id": "250203",
        "descripcion": "Tahuania",
        "provincia_id": "2502",
        "departamento_id": "25"
    },
    {
        "id": "250204",
        "descripcion": "Yurua",
        "provincia_id": "2502",
        "departamento_id": "25"
    },
    {
        "id": "250301",
        "descripcion": "Padre Abad",
        "provincia_id": "2503",
        "departamento_id": "25"
    },
    {
        "id": "250302",
        "descripcion": "Irazola",
        "provincia_id": "2503",
        "departamento_id": "25"
    },
    {
        "id": "250303",
        "descripcion": "Curimana",
        "provincia_id": "2503",
        "departamento_id": "25"
    },
    {
        "id": "250304",
        "descripcion": "Neshuya",
        "provincia_id": "2503",
        "departamento_id": "25"
    },
    {
        "id": "250305",
        "descripcion": "Alexander Von Humboldt",
        "provincia_id": "2503",
        "departamento_id": "25"
    },
    {
        "id": "250401",
        "descripcion": "Purus",
        "provincia_id": "2504",
        "departamento_id": "25"
    }
];

    const chunkSize = 200;
    for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        await Promise.all(chunk.map(async (item) => {
            const exists = await districtRepository.findOne({ where: { id: item.id } });
            if (!exists) {
                await districtRepository.save(districtRepository.create({ id: item.id, description: item.descripcion, province_id: item.provincia_id }));
            }
        }));
    }
    console.log('✔ Distritos sembrados (' + data.length + ').');
}
