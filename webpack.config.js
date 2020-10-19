const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/app.js',
		// util: './src/util.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		hot: true,
		open: false,
		host: '0.0.0.0',
		port: 3000,
	},
	plugins: [
		// clean the /dist folder before each build
		new CleanWebpackPlugin(),
		// Plugin that simplifies creation of HTML files to serve your bundles
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './static/favicon.ico',
		}),
		new CopyPlugin([
			{ from: 'static', to: 'static' },
			{ from: 'robots.txt', to: 'robots.txt' },
		]),
		new VueLoaderPlugin(),
		new CopyPlugin([
			{ from: 'static', to: 'static' },
			{ from: 'manifest.json', to: 'manifest.json' },
		]),
		new ServiceWorkerWebpackPlugin({
			entry: path.join(__dirname, 'src/serviceWorker.js'),
		}),
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
