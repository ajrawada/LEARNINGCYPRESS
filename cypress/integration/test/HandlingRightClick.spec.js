describe('Right click handling',function(){
    it('test syntax',function(){
        cy.visit('https://deluxe-menu.com/popup-mode-sample.html')
        cy.get(':nth-child(17) > img').rightclick()
        cy.contains('Contact Us').click()
    })
})