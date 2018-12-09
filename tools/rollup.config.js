'use strict';

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
//const eslint = require('rollup-plugin-eslint');

const pkg = require('../package.json');
const is_production = (process.env.NODE_ENV === 'production');


const plugins = [
	resolve(
		{
			jsnext: true,
			main: true
		}
	),
	commonjs(
		{
			include: 'node_modules/**'
		}
	),
	//eslint(),
	babel(
		Object.assign(
			pkg.babel,
			{
				babelrc: false,
				exclude: 'node_modules/**',
				externalHelpers: false,
				runtimeHelpers: true,
				presets: pkg.babel.presets.map(x => (x === 'latest' ? ['latest', {es2015: {modules: false}}] : x)),
			}
		)
	)
];

if (is_production) plugins.push(uglify());

module.exports = {
	input: 'src/index.js',
	external: Object.keys(pkg.dependencies),
	output: {
		file: 'dist/index.umd.js',
		name: pkg['name:umd'],
		format: 'umd'
	},
	//sourcemap: 'dist/index.js.map',
	sourcemap: true,
	plugins,
};