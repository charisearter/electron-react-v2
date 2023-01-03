const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	// entry point for electron
	entry: './src/renderer/index.jsx',
	output: {
		path: path.resolve(__dirname, 'src/dist'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			// loads .js/jsx/json files
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'src/renderer')],
				loader: 'babel-loader',
				resolve: {
					extensions: ['.js', '.jsx', '.json'],
				},
			},
			{
				// loads .html files
				test: /\.(html)$/,
				include: [path.resolve(__dirname, 'src/renderer')],
				use: {
					loader: 'html-loader',
				},
			},
			{
				// loads .css files
				test: /\.css$/,
				include: [path.resolve(__dirname, 'src/renderer')],
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/renderer/index.html'),
			filename: 'index.html',
		}),
	],
};
