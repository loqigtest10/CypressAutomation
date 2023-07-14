describe('Checkboxes test', () => {
  it('Single Checkbox handling', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search')
    cy.get('#description').check().should('be.checked')
    cy.get('#description').uncheck().should('not.be.checked')
  })

  it('Multiple Checkboxes handling test', () => {
    cy.visit(
      'https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42'
    )
    cy.get("input[type='checkbox'] ")
      .check(['8', '10', '11'])
      .should('be.checked')
  })

  it('Radio button handling test', () => {
    cy.visit(
      'https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42'
    )
    cy.get("input[value='7']").check().should('be.checked')
  })
})
