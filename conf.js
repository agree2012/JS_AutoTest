var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    specs: ['tests/*.js'],
    multiCapabilities: [
        {'browserName': 'phantomjs'}
    ],
	onPrepare: function() {   
	jasmine.getEnv().addReporter(        new Jasmine2HtmlReporter({          savePath: 'target/screenshots'      }));  
	}
}
