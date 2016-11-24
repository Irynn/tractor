/**
 * Created by imykhailenko on 11/24/16.
 */

var BasePage = rekuire('BasePage');
var MovieCardsGrid = rekuire('MovieCardsGrid');

class GenrePage extends BasePage {
    constructor(browser){
        super(browser);
        this.movieCardsGrid = new MovieCardsGrid(browser);
    }
}

module.exports = GenrePage;