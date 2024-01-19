class ProdcutPage{
    nameProduct(){return cy.get('.product-content .name');}
    addToCartBtn(){return cy.get('a:contains("Add to cart")');}
    deleteProduct(){return cy.get('#tbodyid tr a');}
    price(){return cy.get('.product-content .price-container :not(small)');}
}

module.exports = new ProdcutPage();