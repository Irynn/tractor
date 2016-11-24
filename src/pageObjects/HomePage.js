/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';

var BasePage = rekuire("BasePage");
var SearchPanel = rekuire("SearchPanel");
var MovieCardsGrid = rekuire('MovieCardsGrid');

class HomePage extends BasePage {

    constructor(){

        super();
        this.searchPanel = new SearchPanel();
        this.movieCardsGrid = new MovieCardsGrid();
    }


}

module.exports = HomePage;