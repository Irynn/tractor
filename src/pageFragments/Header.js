/**
 * Created by imykhailenko on 11/23/16.
 */
'use strict';

var BaseFragment = rekuire('BaseFragment');

class Header extends BaseFragment {
    constructor(){
        super();
        this.homeLink = $(".navbar-brand");
        this.upcomingMovies = element(by.linkText("Upcoming Movies"));
        this.popularSeries = element(by.linkText("Popular Series"));

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