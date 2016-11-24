/**
 * Created by imykhailenko on 11/24/16.
 */
'use strict';

var BaseFragment = rekuire('BaseFragment');

class GenresPanel extends BaseFragment {

    constructor(browser){
        super(browser);
        this.genresList = this.browser.$$('.list-group-item');
    }

    selectGenreByName(genreName) {

    }

    selectGenreByIndex(index){
        this.genresList.get(index).click();
    }

    getGenreNameByIndex(index){
        return this.genresList.get(index).getText();
    }
}

module.exports = GenresPanel;