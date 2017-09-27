/**
 * Created by hassan.bhuiyan on 11/18/2016.
 */

    describe('Login to oneLogin first', function() {

        it('should successfully log you to onelogin site and take you do the Beringia', function() {

        browser.ignoreSynchronization = true;
        browser.get("https://www.innroad.com/pricing");
        browser.driver.manage().window().maximize();


        //expect(browser.getCurrentUrl()).toBe("https://www.innroad.com/pricing");
        element(by.name("firstname")).sendKeys("qa");
        element(by.name("lastname")).sendKeys("test");

        // drop-down
        element.all(by.css("#country-7dfde2c6-84cf-4e88-a8f6-15e5f5224ec3 option")).then (function (listOfCountries){
                console.log ("Total values of countries are: " + listOfCountries.length)
                expect(listOfCountries.length).toBe(5);
                // for (var i =0; i<listOfCountries.length; i++){
                //     listOfCountries[i].getText().then(function(countryName){
                //         //console.log ("countries name are: " +  countryName);
                //     });
                // }
                expect(listOfCountries[2].getText()).toBe('United States');
                listOfCountries[2].click();
                expect (listOfCountries[2].isSelected());


            });

         });

    });
