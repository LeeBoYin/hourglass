const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/app.js',
		util: './src/util.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// know exactly which source file the error came from
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new VueLoaderPlugin(),
		// clean the /dist folder before each build
		// new CleanWebpackPlugin(),
		// Plugin that simplifies creation of HTML files to serve your bundles
		// https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
		// new HtmlWebpackPlugin({
		// 	title: 'Hourglass'
		// })
	],
	module: {
		rules: [
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// In order to import a CSS file from within a JavaScript module
			// https://webpack.js.org/guides/asset-management#loading-css
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'style-loader',
					'css-loader'
				]
			},
			// babel
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};