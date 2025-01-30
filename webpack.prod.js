import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import fs from 'fs';

// Read package.json to get the library name
const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'));
const libraryName = pkg.name;

export default merge(common, {
  mode: 'production',
  output: {
    filename: `${libraryName}.min.js`, // Non-minified version for development
    library: 'db', // The global variable name for your library
    libraryTarget: 'umd',
    // globalObject: 'this',
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  optimization: {
    minimize: true, // Disable minification in development mode
  },
});
