/**
 * Created by imykhailenko on 11/24/16.
 */
var BasePage = rekuire('BasePage');


class DetailsPage extends BasePage {
    constructor(){
        super();
        this.genresList = $$('a.label.label-info');
    }
    getGenresListNames(){
        browser.wait(EC.visibilityOf(this.genresList.get(0)), 2000);
        return this.genresList.getText();

    }
}

module.exports = DetailsPage;