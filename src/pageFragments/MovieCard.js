/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';


var BaseFragment = rekuire('BaseFragment');

class MovieCard extends BaseFragment{

    constructor(element){
        super(element.browser_);
        this.baseElement = element;
        this.titleLink = this.baseElement.$('a[title]');
        this.releaseDate = this.baseElement.$('strong');
        this.viewDetailsLink = this.baseElement.element(by.partialLinkText("View details"));
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
}

module.exports = MovieCard;