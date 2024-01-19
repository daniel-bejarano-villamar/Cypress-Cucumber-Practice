import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePageMethods from "../../../support/HomePageMethods";

Given('I visit the homepage',()=>{
    cy.visit('/');
})

When('I click {string} to navigate to a different page',(page)=>{
    HomePageMethods.clickOnPage(page);
})

Then('I must be on {string} Page',(page)=>{
    HomePageMethods.verifyPage(page);
})

