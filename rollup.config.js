import { monolithConf } from './rollup.common.js';

export default [
  {
    input: 'src/index.js',
    treeshake: false,
    output: monolithConf({
      file: 'dist/opendb-esm.js',
      format: 'esm',
    }),
  },
  {
    input: 'src/index.js',
    treeshake: false,
    output: monolithConf({
      file: 'dist/opendb-umd.js',
      format: 'umd',
      name: 'db',
      amd: {
        id: 'db',
      },
      noConflict: true,
    }),
  },
];
