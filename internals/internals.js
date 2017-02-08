import path from 'path';
import fs from 'fs';
import { internals } from '../config/developer';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
	paths: {
		root: appDirectory,
		src: resolveApp('src'),
		public: resolveApp('public'),
		build: resolveApp('build'),
		nodeModules: resolveApp('node_modules'),
		indexJs: resolveApp('src/index.js'),
		indexHtml: resolveApp('public/index.html'),
		packageJson: resolveApp('package.json'),
	},
	devTool: 'cheap-module-source-map',
	...internals,
};