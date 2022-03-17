/// <reference types="cypress" />
import SearchIframePage, {searchI} from '../../support/PageObject/searchIframe/SearchIframe'
require('cypress-xpath')

describe('Testing Table with Cypress', ()=> {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      
  beforeEach(()=>{
    cy.viewport(1500, 800)
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrameTest ')
  })

  it('TC_001_VerifyShouldContain', () => {
    var searchIP = new SearchIframePage();
    searchIP.getIframeTag().click();
    searchI('Selenium');
    searchIP.getIframe().within(() => {
      searchIP.getArticle().click();
      cy.get('.content_bgr').invoke('text').then((a) => {
         console.log("linh",a)
         expect(a).to.have.string('Selenium');
      } );
    })
  })
})