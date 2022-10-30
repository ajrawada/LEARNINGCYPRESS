describe('Login test',function(){
    it('myfirst test case',function(){
        cy.visit("https://www.google.com/");
        //custom parent command
        cy.userInput('Java')
    })
    })