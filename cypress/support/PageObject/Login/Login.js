require('cypress-xpath')

class LoginPage {
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
export default LoginPage;

/**
 * function login with username and password
 * @param {string} user 
 * @param {string} password
 *  
 */
export function loginInternal(user, password) {
    const LoginI = new LoginPage();
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
