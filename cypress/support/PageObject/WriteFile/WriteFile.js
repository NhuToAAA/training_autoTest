require('cypress-xpath')

class inventoryPage {
    // get dropdown select option 
    getSelectDropdownOption () {
        return cy.get('[data-test="product_sort_container"]');
    }
    // get value and text of option
    getValueOfOption () {
       return cy.xpath('//select[@data-test="product_sort_container"]/option');
    }
}
export default inventoryPage;


export function WriteFileNew () {
    var invenPage = new inventoryPage();
    var array = [];
    // for loop each option 
    invenPage.getValueOfOption().each(element => {
    // push value and texxt to array
       array.push({
           value : element.val(),
           option:  element.text()
       })
   }); 
   // write file into file option.js
   cy.writeFile('cypress/fixtures/option.json', array);
}
export function WriteFileExsit () {
    var invenPage = new inventoryPage();
    var array = [];
    // for loop each option 
    invenPage.getValueOfOption().each(element => {
    // push value and texxt to array
       array.push({
           value : element.val(),
           option:  element.text()
       })
   }); 
   // write file into file option.js
   cy.writeFile('cypress/fixtures/example.json', array , {flag: 'a+'});
}