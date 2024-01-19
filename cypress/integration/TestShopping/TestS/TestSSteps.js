import {Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePageMethods from "../../../support/HomePageMethods"
import ShoppingMethods from "../../../support/ShoppingMethods";


Before(() => {
    cy.fixture('DataUser.json').as('dataUser');
});

Given('I visit the homepage',()=>{
    cy.visit('/');
})

When('Select the first product and add it to the cart',()=>{
    ShoppingMethods.SelectProduct1();
})

And('Select the second product to add it to the cart',()=>{
  ShoppingMethods.SelectProduct2();
})

And('Add a phone to cart',()=>{
  ShoppingMethods.SelectProduct3();
})

When('Select Phones Categories',()=>{
    ShoppingMethods.SelectPhones();
})

And('View Detail of the Phone and add to the cart',()=>{
    ShoppingMethods.AddProduct();
})

And('Accept Product', () => {
    cy.on('window:alert', (text) => {
      cy.log('Add Product');
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      }).then(() => {
        return true;
      });
      expect(text).to.include('Product added');
    });
    HomePageMethods.clickOnPage('Cart');
});

And('I want to the place order',()=>{
    ShoppingMethods.PlaceOrder();
})

And('Fill in and send information',()=>{
  cy.get('@dataUser').then((dataUser) => {
      ShoppingMethods.FillInformation(dataUser.name, dataUser.country, 
      dataUser.city, dataUser.card, dataUser.month, dataUser.year)
});ShoppingMethods.clickPurchaseBtn();
})

But('Return to Home Page',()=>{
  HomePageMethods.clickOnPage('Home');
})

But('Remove the product {int} from the cart',(nlist)=>{
  ShoppingMethods.DeleteProduct(nlist);
})

Then('Check there are {int} product(s) in the cart', (expectedProducts) => {
  ShoppingMethods.CheckProductsInCart(expectedProducts);
});

Then('I must a successful purchase message', () => {
  ShoppingMethods.CheckPurchase();
});

