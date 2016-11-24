/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';

var BasePage = rekuire("BasePage");
var SearchPanel = rekuire("SearchPanel");
var MovieCardsGrid = rekuire('MovieCardsGrid');

class HomePage extends BasePage {

    constructor(browser){

        super(browser);
        this.searchPanel = new SearchPanel(browser);
        this.movieCardsGrid = new MovieCardsGrid(browser);
    }


}

module.exports = HomePage;