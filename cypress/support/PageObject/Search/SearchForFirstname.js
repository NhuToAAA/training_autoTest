require('cypress-xpath')
class Search {
    getSearchInput() {
        return cy.xpath('//input[@st-search="firstName"]');
    }
    
}
export default Search;
export function SearchFirstname(keyword) {
    const searchF = new Search();
    searchF.getSearchInput().clear().type(keyword)
}