require('cypress-xpath')

class DatePickerPage {
    // get input datespicker
    getInputDateSpicker() {
        return cy.xpath('//input[@name="bdaytime"]');
    }
    // get button submit
    getSubmiyButton() {
        return cy.xpath('//input[@type="submit"]');
    }
    // get text of Your Birth Date and Your Birth Time
    getTextResult() {
        return cy.xpath('/html/body/div[2]');
    }
}
export default DatePickerPage;

/**
 * function random from start date to end date
 * @param {date} start 
 * @param {date} end 
 * @returns date random
 */
export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
/**
 * functio expect date from web with date from data file
 * @param {*} dateGetFromFile 
 */
export function expectDate (dateGetFromFile) {
    var date = new DatePickerPage();
    date.getTextResult().then(($el) => {
        const text = $el.text(); 
        var dateTest = text.slice(19,29) + text.slice(47,53)
        // Do the assertion here
         expect(dateTest).to.eq(dateGetFromFile);
      });
}