const path = require('path');

module.exports = {
	// entry point for electron
	entry: './src/renderer/index.jsx',
	output: {
		path: path.resolve(__dirname, 'ssrc/dist'),
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
		],
	},
};
