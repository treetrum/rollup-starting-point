import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import nodeglobals from 'rollup-plugin-node-globals'

var config = {
    entry: './src/js/app.js',
    format: 'iife',
    dest: './dist/js/app.min.js',
    sourceMap: true,
    plugins: [
        resolve({
            browser: true,
            main: true
        }),
        commonjs({
            include: ['node_modules/**'],
            namedExports: {
                'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
        nodeglobals(),
        json(),
        buble(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('development') }), // Keep replace last, so it can be overwritten in prod.js
    ]
};

export default config;