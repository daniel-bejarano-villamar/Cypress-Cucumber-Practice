import HomePageMethods from "../../../support/HomePageMethods";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I visit the homepage', ()=>{
    cy.visit('/');
})

When('I click on {string} of carousel to go to the next product',(element) =>{
    HomePageMethods.clickBtnSides(element);
});

When('I click on {string} of carousel to go to the previous product',(element) =>{
    HomePageMethods.clickBtnSides(element);
});

When('I click on the {string} button',(element) =>{
    HomePageMethods.clickIndicatorBtn(element);
});

Then('The carousel image is the {string} image', imageNumber =>{
    HomePageMethods.CheckImageIndicator(imageNumber);
})
