import fs from 'fs';
import path from 'path';

const files = [
	'developer',
];

files.forEach((file) => {
	const sourceFile = path.resolve(__dirname, `../templates/_${file}.js`);
	const targetFile = path.resolve(__dirname, `../../config/${file}.js`);

	if (!fs.existsSync(targetFile)) {
		const data = fs.readFileSync(sourceFile, 'utf8');

		fs.writeFileSync(targetFile, data);
		console.log('created new file', targetFile); // eslint-disable-line no-console
	}
});
