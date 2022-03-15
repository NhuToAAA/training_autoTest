/// <reference types="cypress" />
import DateSpickerPage, {randomDate} from '../../support/PageObject/DateSpicker/Date'

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
  it('Verify that user able to select date', () => {
    var DateI = new DateSpickerPage();
    var dateA = testdata[0];
    var dateString = dateA.actualDate;
    var dateInputA = dateString.slice(0,10) + 'T' + dateString.slice(11,16)
        DateI.getInputDateSpicker().type(dateInputA)
        DateI.getSubmiyButton().click();
  })
  it('Verify that user able to select random date', () => {
    var dateA = testdata[0];
    var DateI = new DateSpickerPage();

    var dateString1 = dateA.startDate;
    var dateObject1 = new Date(dateString1);
    
    var dateString2 = dateA.endDate;
    var dateObject2 = new Date(dateString2);
    
    var a = randomDate(dateObject1,dateObject2)
    let text = a.toISOString();
    var dateInputRandom = text.slice(0,16)
    
    DateI.getInputDateSpicker().type(dateInputRandom)
    DateI.getSubmiyButton().click();
  })
})