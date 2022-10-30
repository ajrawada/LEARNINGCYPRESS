describe('Slider Scenario',function(){
    it('test syntax',function(){
        cy.visit("https:jqueryui.com/resources/demos/slider/default.html")
        cy.get('.ui-slider-handle.ui-corner-all.ui-state-default').invoke('attr','style','left:40%')
    })
})