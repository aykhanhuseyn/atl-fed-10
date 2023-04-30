const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '..', './src', 'index.tsx'),
	devServer: {
		static: {
			directory: path.join(__dirname, '..', 'public'),
		},
		compress: true,
		port: 9000,
		hot: true,
	},
	output: {
		path: path.resolve(__dirname, '..', 'build'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/inline',
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '..', 'src', 'index.html'),
		}),
	],
};
