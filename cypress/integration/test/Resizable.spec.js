describe('Resizable',function(){
    it('test syntax',function(){
        cy.visit('https://jqueryui.com/resources/demos/resizable/default.html')
        cy.get('#resizable').invoke('attr','style','width:312px','height:564px;')
    })
})