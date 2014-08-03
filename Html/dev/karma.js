module.exports = {
  basePath: './www/',
  frameworks: ['jasmine'],
  browsers: ['Chrome'],
  singleRun: true,
  files: [
    'lib/ionic/js/ionic.bundle.js',
    'lib/firebase/firebase.js',
    'lib/firebase/angularfire.min.js',
    'lib/firebase/firebase-simple-login.js',
    'js/app.js',
    'auth/*.js',
    'auth/user/*.js',
    'auth/signup/*.js',
    'auth/login/*.js',
    'auth/reset-password/*.js',
    'auth/change-password/*.js',
    'js/services/*.js'
    'js/controllers/*.js',
    'js/filters/*.js',
  ]
};
