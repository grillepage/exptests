/// <reference types="cypress" />


describe('My first Test', () => {
    it ('Visits the TravelAsk', () => {
        cy.fixture ('example').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
        
            cy.log('Скролл в в подвал сайта')               
            cy.scrollTo('bottom',  { duration: 3000 })
    
            cy.log('Скролл обратно на первый экран')
            cy.scrollTo('top', { duration: 3000 })
    

        })
    })
})    
