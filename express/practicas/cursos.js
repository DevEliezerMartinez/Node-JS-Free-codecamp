/* let infoCurso = {
    'programacion':[
        {
            id:1,
            titulo: 'Aprende Node',
            lenguaje: 'javascript',
            vistas: 15000,
            nivel: 'Basico'

        },{
            id:2,
            titulo: 'Node Intermedio',
            lenguaje: 'javascript',
            vistas: 18000,
            nivel: 'Intermedio'
        },{
            id:3,
            titulo: 'Node Avanzado',
            lenguaje: 'Typescript',
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
} */


let infoCurso= {
    'cursos':{
        'categorias':{
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
        ],
        'programacion':[
            {
                id:1,
                titulo: 'Aprende Node',
                lenguaje: 'javascript',
                vistas: 15000,
                nivel: 'Basico'
    
            },{
                id:2,
                titulo: 'Node Intermedio',
                lenguaje: 'javascript',
                vistas: 18000,
                nivel: 'Intermedio'
            },{
                id:3,
                titulo: 'Node Avanzado',
                lenguaje: 'Typescript',
                vistas: 28500,
                nivel: 'Avanzado'
            }
    
        ]
        }
    },
    'tutores':{
        'nombres':[
            'carlo','ana','susana'
        ],
        

    }
}

module.exports.db = infoCurso;