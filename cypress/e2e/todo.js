export class TodoPage {
  navigate() {
    cy.visit("https:/todomvc-app-for-testing.surge.sh/");
  }
  addTodo(todoText) {
    cy.get(".new-todo").type(todoText + "{enter}");
  }
  validateToDotext(todoIndex,excpectedText){
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) level`).should("have.text",excpectedText)
  }
}
