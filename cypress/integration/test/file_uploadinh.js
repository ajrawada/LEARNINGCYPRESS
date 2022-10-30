describe('handling file uploading',function(){
    it('file upload-positive test case',function(){
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get(':nth-child(18) > a').click()
   const fixturepath='download.png'
   cy.get('#file-upload').attachFile(fixturepath)
   cy.get('#file-submit').click()
    })
})