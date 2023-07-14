class SignUp {
  signUpOption() {
    return cy.get('#signin2')
  }

  signUpUserName() {
    return cy.get('#sign-username')
  }

  signUpPassword() {
    return cy.get('#sign-password')
  }

  signUpButton() {
    return cy.get('button[onClick="register()"]')
  }

  signUpCloseButton() {
    return cy.get('button[class="btn btn-secondary"]')
  }
}

export default SignUp
