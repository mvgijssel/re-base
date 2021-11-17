var externals = {
  app: {
    'firebase/compat/app': {
      root: 'firebase/compat/app',
      commonjs2: 'firebase/compat/app',
      commonjs: 'firebase/compat/app',
      amd: 'firebase/compat/app'
    }
  },
  database: {
    'firebase/compat/database': {
      root: 'firebase/compat/database',
      commonjs2: 'firebase/compat/database',
      commonjs: 'firebase/compat/database',
      amd: 'firebase/compat/database'
    }
  },
  firebase: {
    firebase: {
      root: 'firebase',
      commonjs2: 'firebase',
      commonjs: 'firebase',
      amd: 'firebase'
    }
  },
  firestore: {
    'firebase/compat/firestore': {
      root: 'firebase/compat/firestore',
      commonjs2: 'firebase/compat/firestore',
      commonjs: 'firebase/compat/firestore',
      amd: 'firebase/compat/firestore'
    }
  }
};

var loaders = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015']
    }
  }
];

module.exports = [
  {
    entry: ['./src/rebase.js'],
    output: {
      filename: 'dist/bundle.js',
      libraryTarget: 'umd'
    },
    externals: [externals.app, externals.database, externals.firebase],
    module: {
      loaders: loaders
    }
  }
];
