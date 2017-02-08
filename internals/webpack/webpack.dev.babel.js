import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import internals from '../internals';
import webpackBase from './webpack.base.babel';

export default (webpackBase)({
	cache: true,
	devtool: internals.devtool,

	entry: [
		'react-hot-loader/patch',
		`webpack-dev-server/client?http://localhost:${internals.port}`,
		'webpack/hot/only-dev-server',
		internals.paths.indexJs,
	],

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: internals.paths.indexHtml,
			favicon: path.resolve(internals.paths.public, 'favicon.ico'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CaseSensitivePathsPlugin(),
		new WatchMissingNodeModulesPlugin(internals.paths.nodeModules),
	],
});
