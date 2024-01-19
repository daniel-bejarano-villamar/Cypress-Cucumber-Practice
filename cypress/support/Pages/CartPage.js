class CartPage{

    //Products Cart
    Product(){return cy.get('#page-wrapper .col-lg-8 h2');}
    totalPrice(){return cy.get('#totalp');}
    placeOrderBtn(){return cy.get('#page-wrapper button');}
    shoppingList(){return cy.get('#tbodyid tr', { timeout: 15000 });}
    deleteBtn(){return cy.get('#tbodyid tr a');}

    //Place Order Inputs
    name(){return cy.get('#name');}
    country(){return cy.get("#country");}
    city(){return cy.get('#city');}
    card(){return cy.get('#card');}
    month(){return cy.get('#month');}
    year(){return cy.get('#year');}
    purchaseBtn(){return cy.get('.modal-footer button[onclick="purchaseOrder()"]');}

    //Success Cart
    successLabel(){return cy.get('h2:contains("Thank you for your purchase!")')}

    //Verifiers
    verifyPurchase(){return this.successLabel().should('exist');}
    verifyPage(){return this.placeOrderBtn().should('exist');}
}

module.exports = new CartPage();