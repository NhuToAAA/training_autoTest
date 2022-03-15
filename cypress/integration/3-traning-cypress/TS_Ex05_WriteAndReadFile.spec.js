/// <reference types="cypress" />
import Login, {loginInternal} from '../../support/PageObject/Login/Login'
import LogOutPage, {logout} from '../../support/PageObject/Logout/Logout'
import InventoryPage, {writeFileNew, writeFileExsit} from '../../support/PageObject/WriteFile/WriteFile'


require('cypress-xpath')
describe('Check whether the writing to file and verify the json data', ()=> {
  var testData;
  var datapathAccount = '/account';
  var testDataOption;
  var datapathOption = '/optionNew';
  before(function () {
    cy.fixture(datapathAccount).then(function (accoutJsonFile) {
      testData = accoutJsonFile;
    })
  })

  beforeEach(()=>{
    var account = testData[0];
    cy.visit('https://www.saucedemo.com/ ');
    loginInternal(account.username, account.password);
  })

  afterEach(() =>{
    logout();
  })

  it('TC_001_WriteFileNew', () => {
    writeFileNew();
    cy.fixture(datapathOption).then(function (optionJsonFile) {
      testDataOption = optionJsonFile;
    })
  })

  it('TC_002_WriteFileExsit', () => {
    writeFileExsit();
  })

  it('TC_003_ReadFile', () => {
    var invenPage = new InventoryPage();
    var option = testDataOption[2];
    cy.log(testDataOption)
    invenPage.getSelectDropdownOption().select(option.option);
 })
})

