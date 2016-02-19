module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'sinon-chai',
      'sinon',
      'chai',
      'mocha'
    ],
    files: [
      '*.js'
    ],
    exclude: [],
    preprocessors: {
      '*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-umd']
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
};
