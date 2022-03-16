/// <reference types="cypress" />
import Search, {searchFirstname} from '../../support/PageObject/Search/SearchForFirstname'
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
    searchFirstname(keywordList.keyword) 
  })
})