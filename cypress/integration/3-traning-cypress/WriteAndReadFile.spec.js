/// <reference types="cypress" />

require('cypress-xpath')
describe('Check whether the writing to file and verify the json data', ()=> {
var testdata;
  var datapath = '/option';
  before(function () {
    cy.fixture(datapath).then(function (optionJsonFile) {
      testdata = optionJsonFile;
    })
  })
  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/ ');
    cy.xpath('//input[@placeholder="Username"]').type('standard_user');
    cy.xpath('//input[@placeholder="Password"]').type('secret_sauce');
    cy.xpath('//input[@id="login-button"]').click();
  })

  it('Write file', () => {
     cy.get('[data-test="product_sort_container"]').select('Name (A to Z)').should('have.value', 'az');
     var array = [];
     cy.get('option').each(element => {
        array.push({
            value : element.val(),
            option:  element.text()
        })
        cy.log("array", array[0])
    }); 
    cy.writeFile('cypress/fixtures/option.json', array)
  })
  it('Read file', () => {
    var option = testdata[2];
    cy.get('[data-test="product_sort_container"]').select(option.option);
 })
})

