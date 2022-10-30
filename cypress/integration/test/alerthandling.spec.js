describe('drop down check box radio button handling',function(){
    it('test cases of drop down',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option1').should('contain.text','Option1')
    })
    it('auto suggession handling',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').click({force:true}).type('ind').wait(4000)
        cy.get('div[class="ui-menu-item-wrapper"]').each(($ele,index,$list)=>{   //always used for drop down
            const obj=$ele.text()
            if(obj==='India'){
                cy.wrap($ele).click( {force: true})
            }
            else{

            }
        })
    })
    it('check box handling',function(){         //example for use in calendar
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').click().should('be.checked')
         //or by second method below using .eq
        cy.get('input[type="checkBox"]').eq(1).click().should('be.checked','Option2')
        cy.get('input[type="checkBox"]').eq(2).click().should('be.checked','Option3')
        
    })
    it('radio button handling',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[for="radio1"]').click()
        //or by another method using .eq
        //cy.get('input[class="radioButton"]').eq(0).click().should('be.checked','Radio1')
    })
    it('alert handling',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="Alert"]').click()
        cy.on('window:alert',(alertText)=>{
            expect(alertText).eq('Hello , share this practice page and share your knowledge')
        })
    })
})
