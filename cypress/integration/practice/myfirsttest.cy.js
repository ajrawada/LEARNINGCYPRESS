describe('open website',function(){
    it('verify title positive case',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
    })
})

it('verify title-negative',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','orangehm')
})