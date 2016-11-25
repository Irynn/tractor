/**
 * Created by imykhailenko on 11/23/16.
 */
'use strict';

var Header = rekuire('Header');
var GenresPanel = rekuire('GenresPanel');

class BasePage{

    constructor(){

        this.titleSelector = $$('h3.orange-text');
        this.header = new Header();
        this.genresList = new GenresPanel();
    }

    static openHomePage(){
        browser.get(browser.baseUrl);

    }

    get pageName(){
        browser.wait(EC.visibilityOf(this.titleSelector.first()));
        return this.titleSelector.first().getText();
    }
}

module.exports = BasePage;