import autoprefixer from 'autoprefixer'
import visualizer from 'rollup-plugin-visualizer'
import resolve from 'rollup-plugin-node-resolve'
import autoPreProcess from 'svelte-preprocess'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import url from 'rollup-plugin-url'

import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('/@sapper/')) || onwarn(warning)

const urlPlugin = url({
  limit: 0,
	include: ["**/*.svg"],
	publicPath: 'client/',
})

const preprocessOptions = {
	transformers: {
		postcss: {
			plugins: [autoprefixer()],
		},
	},
}

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				preprocess: autoPreProcess(preprocessOptions),
				hydratable: true,
				emitCss: true,
			}),
			urlPlugin,
			resolve(),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			}),

			visualizer()
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				preprocess: autoPreProcess(preprocessOptions),
				generate: 'ssr',
				dev
			}),
			urlPlugin,
			json(),
			resolve(),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
}
