/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';


var BaseFragment = rekuire('BaseFragment');

class MovieCard extends BaseFragment{

    constructor(element){
        super();
        
        this.baseElement = element;
        this.titleLink = this.baseElement.$('a[title]');
        this.releaseDate = this.baseElement.$('strong');
        this.viewDetailsLink = this.baseElement.element(by.partialLinkText("View details"));
        this.rating = this.baseElement.$('small.label');
    }

    openDetails(){
        this.viewDetailsLink.click();
    }

    getTitle(){
        return this.titleLink.getText();
    }

    getReleaseDate(){
        return this.releaseDate.getText();
    }

    getRating(){
        return this.rating.getText().then(ratingString => parseFloat(ratingString));
    }
}

class MovieCardsGrid extends BaseFragment{

    constructor(){
        super();
        this.movieCards = $$('movie-card');
    }
    getMovieCardByIndex(index){
        return new MovieCard(this.movieCards.get(index));
    }

    openMovieCardByIndex(index){
        this.getMovieCardByIndex(index).openDetails();
    }
}

module.exports = MovieCardsGrid;