/* global describe, beforeEach, cy, it */

describe("Bookings Page", () => {
  beforeEach(() => {
    cy.visit("/bookings");
  });

  it("should display one of the elements", () => {
    const hasNoBookings = cy.getBySel("no-bookings").should("not.exist");
    if (hasNoBookings) {
      cy.getBySel("no-bookings").should("be.visible");
      cy.getBySel("booking-item").should("not.exist");
    } else {
      cy.getBySel("no-bookings").should("not.exist");
      cy.getBySel("booking-item").should("be.visible");
    }
  });

  it("should go to Home page", () => {
    cy.getBySel("goToHome-button").click();
    cy.url().should("include", "/");
  });
});
