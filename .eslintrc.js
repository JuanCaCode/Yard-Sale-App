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
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'next',
        'next/core-web-vitals',
    ],
    rules:{
        'semi':['error','always'],
    }
}