///<reference types="Cypres" />
//para que funciones de comando


describe('validando titulos', () => {
  it('test validando titulo', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should("eq", "demosite")
    cy.log("funciona bien");
    cy.get("#userName").type("edinson barrios")
    cy.get("#userEmail").type("lache0810hotmail.com")
    cy.get("#currentAddress").type("tiene error por que no valida el correo")
    
 
   



  })
})