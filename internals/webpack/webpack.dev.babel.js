import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import internals from '../internals';
import webpackBase from './webpack.base.babel';

export default (webpackBase)({
	cache: true,
	devtool: internals.devtool,

	output: {
		pathinfo: true,
	},

	entry: [
		require.resolve('react-hot-loader/patch'),
		// require.resolve('webpack-dev-server/client') + '?/',
		// require.resolve('webpack/hot/dev-server'),
		require.resolve('react-dev-utils/webpackHotDevClient'),
		internals.paths.indexJs,
	],

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: internals.paths.indexHtml,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CaseSensitivePathsPlugin(),
		new WatchMissingNodeModulesPlugin(internals.paths.nodeModules),
	],
});
