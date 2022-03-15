require('cypress-xpath')

class loginPage {
    //get Username textbox on page login
    getUserTextbox () {
        return cy.xpath('//input[@placeholder="Username"]');
    }
    //get Password textbox on page login
    getPasswordTextbox () {
        return cy.xpath('//input[@placeholder="Password"]');
    }
    //get Login button on page login
    getSubmitButton () {
        return cy.xpath('//input[@id="login-button"]');
    }
}
export default loginPage;

/**
 * 
 * @param {string} user 
 * @param {string} password
 *  
 */
export function LoginInternal(user, password) {
    const LoginI = new loginPage();
    // input username
    LoginI.getUserTextbox()
        .clear()
        .type(user);
    // input password
    LoginI.getPasswordTextbox()
        .clear()
        .type(password);
    // click submit
    LoginI.getSubmitButton()
        .click();
}
