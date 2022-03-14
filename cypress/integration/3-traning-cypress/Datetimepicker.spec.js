/// <reference types="cypress" />


require('cypress-xpath')
describe('Testing Table with Cypress', ()=> {
  var testdata;
  var datapath = '/date';
  before(function () {
    cy.fixture(datapath).then(function (dateJsonFile) {
      testdata = dateJsonFile;
    })
  })
  beforeEach(()=>{
    cy.visit('https://demo.guru99.com/test/')
  })
  it.only('Verify that user able to select date', () => {
    var dateA = testdata[0];
    var dateString = dateA.actualDate;
    var dateObject = new Date(dateString);
    let text = dateObject.toISOString();
    var dateInputA = text.slice(0, 16)
        cy.xpath('//input[@name="bdaytime"]').type(dateInputA)
        cy.xpath('//input[@type="submit"]').click();
  })
  it('Verify that user able to select random date', () => {
    var dateA = testdata[0];
    var dateString1 = dateA.startDate;
    var dateObject1 = new Date(dateString1);
    let text1 = dateObject1.toISOString();
    // var dateInputS = text1.slice(0, 16)
    
    var dateString2 = dateA.endDate;
    var dateObject2 = new Date(dateString2);
    let text2 = dateObject2.toISOString();
    // var dateInputE = text2.slice(0, 16)

    // cy.log(dateInputS);
    // cy.log(dateInputE);
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    randomDate(text1,text2)
        cy.xpath('//input[@name="bdaytime"]').type(dateInputS)
        cy.xpath('//input[@type="submit"]').click();
  })
})