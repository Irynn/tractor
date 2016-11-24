/**
 * Created by imykhailenko on 11/24/16.
 */
var BasePage = rekuire('BasePage');


class DetailsPage extends BasePage {
    constructor(browser){
        super(browser);
        this.genresList = this.browser.$$('a.label.label-info');
    }
    getGenresListNames(){
        this.browser.wait(EC.visibilityOf(this.genresList.get(0)), 2000);
        return this.genresList.getText();

    }
}

module.exports = DetailsPage;