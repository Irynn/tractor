/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';

var BasePage = rekuire("BasePage");
var SearchPanel = rekuire("SearchPanel");
var MovieCard = rekuire('MovieCard');

class HomePage extends BasePage {

    constructor(browser){

        super(browser);
        this.searchPanel = new SearchPanel(browser);

    }

    get movieCards(){
        let movieCardsArray = [];
        this.browser.$$('movie-card').map((elem, ind) => {
            movieCardsArray.push(new MovieCard(elem));
        });
        return movieCardsArray;
    }

    selectMovieCardByIndex(index){
        this.movieCards.get(index).openDetails();
    }
}

module.exports = HomePage;