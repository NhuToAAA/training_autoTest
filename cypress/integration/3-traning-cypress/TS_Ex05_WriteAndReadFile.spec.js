/// <reference types="cypress" />
import Login, {LoginInternal} from '../../support/PageObject/Login/Login'
import logOutPage, {Logout} from '../../support/PageObject/Logout/Logout'
import inventoryPage, {WriteFileNew, WriteFileExsit} from '../../support/PageObject/WriteFile/WriteFile'


require('cypress-xpath')
describe('Check whether the writing to file and verify the json data', ()=> {
  var testData;
  var datapathAccount = '/account';
  var testDataOption;
  var datapathOption = '/option';
  before(function () {
    cy.fixture(datapathAccount).then(function (accoutJsonFile) {
      testData = accoutJsonFile;
    })
  })

  beforeEach(()=>{
    var account = testData[0];
    cy.visit('https://www.saucedemo.com/ ');
    LoginInternal(account.username, account.password);
  })
  afterEach(() =>{
    Logout();
  })
  it('TC_001_WriteFileNew', () => {
    WriteFileNew();
    cy.fixture(datapathOption).then(function (optionJsonFile) {
      testDataOption = optionJsonFile;
    })
  })
  it('TC_002_WriteFileExsit', () => {
     WriteFileExsit();
  })

  it('TC_003_ReadFile', () => {
    var invenPage = new inventoryPage();
    var option = testDataOption[2];
    cy.log(testDataOption)
    invenPage.getSelectDropdownOption().select(option.option);
 })
})

