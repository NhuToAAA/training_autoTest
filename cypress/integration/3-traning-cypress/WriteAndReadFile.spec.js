/// <reference types="cypress" />
import Login, {LoginInternal, WriteFile} from '../../support/PageObject/Login/Login'

require('cypress-xpath')
describe('Check whether the writing to file and verify the json data', ()=> {
  var testdata;
  var testdataOption;
  var datapathAccount = '/account';
  var datapathOption = '/option';
  before(function () {
    cy.fixture(datapathAccount).then(function (accoutJsonFile) {
      testdata = accoutJsonFile;
    })
    cy.fixture(datapathOption).then(function (optionJsonFile) {
      testdataOption = optionJsonFile;
    })
  })
  beforeEach(()=>{
    var account = testdata[0];
    cy.visit('https://www.saucedemo.com/ ');
    LoginInternal(account.username, account.password);
    
  })
  it('Write file', () => {
    WriteFile();
  })
  it('Read file', () => {
    var login = new Login();
    var option = testdataOption[2];
    login.getSelect().select(option.option);
 })
})

