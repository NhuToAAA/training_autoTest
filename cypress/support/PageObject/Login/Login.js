require('cypress-xpath')
class Login {
    getUserTextbox () {
        return cy.xpath('//input[@placeholder="Username"]');
    }
    getPasswordTextbox () {
        return cy.xpath('//input[@placeholder="Password"]');
    }
    getSubmitButton () {
        return cy.xpath('//input[@id="login-button"]');
    }
    getSelect () {
        return cy.get('[data-test="product_sort_container"]');
    }
}
export default Login;
export function LoginInternal(user, password) {
    const LoginI = new Login();
    LoginI.getUserTextbox()
        .clear()
        .type(user);
    LoginI.getPasswordTextbox()
        .clear()
        .type(password);
    LoginI.getSubmitButton()
        .click();
}
export function WriteFile () {
    var array = [];
    cy.get('option').each(element => {
       array.push({
           value : element.val(),
           option:  element.text()
       })
       cy.log("array", array[0])
   }); 
   cy.writeFile('cypress/fixtures/option.json', array)
}