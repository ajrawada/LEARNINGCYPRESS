describe('Automation practice',function(){
   it('alert handling syntax',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#name').type('Ashish')
    cy.get('#alertbtn').click()
    cy.on('window:alert',(alertText)=>{
        expect(alertText).eq('Hello Ashish, share this practice page and share your knowledge')
    })
   })
   it("dropdown handling",function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#dropdown-class-example').select('Option1').should('be.checked','Option1')

    })
it('check box and radio button',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').click().wait(2000)
    cy.get('[for="radio1"] > .radioButton').click()
})
it('file updoading',function(){
    cy.visit('http://the-internet.herokuapp.com/')
    cy.get(':nth-child(18) > a').click()
    const fixturepath="download.png"
    cy.get('#file-upload').attachFile(fixturepath)
    cy.get('#file-submit').click()
}) 
it('auto suggesion',function(){
 cy.visit('https://rahulshettyacademy.com/AutomationPractice/')   
 cy.get('#autocomplete').type('ind').click({force:true})
 cy.get('.ui-menu-item-wrapper').each(($ele,index,$list)=>{
    const obj=$ele.text()
    if(obj==='India')
    {
        cy.wrap($ele).click({force:true})
    }
else{
    
}
 })
})

it('right click handling',function(){
    cy.visit('https://deluxe-menu.com/popup-mode-sample.html')
    cy.get(':nth-child(17) > img').rightclick()
    cy.contains('Contact Us').click()
})
it('mouse hover',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#mousehover').invoke('show')
    cy.contains('Top').click({force:true})
})
it('resizble',function(){
    cy.visit('https://jqueryui.com/resources/demos/resizable/default.html')
    cy.get('#resizable').invoke('attr','style','width:678px','height:8978px')
})
it.only('slider screen scenario',function(){
    cy.visit('https:jqueryui.com/resources/demos/slider/default.html')
    cy.get('.ui-slider-handle').invoke('attr','style','left:50%')
})
it.only('tab handling',function(){
cy.visit('https://the-internet.herokuapp.com/windows')
})
})




