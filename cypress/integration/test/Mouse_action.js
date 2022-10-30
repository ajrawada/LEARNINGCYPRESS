/// <reference types= "cypress" />
describe('MOUSE HOVER',function(){
    it('mouse hover action',function(){
        cy.visit("https://courses.letskodeit.com/practice").wait(4000)
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true})
    }
    )
}
)