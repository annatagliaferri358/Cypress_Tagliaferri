describe("Pruebas del gestor de tareas TODOMVc", () => {
    beforeEach(() => {
      cy.visit("https://todomvc.com/examples/react/dist/");
    });
  
    it("1. Add an emoji", () => {
      cy.get(".new-todo").type("😘{enter}");
      cy.get(".todo-list li").should("have.length", 1).and("contain", "Aprender Cypress");
      cy.url().should("contain", "todo");
    });

    it("2. Write only a number", () => {
        cy.get(".new-todo").type("5{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "5");
        cy.url().should("contain", "todo");
      });

    it("3. Write more than ten number", () => {
        cy.get(".new-todo").type("1234567891234{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "1234567891234");
        cy.url().should("contain", "todo");
      });
    
    it("4. Write only spaces", () => {
        cy.get(".new-todo").type("    {enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "    ");
        cy.url().should("contain", "todo");
      });

    it("5. A phrase", () => {
        cy.get(".new-todo").type("ciao alessio{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "ciao alessio");
        cy.url().should("contain", "todo");
      });

    it("6. One spacial character", () => {
        cy.get(".new-todo").type("?{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "?");
        cy.url().should("contain", "todo");
      });

    it("7.More than one spacial caracter", () => {
        cy.get(".new-todo").type("?!?!{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "?!?!");
        cy.url().should("contain", "todo");
      });

    it("8. A zero", () => {
        cy.get(".new-todo").type("0{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "0");
        cy.url().should("contain", "todo");
      });

    it("9.Some zero's", () => {
        cy.get(".new-todo").type("000{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "000");
        cy.url().should("contain", "todo");
      });

    it("10. Some emojis", () => {
        cy.get(".new-todo").type("🚿😊😘{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "🚿😊😘");
        cy.url().should("contain", "todo");
      });

    it("11. emoji and letters", () => {
        cy.get(".new-todo").type("ciao😊{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "ciao😊");
        cy.url().should("contain", "todo");
      });

    it("12.emoji and number", () => {
        cy.get(".new-todo").type("😊4{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "😊4");
        cy.url().should("contain", "todo");
      });

    it("13. number and letter", () => {
        cy.get(".new-todo").type("45ciao{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "45ciao");
        cy.url().should("contain", "todo");
      });

    it("14.letter, number and emojis", () => {
        cy.get(".new-todo").type("5rt😊{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "5rt😊");
        cy.url().should("contain", "todo");
      });

    it("15.number with spaces", () => {
        cy.get(".new-todo").type("3 4 5{enter}");
        cy.get(".todo-list li").should("have.length", 1).and("contain", "3 4 5");
        cy.url().should("contain", "todo");
      });

})