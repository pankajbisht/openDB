import path from 'path';

export default {
  entry: './src/index.js', // Your main entry point
  output: {
    path: path.resolve('dist'),
    clean: true, // Clean the output directory before every build
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.mjs'], // Ensure proper extensions are resolved
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
