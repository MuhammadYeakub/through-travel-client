describe("signup page", () => {
  it("should show validation error when leaving fields blank", () => {
    cy.visit("http://localhost:5173/signup");
    cy.get("[data-cy=submit]").click();
    cy.get('[data-cy="error-name"]').should("exist");
    cy.get('[data-cy="error-email"]').should("exist");
    cy.get('[data-cy="error-password"]').should("exist");
  });

  it("should redirect to login page when filling the forms & click submit", () => {
    cy.visit("http://localhost:5173/signup");
    cy.get('[data-cyp="name-input"]').type("Through Travels");
    cy.get('[data-cyp="email-input"]').type("through@gmail.com");
    cy.get('[data-cyp="password-input"]').type("123456");
    cy.get('[data-cy="submit"]').click();
  });
});
