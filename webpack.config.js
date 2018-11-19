const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html'
	// ,filename: './index.html'
});

module.exports = {
	entry:'./src/index.js', //relevant to where the webpack config file is stored
	output: {
		filename:'[hash].bundle.js',	//what to name the file
		path: path.resolve(__dirname,'dist'), //where to store the file
		// publicPath:'/dist'
	},
	module: {
		rules: [
			//first rule
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {loader: 'babel-loader'}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']//style-loader allows us to put the css in the html, css-loader allows us to import css in js files/classes, 
			}
		]
	},
	plugins: [
		htmlPlugin,
		new webpack.HotModuleReplacementPlugin()
	],
	//everything here is for development
	mode:'development',
	devtool:'inline-source-map',
	devServer: {
		host: 'localhost',
		port: 3000,
		// contentBase: './dist',
		historyApiFallback: true,
		// open: true, opens a webbrowser on build
		hot:true
	}
};