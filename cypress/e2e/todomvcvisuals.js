/// <reference types= "cypress"/>

// import { TodoPage } from "./todo";
// import 'cy-applitools/commands';

// describe("visual valiadtions", () => {
//   before("login", () => {
//     cy.visit("https:/todomvc-app-for-testing.surge.sh/");
//     it("should look good", () => {
//         cy.visit("https:/todomvc-app-for-testing.surge.sh/");
//       cy.get(".new-todo").type("clean room {enter}");
//       cy.get(".new-todo").type("Learn JavaScripts");
//     });
//   });
// });



import 'cy-applitools/commands';

describe("visual validations", () => {
  before("login", () => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
  });

  it("should look good", () => {
    cy.get(".new-todo").type("clean room {enter}");
    cy.get(".new-todo").type("Learn JavaScript");
  });
});







