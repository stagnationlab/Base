/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

import rimRaf from 'rimraf';
import path from 'path';
import webpack from 'webpack';
import config from '../config/webpack.config.prod.babel';

const buildPath = path.resolve('../build');


rimRaf.sync(buildPath);

webpack(config).run((err) => {
	if (err) {
		console.error('Failed to create a production build. Reason:');
		console.error(err.message || err);
		process.exit(1);
	}

	console.log('Successfully generated a bundle in the build folder!');

	console.log('The bundle is optimized and ready to be deployed to production.');
});
