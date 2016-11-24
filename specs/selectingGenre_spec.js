/**
 * Created by imykhailenko on 11/24/16.
 */

'use strict';
var openHomePage = rekuire('BasePage').openHomePage;
var HomePage = rekuire('HomePage');
var GenrePage = rekuire('GenrePage');
var DetailsPage = rekuire('DetailsPage');

describe('User is able to select genre:', function() {
    let homePage;
    beforeEach(function () {
        openHomePage();
        homePage = new HomePage(browser);
    });

    it('Genres page name matches the selected genre', function () {
        let genreName = homePage.genresList.getGenreNameByIndex(2);
        homePage.genresList.selectGenreByIndex(2);
        let genrePage = new GenrePage(browser);
        expect(genrePage.pageName).toContain(genreName, "Selected genre should be opened");
    });

    it('first movie details contain the selected genre', function () {
        let genreName = homePage.genresList.getGenreNameByIndex(5);
        homePage.genresList.selectGenreByIndex(5);
        let genrePage = new GenrePage(browser);
        expect(genrePage.pageName).toContain(genreName, "Selected genre should be opened");
        genrePage.movieCardsGrid.openMovieCardByIndex(0);
        let detailsPage = new DetailsPage(browser);
        expect(detailsPage.getGenresListNames()).toContain(genreName,
            "Genres of movie should contain the genre selected before");
    })
});