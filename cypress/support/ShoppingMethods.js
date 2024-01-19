const CartPage = require("./Pages/CartPage");
const HomePage = require("./Pages/HomePage");
const ProductPage = require("./Pages/ProductPage");

class ShopingMethods{

    //Product and Category picking
    SelectPhones(){return HomePage.phonesOptions().click();}
    SelectProduct1(){ return HomePage.product1().click();}
    SelectProduct2(){ return HomePage.product2().click();}
    SelectProduct3(){ return HomePage.product3().click();}

    //Verify
    VerifyDetailProductPage(){return ProductPage.addToCartBtn.should('exist');}
    CheckProductsInCart(expectedProducts) {
        return CartPage.shoppingList().should('have.length', expectedProducts);
    }

    //Products adding and removing
    AddProduct(){ 
        return ProductPage.addToCartBtn().click();
    }    
    DeleteProduct(nList){
        CartPage.deleteBtn().eq(nList-1).then((deleteOpt) => {
        cy.wrap(deleteOpt).click(); 
    });} 
    PlaceOrder(){return CartPage.placeOrderBtn().click();}

    //Fill card inputs
    FillInformation(name,country,city,card,month,year){
        CartPage.name().type(name);
        CartPage.country().type(country);
        CartPage.city().type(city);
        CartPage.card().type(card);
        CartPage.month().type(month);
        CartPage.year().type(year);
    }

    //Purchase
    clickPurchaseBtn(){return CartPage.purchaseBtn().click();}
    CheckPurchase(){return CartPage.verifyPurchase();}
}
module.exports = new ShopingMethods();