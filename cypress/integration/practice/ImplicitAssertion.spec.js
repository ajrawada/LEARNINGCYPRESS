
describe('Assertions in cypress()',function(){
    it('Implicit assertions',function(){
        // should and  are the two part if Implicit Assertions
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('include','orangehrmlive') 
         //include means we r checking whether the element is present or not
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //in this we are checking the exact
       // cy.url().should('contain','orangehrm')
        //similar like include
        // as cy.url is used multiple time we can write cy.url for the first time and then .should for the every line
       
        cy.url().should('include','orangehrmlive') 
        //now in the place of the should we can write ".and"from second line
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')//positive assertion
        .and('not.contain','greenhrm')//negative

        //cy.title().should('include','Orange').and('eq','orangehrm')
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')//element is exist or not
   
        //cy.xpath('//a').should('have.length','8')//chech the number of link
       // cy.get(input[placeholder='Username']).type('Admin').should('have.value',Admin)
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin').should('have.value','Admin')
   
   
    })
})
