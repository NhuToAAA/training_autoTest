
require('cypress-xpath')

class InventoryPageReadFile {
    //get price of item
    getPriceText() {
        return cy.xpath('//div[@class="inventory_item"]/div[2]/div[2]/div');
    }
}
export default InventoryPageReadFile;
/**
 * function add option into array 
 * @returns array have price after choose option
 */
export function priceAfterChoose() {
    var inventory = new InventoryPageReadFile();
    var array1 = [];

    inventory.getPriceText().each(element => {
        // push value and texxt to array
        var price = element.text().slice(1)
        var typePrice = parseFloat(price);
        array1.push(typePrice);
    })
    return array1;
}

/**
 * function add option into array 
 * @returns array have sort bofore choose option
 */
export function sortPrice() {
    var inventory = new InventoryPageReadFile();
    var array = [];

    inventory.getPriceText().each(element => {
        // push value and texxt to array
        var price = element.text().slice(1);
        var typePrice = parseFloat(price);
        array.push(typePrice);
        array.sort(function (a, b) { return a - b });
    })
    return array;
}
/**
 * funciton compare two array option 
 * @param {array} arrayFisrt 
 * @param {array} arraySecond 
 */
export function compareArray(arrayFisrt, arraySecond) {
    const cywrap1 = cy.wrap(arrayFisrt);
    const cywrap2 = cy.wrap(arraySecond);
    
    cywrap2.each((e1)=>cywrap1.each((e2)=> {
    if(e1 == e2) {
       expect(e1).equals(e2);
     }
   }));

}