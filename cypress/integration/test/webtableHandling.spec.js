describe('Web Table Handling ',function(){
    this.beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
    })
    it('get whole table data',function(){
      
        cy.get('#table1>tbody>tr').each(function($row,index,$rows){
            cy.wrap($row).within(function(){
                cy.get('td').each(function($cellData,index,$columns){
                    cy.log($cellData.text())
                })
            })

        })
    })
    it.only('get single row data',function(){
        cy.get('#table1>tbody>tr').eq(1).within(function(){
            cy.get('td').eq(3).should('contain.text','$51.00')
        })
    })
})