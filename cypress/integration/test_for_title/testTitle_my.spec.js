/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    
    it('Проверка title главной страницы', () => {
        cy.visit('/')
        cy.get('title')

    })

})