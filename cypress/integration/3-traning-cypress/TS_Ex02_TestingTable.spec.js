/// <reference types="cypress" />
import Search, {SearchFirstname} from '../../support/PageObject/Search/SearchForFirstname'
require('cypress-xpath')


describe('Testing Table with Cypress', ()=> {
  var testData;
  var dataPath = '/keywordList';

  before(function () {
    cy.fixture(dataPath).then(function (keywordJsonFile) {
      testData = keywordJsonFile.keywords;
    })
  })

  beforeEach(()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/WebTable/')
  })

  it('TC_001_VerifyThatUser', () => {
    var keywordList = testData[0];
    SearchFirstname(keywordList.keyword);
    // cy.xpath('//table[@class="table table-striped"]//tbody').each($td => {
    //   cy.xpath('//td[1]').contains('Pol').should('be.visible');
    // })
  })
})