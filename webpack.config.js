const path = require('path'); //identificará en qué dirección está nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //importamos el plugin html que instalamos
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//añadiremos cada configuración necesaria para el proyecto
module.exports = {
    entry:'./src/index.js', // donde está el punto de entrada de la app
    output:{
        path: path.resolve(__dirname,'dist'), //aquí se crea una carpeta distribution para el código final
        filename: 'bundle.js' //nombre de bundle o de empaquetado
    },
    resolve:{
        extensions:['.js','.jsx'] //reconoce las extensiones de nuestro proyecto
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, //se entenderán todos los archivos que sean js o jsx 
                exclude: /node_modules/, //no quiero que lea en el proyecto
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test: /\.html$/, //lee todos los archivos html
                use:[
                    {loader:'html-loader'}
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                            },
                    },
                    ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }), //instancia del plugin
        new MiniCssExtractPlugin({
            filename:'[name].css',
        }),
    ],
    devServer:{
        static: path.join(__dirname,'dist'),
        port:3000,
    }
}