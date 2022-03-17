require('cypress-xpath')

class InventoryPage {
    // get dropdown select option 
    getSelectDropdownOption() {
        return cy.get('[data-test="product_sort_container"]');
    }
    // get value and text of option
    getValueOfOption() {
        return cy.xpath('//select[@data-test="product_sort_container"]/option');
    }
}
export default InventoryPage;

/**
 * funciton write Exsit
 */
export function writeFileExsit() {
    var invenPage = new InventoryPage();
    var array = [];
    // for loop each option 
    invenPage.getValueOfOption().each(element => {
        // push value and texxt to array
        array.push({
            value: element.val(),
            option: element.text()
        })
    });
    cy.readFile('cypress/fixtures/optionExsit.json', 'utf8').then((data) => {
        data = data.concat(array)
        // write file into file optionExsit.js
        cy.writeFile('cypress/fixtures/optionExsit.json', data);
    })
}

/**
 * function write new
 */
export function writeFileNew() {
    var invenPage = new InventoryPage();
    var array = [];
    // for loop each option 
    invenPage.getValueOfOption().each(element => {
        // push value and texxt to array
        array.push({
            value: element.val(),
            option: element.text()
        })
    });
    // write file into file optionNew.js
    cy.writeFile('cypress/fixtures/optionNew.json', array);
    return array;
}