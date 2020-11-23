class Headphones {
    earbudHeadphonesClick(){
        return cy.get('.zg_browseUp').siblings('ul').contains('Earbud Headphones').click()
    }

    onEarHeadphonesClick(){
        return cy.get('.zg_browseUp').siblings('ul').contains('On-Ear Headphones').click()
    }

    overEarHeadphoneClick(){
        return cy.get('.zg_browseUp').siblings('ul').contains('Over-Ear Headphones').click()
    }
}

export default Headphones