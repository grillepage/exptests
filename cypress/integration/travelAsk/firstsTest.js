/// <reference types="cypress" />


describe('My first Test', () => {
    it ('Visits the TravelAsk', () =>{
        cy.visit( 'https://travelask.ru/')
           
    })
})
 
describe('My second test', () =>
    it ( 'Scroll to the bottom', ()=> {
        cy.scrollTo('bottom',  { duration: 3000 })

    })
)

describe('My third test', () =>
    it ( 'Scroll to the Top', ()=> {
        cy.scrollTo('top', { duration: 3000 })

    })
)


