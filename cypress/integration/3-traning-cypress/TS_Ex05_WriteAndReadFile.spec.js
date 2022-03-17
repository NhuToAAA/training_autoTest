/// <reference types="cypress" />
import Login, { loginInternal } from '../../support/PageObject/Login/Login'
import LogOutPage, { logout } from '../../support/PageObject/Logout/Logout'
import InventoryPage, { writeFileNew, writeFileExsit } from '../../support/PageObject/WriteFile/WriteFile'
import InventoryPageReadFile, { sortPrice,priceAfterChoose, compareArray } from '../../support/PageObject/ReadFile/ReadFile'


require('cypress-xpath')
describe('Check whether the writing to file and verify the json data', () => {
  var testData;
  var datapathAccount = '/account';
  var testDataOption;
  var datapathOption = '/optionNew';
  var testSort;
  var datapathSort = '/sort'
  before(function () {
    cy.fixture(datapathAccount).then(function (accoutJsonFile) {
      testData = accoutJsonFile;
    })
    cy.fixture(datapathSort).then(function (sortJsonFile) {
      testSort = sortJsonFile;
    })
  })

  beforeEach(() => {
    var account = testData[0];
    cy.visit('https://www.saucedemo.com/ ');
    loginInternal(account.username, account.password);
  })

  afterEach(() => {
    logout();
  })

  it('TC_001_WriteFileNew', () => {
    writeFileNew();
    var array = [];
    cy.fixture(datapathOption).then(function (optionJsonFile) {
      testDataOption = optionJsonFile;
      array.push(testDataOption);
    })
     compareArray(writeFileNew(), array);
  })

  it('TC_002_WriteFileExsit', () => {
    writeFileExsit();
  })

  it('TC_003_ReadFile', () => {
    sortPrice();
    var invenPage = new InventoryPage();
    var option = testDataOption[2];
    invenPage.getSelectDropdownOption().select(option.option);
    priceAfterChoose();
    compareArray(sortPrice(), priceAfterChoose());
    
  })
})

