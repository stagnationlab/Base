process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// https://github.com/motdotla/dotenv
require('dotenv').config({ silent: true });

const jest = require('jest');

const argv = process.argv.slice(2);

console.log('test', process.env.CI);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
	argv.push('--watch');
}

jest.run(argv);
