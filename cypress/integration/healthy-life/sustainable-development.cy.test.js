const testId = (id) => `[data-testid=${id}]`;

describe('/healthy-life/sustainable-development', () => {
  it('should render 17 goal tiles', () => {
    cy.visit('http://localhost:3000/healthy-life/sustainable-development');
    cy
      .get(testId('goalList'))
      .children()
      .should('have.length', 17);
  });
});