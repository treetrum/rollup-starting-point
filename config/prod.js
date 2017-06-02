// Rollup plugins.
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

// Import the development configuration.
import config from './dev.js';

// Inject the production settings.
config.plugins[config.plugins.length-1] = replace({ 'process.env.NODE_ENV': JSON.stringify('production') });
config.plugins.push(uglify());
config.sourceMap = false;

export default config;