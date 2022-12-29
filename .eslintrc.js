//Este documento fue creado, en clase se modificó el nombre.json y se le colocó .js para crear el modulo
module.exports = {
    root : true,
    env:{
        browser : true,
        amd:true,
        node: true,
        es6:true
    },
    extends:[
        'eslint:recommended',
        'plugin:prettier/recommended',
        'next',
        'next/core-web-vitals',
    ],
    rules:{
        'prettier/prettier' : 0, //para ignorar los errores de npm run lint
    }
}