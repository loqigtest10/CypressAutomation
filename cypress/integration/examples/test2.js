//Mocha framework
import Home from '../PageObjects/Home'
import SignUp from '../PageObjects/signUp'
const { generateUsername } = require('unique-username-generator')
const generator = require('generate-password')

//Global declaration
const userName = generateUsername()
const password = generator.generate({
  length: 6,
  number: true,
  uppercase: false,
})
describe('This is my first Test suite', function () {
  it('navigate to Demoblaze Home page', function () {
    cy.visit('https://www.demoblaze.com/index.html')
    const Homepage = new Home()

    cy.wait(2000)
    Homepage.loginInOption().click()
    cy.wait(2000)
    Homepage.userName().should('be.visible').type('bandi')
    cy.wait(2000)
    Homepage.passWord().type('bandi')
    cy.wait(2000)
    Homepage.loginInButton().click()
    cy.wait(1000)
  })

  it('Sign up a new user', function () {
    /* let userName = generateUsername('*')
      let password = generator.generate({
        length: 6,
        number: true,
        uppercase: false,
      })*/
    const Pradeep = new SignUp()
    cy.visit('https://www.demoblaze.com/index.html')
    Pradeep.signUpOption().click()
    cy.wait(1000)
    Pradeep.signUpUserName().type(userName)
    cy.wait(2000)
    Pradeep.signUpPassword().type(password)
    cy.wait(1000)
    Pradeep.signUpButton().click()
    cy.wait(2500)
    cy.on('window:alert', function (myalertword) {
      expect(myalertword).eql('Sign up successful.')
    })
  })

  it('After credentials in signup click close', function () {
    const Prad = new SignUp()
    cy.visit('https://www.demoblaze.com/index.html')
    Prad.signUpOption().click()
    cy.wait(1000)
    Prad.signUpUserName().type(userName)
    cy.wait(2000)
    Prad.signUpPassword().type(password)
    cy.wait(1000)
    Prad.signUpCloseButton().click()
    cy.wait(2500)
  })

  it('Add a product to cart', function () {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type(userName)
    cy.wait(2000)
    cy.get('#loginpassword').type(password)
    cy.wait(2000)
    cy.get('button[onclick="logIn()"]').click()
    cy.wait(2000)
    cy.get('a[href="prod.html?idp_=1"] img[src="imgs/galaxy_s6.jpg"]').click()
    cy.wait(2000)
    cy.get('a[onclick="addToCart(1)"]').click()
    cy.wait(2000)
    cy.on('window:alert', function (AddProduct) {
      expect(AddProduct).eql('Product added.')
    })
    cy.reload()
    cy.wait(2000)
    cy.get('#cartur').click()
    cy.wait(2000)
    cy.get('td:nth-child(2)').should('have.text', 'Samsung galaxy s6')
  })

  it('Custom functions', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type('test')
    cy.wait(2000)
    cy.get('#loginpassword').type('test')
    cy.wait(2000)
    cy.get('button[onclick="logIn()"]').click()
    cy.wait(2000)
    cy.NextPage()
    cy.wait(2000)
    cy.PreviousPage()
    cy.wait(2000)
  })
})
