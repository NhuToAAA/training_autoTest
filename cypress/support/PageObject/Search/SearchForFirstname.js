require('cypress-xpath')

class searchPage {
    // get search first name input on search page 
    getSearchInput() {
        return cy.xpath('//input[@st-search="firstName"]');
    }
    
}
export default searchPage;

/**
 * 
 * @param {string} keyword 
 */
export function SearchFirstname(keyword) {
    const searchF = new searchPage();
    // input keyword for search first name
    searchF.getSearchInput()
        .clear()
        .type(keyword)
}