/**
 * Created by imykhailenko on 11/23/16.
 */
'use strict';

var Header = rekuire('Header');
var GenresPanel = rekuire('GenresPanel');

class BasePage{


    constructor(browser){
        this.browser = browser;
        this.titleSelector = 'h3.orange-text';
        this.header = new Header(browser);
        this.genresList = new GenresPanel(browser);
    }

    static openHomePage(){
        browser.get(browser.baseUrl);

    }

    get pageName(){
        browser.wait(EC.visibilityOf(browser.$(this.titleSelector)));
        return this.browser.$$(this.titleSelector).first().getText();
    }
}

module.exports = BasePage;