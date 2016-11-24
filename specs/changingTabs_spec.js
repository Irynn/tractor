/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';
var openHomePage = rekuire('BasePage').openHomePage;
var HomePage = rekuire('HomePage');
var UpcomingMoviesPage = rekuire('UpcomingMoviesPage');

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
    })
});