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
    //     .then(() => {
    //         cy.xpath('//table[@class="table table-striped"]//tbody//tr').each((element) => {
    //             console.log(element.text())
    //             cy.xpath('//td[1]').contains('Pol').should('be.visible');
    //         })
    // })
    cy.xpath('//table[@class="table table-striped"]//tbody').each((element) => {
        cy.xpath("//tr//td")
        .then(() =>{
            console.log(element)
        })
    })
}