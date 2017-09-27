
exports.config = {

    directConnect: true,
    specs: ['oneLogin.js'],
    capabilities: {
              browserName: 'chrome'
    },
    framework: 'jasmine2',
    jasminNodeOpts:{
        defaultTimeoutInterval: 30000
    }



};
