/**
 * Created by imykhailenko on 11/23/16.
 */
'use strict';

var BaseFragment = rekuire('BaseFragment');

class Header extends BaseFragment {
    constructor(browser){
        super(browser);
        this.homeLink = this.browser.$(".navbar-brand");
        this.upcomingMovies = this.browser.element(by.linkText("Upcoming Movies"));
        this.popularSeries = this.browser.element(by.linkText("Popular Series"));

    }
    goToHomePage(){
        this.homeLink.click();
    }

    goToUpcomingMoviesTab(){
        this.upcomingMovies.click();
    }

    goToPopularSeriesTab(){
        this.popularSeries.click();
    }
}

module.exports = Header;