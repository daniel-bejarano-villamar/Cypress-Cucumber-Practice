class AboutUsPage{
    AboutUsPageElements={
        playVideoButton:'.video-js button[title="Play Video"]',
        closeButton: '#videoModal .modal-footer button',
        modal: '#videoModal'
    }
    playVideoButton(){return cy.get(this.AboutUsPageElements.playVideoButton);}
    modal(){return cy.get(this.AboutUsPageElements.modal);}
    closeButton(){return cy.get(this.AboutUsPageElements.closeButton);}

    verifyPage(){this.modal().should('have.css','display','block');}
    ClosePage(){return this.closeButton().click();}
}
module.exports = new AboutUsPage();