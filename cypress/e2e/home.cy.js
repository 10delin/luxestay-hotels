/* global describe, beforeEach, cy, it */

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the list of podcasts", () => {
    cy.getBySel("rooms-content").should("be.visible");
    cy.getBySel("room-item").should("be.visible");
  });

  it("should go to Bookings page", () => {
    cy.getBySel("goToBookings-button").click();
    cy.url().should("include", "/bookings");
  });

  it("should go to Form page", () => {
    cy.visit("/");
    cy.getBySel("goToForm-button").first().click();
    cy.url().should("include", "/form");
  });
});
