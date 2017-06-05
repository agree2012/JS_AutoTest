'use strict';

var AngularPage = require('./pageObject/angular_page.js');
global.angularPage = new AngularPage();
var pageObject;


describe('angularJs homepage ', function () {
    describe('Greetings section', function () {
        it('should greet the user', function () {
            //pageObject = angularPage.getAngularOPage();
            //pageObject.typeName('Bob');
            //expect(pageObject.greeting).toEqual('Hello Bob!')
         });
    });
});
