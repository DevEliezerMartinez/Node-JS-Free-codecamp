/* const infoCurso= {

    tutores:["Randy","Candy","Mandy"],
    categorias:{
        programacion:[
            {
                id:1,
                titulo: 'Aprende Node',
                lenguaje: 'Javascript',
                vistas: 15000,
                nivel: 'Basico'
    
            },
            {
                id:2,
                titulo: ' Node Intermedio',
                lenguaje: 'Javascript',
                vistas: 18000,
                nivel: 'Intermedio'
            },{
                id:3,
                titulo: ' Node Avanzado',
                lenguaje: 'Typescript',
                vistas: 28500,
                nivel: 'Avanzado'
            }
        ],
        matematicas:[
            {
                id:1,
                titulo: 'Aprende Calculo',
                tema: 'Calculo',
                vistas: 28500,
                nivel: 'Basico'
            },
            {
                id:2,
                titulo: 'Aprende Fisica',
                tema: 'Fisica',
                vistas: 28500,
                nivel: 'Basico'
            }
        ]
    }
}

const prueba = [
    {
        progra:[
            {nombre:"front",duracion:50},
            {nombre:"back",duracion:60},
            {nombre:"git",duracion:70}
        ] ,
        mate: [
            {nombre:"algeloca",duracion:80},
            {nombre:"trigo",duracion:90},
            {nombre:"cuantica",duracion:90}  
        ]
    }
]
 */
const infoCurso = {
    'programacion':[
        {
            id:1,
            titulo: 'Aprende Node',
            lenguaje: 'javascript',
            vistas: 15000,
            nivel: 'Basico'

        },{
            id:2,
            titulo: ' Node Intermedio',
            lenguaje: 'javascript',
            vistas: 18000,
            nivel: 'Intermedio'
        },{
            id:3,
            titulo: ' Node Avanzado',
            lenguaje: 'typescript',
            vistas: 28500,
            nivel: 'Avanzado'
        }

    ],
    'matematicas':[
        {
            id:1,
            titulo: 'Aprende Calculo',
            tema: 'calculo',
            vistas: 28500,
            nivel: 'Basico'
        },
        {
            id:2,
            titulo: 'Aprende Fisica',
            tema: 'fisica',
            vistas: 28500,
            nivel: 'Basico'
        }
    ]
}

module.exports.db =infoCurso;