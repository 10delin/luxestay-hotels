/* global describe, beforeEach, cy, it */

describe("Reservation Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not go to Reservation page if type url in navigator", () => {
    cy.visit("/reservation");
    cy.url().should("include", "/");
  });

  it("should display the booking selected", () => {
    cy.getBySel("goToForm-button").first().click();

    cy.getBySel("name-input").type("test");
    cy.getBySel("surname-input").type("test");
    cy.getBySel("email-input").type("test@gmail.com");
    cy.getBySel("country-input").type("test");
    cy.getBySel("terms-input").click();
    cy.getBySel("goToReservation-button").click();

    cy.getBySel("booking-item").should("be.visible");
  });
});
