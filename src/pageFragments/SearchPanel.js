/**
 * Created by imykhailenko on 11/23/16.
 */
'use strict';
var BaseFragment = rekuire('BaseFragment');

class  SearchPanel extends BaseFragment{

    constructor(){
        super();

        this.goButton = element(by.buttonText("Go!"));
        this.searchInput = element(by.name("searchStr"));
    }

    searchForMovie(movieName){
        this.searchInput.clear();
        this.searchInput.sendKeys(movieName);
        this.goButton.click();
    }

}

module.exports = SearchPanel;