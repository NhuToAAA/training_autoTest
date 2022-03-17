require('cypress-xpath')

class SearchIframePage {
    // get iframe tag on home page
    getIframeTag() {
        return cy.xpath('//li[@id="iFrame"]');
    }
    // get content insite iframe
    getIframe() {
        return cy.xpath('//iframe[@class=" lazyloaded"]').its('0.contentDocument.body');
    }
    // get search textbox in iframe tag
    getSearchTextbox() {
        return cy.xpath('//input[@id="s"]');
    }
    // get submit icon in iframe tag
    getSummitButton() {
        return cy.xpath('//button[@class="button_search"]');
    }
    // get Article in iframe tag
    getArticle () {
        return cy.xpath('//li[1]/div[@class="post_item"]/h3/a');
    }
}
export default SearchIframePage;

/**
 * function search in iframe with keywords
 * @param {string} keyword 
 */
export function searchI(keyword) {
    const searchI = new SearchIframePage();
    searchI.getIframe().within(() => {
        // input keyword search textbox in iframe 
        searchI.getSearchTextbox()
        .type(keyword);
        // click icon search
        searchI.getSummitButton()
        .click().wait(5000)
        // cy.get('.content_bgr').should('contain.text', 'Selenium');
        // cy.xpath('//li[1]/div[@class="post_item"]/h3/a').then(($el) => {
        //     const text = $el.text(); 
        //     console.log("linh",text)
        //     // var dateTest = text.slice(19,29) + text.slice(47,53)
        //     // // Do the assertion here
        //     //  expect(dateTest).to.eq(dateGetFromFile);
        //   });
    })
}