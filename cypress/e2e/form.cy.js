/* global describe, beforeEach, cy, it */

describe("Form Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not go to Form page if type url in navigator", () => {
    cy.visit("/form");
    cy.url().should("include", "/");
  });

  it("should display the room selected", () => {
    cy.getBySel("goToForm-button").first().click();
    cy.getBySel("room-item").should("be.visible");
  });

  it("you should check that the form is not sent until you meet the requirements.", () => {
    cy.getBySel("goToForm-button").first().click();
    cy.getBySel("goToReservation-button").click();
    cy.getBySel("name-input").type("test");
    cy.getBySel("goToReservation-button").click();
    cy.getBySel("surname-input").type("test");
    cy.getBySel("goToReservation-button").click();
    cy.getBySel("email-input").type("test");
    cy.getBySel("goToReservation-button").click();
    cy.getBySel("country-input").type("test");
    cy.getBySel("goToReservation-button").click();
  });

  it("should type data on inputs and send it", () => {
    cy.getBySel("goToForm-button").first().click();
    cy.getBySel("name-input").type("test");
    cy.getBySel("surname-input").type("test");
    cy.getBySel("email-input").type("test@gmail.com");
    cy.getBySel("country-input").type("test");
    cy.getBySel("terms-input").click();
    cy.getBySel("goToReservation-button").click();
  });
});
