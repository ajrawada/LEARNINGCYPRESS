/// <reference types="Cypress" />
describe('Login test',function(){
it('myfirst test case',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
   cy.login('Admin','admin123')
})
})