require('cypress-xpath')

class SearchPage {
    // get search first name input on search page 
    getSearchInput() {
        return cy.xpath('//input[@st-search="firstName"]');
    }
    
}
export default SearchPage;

/**
 * function search first name with keywords
 * @param {string} keyword 
 */
export function searchFirstname(keyword) {
    const searchF = new SearchPage();
    // input keyword for search first name
    searchF.getSearchInput()
        .clear()
        .type(keyword)
        .then(() => {
            cy.wait(2000)
            cy.xpath('//table[@class="table table-striped"]//tbody//tr').each((element) => {
                cy.wrap(element).xpath('./td[1]').first().should('contains.text', 'Pol');
            })
    })
}