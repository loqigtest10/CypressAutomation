describe('Browser control tests', () => {
  //Test to validate browser back button
  /* it('Browser back button test', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#cartur').click()
    cy.wait(4000)
    cy.url().should('include', 'https://www.demoblaze.com/cart.html')
    cy.go('back') //browser back operation controlled by cypress
    cy.wait(4000)
    cy.url().should('include', 'index.html')
  })

  it('Browser forward button test', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#cartur').click()
    cy.wait(4000)
    cy.url().should('include', 'https://www.demoblaze.com/cart.html')
    cy.go('back') //browser back operation controlled by cypress
    cy.wait(4000)
    cy.url().should('include', 'index.html')
    cy.go('forward') //browser forward operation controlled by cypress
    cy.wait(4000)
    cy.url().should('include', 'https://www.demoblaze.com/cart.html')
  })*/

  it('Vertical scroll bar test', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.scrollTo('bottom')
    cy.wait(4000)
    cy.get("p[class='m-0 text-center text-white']").should(
      'have.text',
      'Copyright © Product Store 2017'
    )
    cy.wait(4000)
    cy.scrollTo('top')
    cy.wait(2000)
    cy.get("a[class = 'navbar-brand']").should(
      'have.text',
      '\n      PRODUCT STORE'
    )
  })
})
