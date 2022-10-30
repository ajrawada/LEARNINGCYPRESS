describe('tab handling',function(){
    it('tab action',function(){
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example > a').invoke('removeAttr', 'target').click().wait(4000)
    cy.url()
    .should('include', 'https://the-internet.herokuapp.com/windows/new')
     //shift to parent window
    cy.go('back');
    })
}
)
