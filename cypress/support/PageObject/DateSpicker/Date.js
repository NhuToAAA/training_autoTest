require('cypress-xpath')

class DateSpickerPage {
    // get input datespicker
    getInputDateSpicker() {
        return cy.xpath('//input[@name="bdaytime"]');
    }
    // get button submit
    getSubmiyButton() {
        return cy.xpath('//input[@type="submit"]');
    }
}
export default DateSpickerPage;

/**
 * function random from start date to end date
 * @param {date} start 
 * @param {date} end 
 * @returns date random
 */
export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}