// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('email')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('password')
    cy.get('.oxd-button').click()
  })
  Cypress.Commands.add("userInput", (searchTxt) => {
    //to input search text in Google and perform search
    cy.get("input[type='text']").type(searchTxt);
    cy.contains("Google Search").click();
 });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
/// <reference types= "cypress" />
/// <reference types= "cypress-xpath" />
import 'cypress-iframe';
import '@4tw/cypress-drag-drop'
