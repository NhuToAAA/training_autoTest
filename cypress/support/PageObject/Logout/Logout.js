require('cypress-xpath')

class logOutPage {
    //get dropdown have logout
    getDropdownLogout () {
        return cy.xpath('//button[@id="react-burger-menu-btn"]');
    }
    //get button logout
    getBuutonLogout () {
        return cy.xpath('//a').contains('Logout');
    }
}
export default logOutPage;

/**
 * 
 * @param {string} user 
 * @param {string} password
 *  
 */
export function Logout(user, password) {
    const Logout = new logOutPage();
    // click dropdown have logout
    Logout.getDropdownLogout()
        .click();
    // choose logout
    Logout.getBuutonLogout()
        .click();
   
}