/// <reference types="cypress" />
import Headphones from '../pageObject/headphones';
/* 
The test directly loads the best seller headphones, retrieve the list and verifies if it has a length of 50 likewise the page, besides that it is possible to retrieve other
subcategories just decomment the line 16 and in the contains command replace the value for the subcategory needed, and it will extract the list of it.
*/

describe('Smoke test', () => {
    
    const headphones = new Headphones();

    before('Load page', () => {

        cy.visit('./');

    });

    it('Get headphones list', () => {

        //headphones.earbudHeadphonesClick()

        const list = [];
        cy.get('.p13n-sc-truncate-desktop-type2').each(($item) => {
            list.push(`${$item.text()}`);
        });
        cy.writeFile('./list.json', list);
        cy.readFile('./list.json').should('have.length',50);
        })

    });
    
