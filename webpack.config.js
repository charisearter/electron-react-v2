// define entry point for Electron application
const path = require('path');
module.exports = {
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
				include: [path.resolve(__dirname, 'app/src')],
				loader: 'babel-loader',
				resolve: {
					extensions: ['.js', '.jsx', '.json'],
				},
			},
		],
	},
};
