///<reference types="cypress"/>

describe("Accessing Elements", () => {
  beforeEach(() => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

  });
  
  it.only("should be able to add items to the to do list", () => {
    cy.wait(3000);
    cy.get('input[placeholder = "What needs to be done?"]').type(
      "watch cypress course {enter}"
    ); // note that to press on enter button will put {enter}
    cy.get("input[class='toggle']").click();
    cy.contains("Clear").click(); //contains for part of the text to type
  });

  it.skip("validation test", () => {
    cy.get(".new-todo").type("clean room {enter}");
    cy.get("label").should("have.text", "clean room");
    cy.get(".toggle").should("not.be.checked"); // to verify that the radio button that not checked in the to do list 
  });
 
});
