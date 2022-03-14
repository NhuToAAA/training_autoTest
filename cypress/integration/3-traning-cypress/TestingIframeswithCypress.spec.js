/// <reference types="cypress" />
import SearchIframe, {SearchI} from '../../support/PageObject/searchIframe/SearchIframe'

require('cypress-xpath')
describe('Testing Table with Cypress', ()=> {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
  beforeEach(()=>{
    cy.viewport(1500, 800)
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrameTest ')
  })
  it('Verify should contain searching keyword in article', () => {
    var searchI = new SearchIframe();
    searchI.getIframeTag().click();
    SearchI('Selenium');
    searchI.getIframe().within(() => {
        cy.xpath('//div[@class="twelve columns"]/ol/li[1]/div[@class="post_item"]/h3/a').click();
    })
  })
})