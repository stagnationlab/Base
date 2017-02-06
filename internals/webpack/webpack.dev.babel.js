import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import config from '../../config/developer';
import packageJson from '../../package.json';
import webpackBase from './webpack.base.babel';

const srcPath = path.resolve(__dirname, '..', '..', 'src');
const buildPath = path.resolve(__dirname, '..', '..', 'build');

export default (webpackBase)({
	cache: true,
	devtool: config.devtool || 'cheap-module-source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		srcPath,
	],

	output: {
		path: buildPath,
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/',
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(srcPath, 'index.template.html'),
			favicon: path.join(srcPath, 'gfx/favicon.ico'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CaseSensitivePathsPlugin(),
	],
});
