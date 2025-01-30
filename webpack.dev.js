import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import fs from 'fs';
import { type } from 'os';

// Read package.json to get the library name
const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'));
const libraryName = pkg.name;

export default merge(common, {
  mode: 'development',
  output: {
        filename: `${libraryName}.js`, // Generates opendb.js and opendb.min.js
        // library: 'output.db[.name]', // Global variable when used in <script>
        libraryTarget: 'module', // Universal module format
        // libraryExport: 'default', // Exports "db" as default
        // globalObject: 'this', // Ensures compatibility in Node.js
        // iife: true,
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  optimization: {
    minimize: false, // Disable minification in development mode
  },
  experiments: {
    outputModule: true,
  }
});
