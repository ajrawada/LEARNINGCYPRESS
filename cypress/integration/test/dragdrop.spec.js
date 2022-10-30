describe('Drag drop handling',function(){
   it.only('drag drop moving syntax',function(){
      

        cy.visit('https://www.w3schools.com/html/html5_draganddrop.asp')
        cy.wait(6000)
        const dataTransfer = new DataTransfer

cy.get('#drag1').trigger('dragstart',{dataTransfer})
        cy.get('#div2').trigger('drop',{dataTransfer})
      
    })
})