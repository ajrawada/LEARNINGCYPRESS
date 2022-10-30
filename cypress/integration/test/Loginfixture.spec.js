describe('Login Fixture',function(){        //hide the details of the user
    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data=data
        })
    })
    it('Login Fixture Syntax',function(){
cy.visit('https://register.rediff.com/register/register.php')
cy.get('[width="200"] > input').type(globalThis.data.fullName)
cy.get('[valign="bottom"] > [type="text"]').type(globalThis.data.number)





    })
})