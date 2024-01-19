class HomePage{

    logoBtn(){return cy.get('#nava img');}
    homeBtn(){return cy.get('a:contains("Home")');}
    contactBtn(){return cy.get('[data-target="#exampleModal"]');}
    aboutUsBtn(){return cy.get('[data-target="#videoModal"]');}
    cartBtn(){return cy.get('#cartur');}
    loginBtn(){return cy.get('#login2');}
    signUpBtn(){return cy.get('#signin2');}
    categories(){return cy.get('cat')};

    //Carousel buttons
    btnPreviousCarousel(){return cy.get('.carousel-control-prev-icon');}
    btnNextCarousel(){return cy.get('.carousel-control-next-icon');}
    rightSideCarousel(){return cy.get('a.carousel-control-next');}
    leftSideCarousel(){return cy.get('a.carousel-control-prev');}

    //Carousel img indicators
    indicator01Btn(){return cy.get('[data-slide-to="0"]');} 
    indicator02Btn(){return cy.get('[data-slide-to="1"]');}
    indicator03Btn(){return cy.get('[data-slide-to="2"]');}
    
    //Products and category
    phonesOptions(){return cy.get('a:contains("Phones")');}
    product1(){return cy.get('.card-title a:contains("Samsung galaxy s6")');}
    product2(){return cy.get('.card-title a:contains("Samsung galaxy s7")');}
    product3(){return cy.get('.card-title a:contains("Nexus 6")');}

    verifyPage(){return this.categories.should('exist');}
    verifyModalOpen(){return cy.get('body').should('have.class', 'modal-open');}
}
module.exports = new HomePage();