describe('HRM login fixture',function(){
    before(function(){
        cy.fixture('orangehrm').then(function(data){
            globalThis.data=data
        })
    })
    it('hrm test case',function(){
const website=Cypress.env('website')
 cy.visit(website)   
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(globalThis.data.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(globalThis.data.password)    
        cy.get('.oxd-button').click()
    
    })
})