// write karma config here
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js'
    ],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--remote-debugging-port=9222']
      }
    },
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: true
  });
};