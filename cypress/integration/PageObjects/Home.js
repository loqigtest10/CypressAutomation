class Home {
  loginInOption() {
    return cy.get('#login2')
  }

  userName() {
    return cy.get('#loginusername')
  }

  passWord() {
    return cy.get('#loginpassword')
  }

  loginInButton() {
    return cy.get("button[onClick='logIn()']")
  }
}

export default Home
