/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';
var openHomePage = rekuire('BasePage').openHomePage;
var HomePage = rekuire('HomePage');
var UpcomingMoviesPage = rekuire('UpcomingMoviesPage');
var PopularSeriesPage = rekuire('PopularSeriesPage');

describe('User is able to switch tab', function() {
    let homePage;
    beforeEach(function () {
        openHomePage();
        homePage = new HomePage(browser);
    });

    it('to Upcoming Movies', function () {
        expect(homePage.pageName).toEqual("Top Rated Movies");
        homePage.header.goToUpcomingMoviesTab();
        let upcomingMoviesPage = new UpcomingMoviesPage(browser);
        expect(upcomingMoviesPage.pageName).toEqual("Up Coming Movies");
    });

    it('to Popular series and back to Home page', function () {
        homePage.header.goToPopularSeriesTab();
        let popularSeriesPage = new PopularSeriesPage(browser);
        expect(popularSeriesPage.pageName).toEqual("Popular Series");
        popularSeriesPage.header.goToHomePage();
        homePage = new HomePage(browser);
        expect(homePage.pageName).toEqual("Top Rated Movies");
    })
});