/**
 * Created by imykhailenko on 11/24/16.
 */

var BasePage = rekuire('BasePage');
var MovieCardsGrid = rekuire('MovieCardsGrid');

class GenrePage extends BasePage {
    constructor(){
        super();
        this.movieCardsGrid = new MovieCardsGrid();
    }
}

module.exports = GenrePage;