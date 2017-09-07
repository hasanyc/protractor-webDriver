/**
 * Created by hassan.bhuiyan on 11/18/2016.
 */

var testConfig = require('./config.json');

describe('Login to oneLogin first', function() {
    it('should successfully log you to onelogin site and take you do the Beringia', function() {

       // oneLogin app not designed with angular.js so we have by pass it
        browser.ignoreSynchronization = true;
        // maximize the browser
        browser.driver.manage().window().maximize();
        // navigate to the site
        browser.get(testConfig.baseURL);
        // verify if we are in the correct page
        expect(browser.getCurrentUrl()).toBe(testConfig.baseURL);
        // Enter the email id to login to oneLogin app
        element(by.id(testConfig.locators[0].oneLoginLocators[0].userName)).sendKeys(testConfig.values[0].oneLoginValues[0].userName);
        // enter the password to login to oneLogin app
        element(by.id(testConfig.locators[0].oneLoginLocators[0].passWord)).sendKeys(testConfig.values[0].oneLoginValues[0].passWord);
        // click the Login button to login to oneLogin app
        element(by.id(testConfig.locators[0].oneLoginLocators[0].loginButton)).click();
        // wait few sec so that all webElement loads up
        browser.manage().timeouts().implicitlyWait(15000);
        // Click on innSupport (Development)
        element(by.xpath(testConfig.locators[0].oneLoginLocators[0].innSupportAppLink)).click();

        // Switch to the new tab Window
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);

            // click on Beringia image to go innSupport APP

        element(by.xpath(testConfig.locators[0].toolsLocator[0].beringiaLink)).click();

        browser.pause();

    });
})}
);
