/// <reference types="cypress" />
import Search, {SearchFirstname} from '../../support/PageObject/Search/SearchForFirstname'
 require('cypress-xpath')
describe('Testing Table with Cypress', ()=> {
  var testdata;
  var datapath = '/keywordList';
  before(function () {
    cy.fixture(datapath).then(function (keywordJsonFile) {
      testdata = keywordJsonFile.keywords;
    })
  })
  beforeEach(()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/WebTable/')
  })
  it('Verify that user able to filter by Asignee', () => {
    var keyword1 = testdata[0];
    const SearchF = new Search(); 
    SearchFirstname(keyword1.keyword);
  })
})