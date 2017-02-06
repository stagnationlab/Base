export default {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader',
				],
			},
		],
	},
};