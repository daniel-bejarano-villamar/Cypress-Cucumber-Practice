class LogInPage{
    
    LogInPageElements={
        usernameInput:'#loginusername',
        passwordInput: '#loginpassword',
        logInButton: '#logInModalbutton:contains("Log in")',
        closeButton: '#logInModal button:contains("Close")',
        modal: '#logInModal'
    }

    usernameInput(){return cy.get(this.LogInPageElements.usernameInput);}
    passwordInput(){return cy.get(this.LogInPageElements.passwordInput);}
    logInButton(){return cy.get(this.LogInPageElements.logInButton);}
    modal(){return cy.get(this.LogInPageElements.modal);}
    closeButton(){return cy.get(this.LogInPageElements.closeButton);}

    verifyPage(){this.modal().should('have.css','display','block');}
}
module.exports = new LogInPage();