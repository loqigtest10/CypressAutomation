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

const url = 'https://www.demoblaze.com/index.html'

describe('All positive tests on Home Page', function () {
  it('navigate to Demoblaze Home page', function () {
    cy.visit(url)
    cy.wait(2000)

    const HomePage = new Home() //Created an object named "HomePage" for class Home

    HomePage.loginInOption().click()
    cy.wait(2000)
    HomePage.userName().should('be.visible').type('test')
    cy.wait(2000)
    HomePage.passWord().type('test')
    cy.wait(2000)
    HomePage.loginInButton().click()
    cy.wait(1000)
    cy.get('#nameofuser').should('have.text', 'Welcome test')
  })

  it('Sign up a new user', function () {
    //Local declaration
    //let userName = generateUsername('-, @')
    //let password = generator.generate({
    //  length: 6,
    //  number: true,
    //  uppercase: false,
    // })

    const signUpNewUser = new SignUp()

    cy.visit(url)
    signUpNewUser.signUpOption().click()
    cy.wait(6000)
    signUpNewUser.signUpUserName().type(userName)
    cy.wait(4000)
    signUpNewUser.signUpPassword().type(password)
    cy.wait(4000)
    signUpNewUser.signUpButton().click()
    cy.wait(4000)
    cy.on('window:alert', function (myalertword) {
      expect(myalertword).eql('Sign up successful.')
    })
  })

  it('Add a product to cart', function () {
    cy.visit(url)
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
    cy.visit(url)
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
    //Validation
    cy.PreviousPage()
    cy.wait(2000)
    //Validation
  })
})
