//expect-BDD
//assert-TDD framework
describe('Assertions in cypress()',function(){
    it('Explicit assertions',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        //explicit are customized one can't be use directly,will javascript-BDD assertions
       let expName='Paul Collings'
        cy.get('.oxd-userdropdown-name').then(function(x){
            let actName=x.text()
            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)
            //TDD
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
    })
})