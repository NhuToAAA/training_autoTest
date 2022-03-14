require('cypress-xpath')
class SearchIframe {
    getIframeTag() {
        return cy.xpath('//li[@id="iFrame"]');
    }
    getIframe() {
        return cy.xpath('//iframe[@class=" lazyloaded"]').its('0.contentDocument.body');
    }
    getSearchTextbox() {
        return cy.xpath('//input[@id="s"]');
    }
    getSummitButton() {
        return cy.xpath('//button[@class="button_search"]');
    }
}
export default SearchIframe;
export function SearchI(keyword) {
    const searchI = new SearchIframe();
    searchI.getIframe().within(() => {
        searchI.getSearchTextbox().type(keyword);
        searchI.getSummitButton().click();
        cy.wait(5000);
    })
}