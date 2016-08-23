import fs from 'fs';
import path from 'path';

function fileExists(filePath) {
	try {
		return fs.statSync(filePath).isFile();
	} catch (e) {
		return false;
	}
}

const files = [
	'developer',
];

for (const file of files) {
	const sourceFile = path.resolve(__dirname, `../config/_${file}.js`);
	const targetFile = path.resolve(__dirname, `../config/${file}.js`);

	if (!fileExists(targetFile)) {
		const data = fs.readFileSync(sourceFile, 'utf8');

		fs.writeFileSync(targetFile, data);
	}
}
