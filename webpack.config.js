const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin("css/[name].styles.min.css");

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const filename = ext => isDev ? `[name].${ext}`:`[name].[hash].${ext}`

const jsLoaders = () => {
    const loaders =[
        {
            loader: "babel-loader",
            options: babelOptions()
        }
    ]

    if(isDev){
        loaders.push('eslint-loader')
    }
    return loaders
}
const cssLoaders = (extra) => {
    const loaders =[{
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '/public/path/to/',
        }
    },'css-loader']

    if(extra){
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset =>{
    const options = {
        presets: ['@babel/preset-env'],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
        
    }

    if(preset){
        options.presets.push(preset)
    }
    return options
}

module.exports = {
    context:  path.resolve(__dirname,'src'),
    mode: 'development',
    entry:{
        main:  ['@babel/polyfill','./index.jsx'],
    }, 
    output:{
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist_wargaming'),
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    resolve:{
        extensions:['.js', '.jsx', '.scss', '.css', '.png', '.json'],
        alias:{
            '@': path.resolve(__dirname,'')
        }
    },
        plugins: [
            new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
    ],
          optimization: {
        splitChunks:{
            chunks: 'all'
        },
      },
       devServer:{
        port: 3000,
        hot: isDev,
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    },
                },
            },

   {
       test: /\.css$/,
       use: cssLoaders()
   },
   {
       test: /\.m?js$/,
       exclude: /node_modules/,
       use: jsLoaders()
   },
   {
           test: /\.s[ac]ss$/,
           use: cssLoaders('sass-loader') 
        },
        {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
},
        {
           test: /.(ttf|woff|woff2|eot)$/,
           use:['file-loader']
        },

{
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: babelOptions('@babel/preset-typescript')
  }
},
{
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: babelOptions('@babel/preset-react')
  }
},
]
    }
}