///<reference types="cypress"/>

describe("Filtering", () => {
  beforeEach(() => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo").type("Clean Room {enter}");
    cy.get(".new-todo").type("Learn JavaScript{enter}");
    cy.get(".new-todo").type("Use Cypress {enter}");
    cy.get(".todo-list li:nth-child(2) .toggle").click();
  });
  it("Should Filter be active to do list", () => {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2); // to get the number of the active utems in the to do list
  });
  it('Should Filter  "completed"  to do list', () => {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1); // to get the  number of completed items in the to do list
  });
  it('Should Filter  "All"  to do list', () => {
    cy.contains("All").click();
    cy.get(".todo-list li").should("have.length", 3); // to get number of all items in the to do list
  });
});
