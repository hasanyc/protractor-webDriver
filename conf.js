
var testConfig = require('./config.json');

exports.config = {
    selenium: testConfig.seleniumAddress,
    specs: ['oneLogin.js'],
    capabilities: {
              'browserName': testConfig.browser[0].ch
    }



};
