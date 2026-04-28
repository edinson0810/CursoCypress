describe("Bienvenido al curso cypress",() => {
it('Mi primer test -> hola', () => {
    cy.log("hola edinson");
    cy.wait(500)


  cy.visit("https://demoqa.com/text-box")
  cy.wait(500)
  cy.get("#userName").type("edinson")
  cy.wait(500)
  cy.get("#userEmail").type("lache@hotmail.com")
  cy.get("#currentAddress").type("ya se como escribir desde cypress inspeccionado cada input su #")
  cy.get("#permanentAddress").type("lalalaldfjdfjkasdjfkdsfddka")
  cy.get("#submit").click()
 
 
    
})
}) // cierre de describe