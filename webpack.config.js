const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;
const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	entry:'./src/index.js',
	output:{path:__dirname+'/dist', filename:'bundle.[hash].js'},
	devtool:'inline-source-map',
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
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		htmlPlugin,
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		hot:true
	}
};