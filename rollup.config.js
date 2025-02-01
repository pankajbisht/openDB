import { monolithConf } from './rollup.common.js';

export default [
  {
    input: 'src/index.js',
    treeshake: false,
    output: monolithConf({
      file: 'dist/opendb.esm.js',
      format: 'esm',
    }),
  },
]
