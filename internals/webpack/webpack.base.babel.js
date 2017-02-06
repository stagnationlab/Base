import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import packageJson from '../../package.json';

const srcPath = path.resolve(__dirname, '..', '..', 'src');
const includedPaths = [
	srcPath,
	path.resolve(__dirname, '..', '..', 'config'),
];

export default options => ({
	entry: options.entry,

	output: {
		path: path.resolve(process.cwd(), 'build'),
		publicPath: '/',
		...options.output,
	},

	module: {
		rules: [{
			test: /\.js$/,
			include: includedPaths,
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
			},
		}, {
			test: /\.scss/,
			include: includedPaths,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: { sourceMap: true, importLoaders: 1 },
				},
				{
					loader: 'postcss-loader',
					options: {
						plugins: () => ([
							autoprefixer({
								browsers: [
									'>1%',
									'last 4 versions',
									'Firefox ESR',
									'not ie < 11',
								],
							}),
						]),
					},
				},
				{
					loader: 'sass-loader',
					query: { outputStyle: 'expanded' },
				},
			],
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader',
		}, {
			test: /\.(jpg|png|gif)$/,
			// loader: `url-loader?limit=1000000000&name=[path][name].[ext]&context=${__dirname}`,
			loaders: [
				'file-loader',
				{
					loader: 'image-webpack-loader',
					query: {
						progressive: true,
						optipng: {
							optimizationLevel: 4,
						},
						gifsicle: {
							interlaced: false,
						},
						pngquant: {
							quality: '65-90',
							speed: 4,
						},
					},
				},
			],
		}],
	},

	plugins: options.plugins.concat([
		new webpack.ProvidePlugin({
			fetch: 'exports-loader?self.fetch!whatwg-fetch',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				APP_VERSION: JSON.stringify(packageJson.version),
			},
		}),
		new webpack.NamedModulesPlugin(),
	]),
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: [
			'.js',
			'.jsx',
			'.react.js',
		],
		mainFields: [
			'browser',
			'jsnext:main',
			'main',
		],
	},
	devtool: options.devtool,
	target: 'web', // Make web variables accessible to webpack, e.g. window
	performance: options.performance || {},
});