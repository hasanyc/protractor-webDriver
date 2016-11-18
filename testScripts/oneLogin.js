/**
 * Created by hassan.bhuiyan on 11/18/2016.
 */
describe('logIn to oneLogin first', function() {
    it('should log you to oneLogin App', function() {
        browser.get('https://innroad.onelogin.com/login');

        element(by.xpath('//input[@id="user_email"]')).sendKeys('hassan.bhuiyan@innroad.com');
        element(by.xpath('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor testScripts');

        // You wrote your first testScripts, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});