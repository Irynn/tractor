/**
 * Created by imykhailenko on 11/21/16.
 */
'use strict';

describe('SoundCloud', function() {
    beforeEach(function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');
        browser.sleep(2000);
    });

    it('has Search button available', function() {
        let searchButton = browser.$("button.btn--search-alt");
        expect(searchButton.isPresent()).toBeTruthy("Search button is not present");
        searchButton.click();
        expect(browser.$("div.search-bar--open").isPresent()).toBeTruthy("Search field is not shown");
    });

    it("can click the name of group and get list of songs", function () {
        let groups = element.all(by.className("track-card__username"));
        groups.first().click();

        expect(browser.$("h1.user-card__title").getText()).toEqual(groups.first().getText());

    })
});