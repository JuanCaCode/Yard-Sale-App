const path = require('path'); //identificará en qué dirección está nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //importamos el plugin html que instalamos
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//añadiremos cada configuración necesaria para el proyecto
module.exports = {
    entry:'./src/index.js', // donde está el punto de entrada de la app
    output:{
        path: path.resolve(__dirname,'dist'), //aquí se crea una carpeta distribution para el código final
        filename: 'bundle.js', //nombre de bundle o de empaquetado
        publicPath:'/'
    },
    resolve:{
        extensions:['.js','.jsx'], //reconoce las extensiones de nuestro proyecto
        alias:{
            '@components':path.resolve(__dirname,'src/components/'),
            '@containers':path.resolve(__dirname,'src/containers/'),
            '@pages':path.resolve(__dirname,'src/pages/'),
            '@routes':path.resolve(__dirname,'src/routes/'),
            '@styles':path.resolve(__dirname,'src/styles/'),
            '@icons':path.resolve(__dirname,'src/assets/icons/'),
            '@logos':path.resolve(__dirname,'src/assets/logos/'),
            '@images':path.resolve(__dirname,'src/assets/images/'),
            '@vars':path.resolve(__dirname,'src/styles/_vars.scss/'),
            '@hooks':path.resolve(__dirname,'src/hooks/'),
        }
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
                // type:'asset',
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
        historyApiFallback:true, //trabajar con la aplicación sin problemas
    }
}