describe('I Frame ',function(){
    it('i frame test case',function(){
        cy.visit('https://jqueryui.com/draggable/')
         // u have to load the iframe at first
cy.frameLoaded('.demo-frame')
// shifting focus
cy.iframe().find('#draggable').then(function(t){
    const frame=t.text()
    expect(frame).to.contains('Drag me around');
         cy.log(frame)
})



    })
})