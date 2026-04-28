describe("formulario de prueba", () => {
    it('completar los campos con datos', () => {
        

cy.visit("http://the-internet.herokuapp.com/login")
cy.get("#username").type("edinson")
cy.get("#password").type("lache0810")
cy.get("button.radius").click()





    });
})