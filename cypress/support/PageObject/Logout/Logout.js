require('cypress-xpath')

class LogOutPage {
    //get dropdown have logout
    getDropdownLogout () {
        return cy.xpath('//button[@id="react-burger-menu-btn"]');
    }
    //get button logout
    getBuutonLogout () {
        return cy.xpath('//a').contains('Logout');
    }
}
export default LogOutPage;

/**
 * function logout
 * @param {string} user 
 * @param {string} password
 *  
 */
export function logout(user, password) {
    const Logout = new LogOutPage();
    // click dropdown have logout
    Logout.getDropdownLogout()
        .click();
    // choose logout
    Logout.getBuutonLogout()
        .click();
   
}