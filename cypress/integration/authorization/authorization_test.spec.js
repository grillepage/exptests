/// <reference types="cypress" />

describe('Тест авторизации на главной', () => {
    it('Тест авторизации', () => {
        cy.fixture('authorization/autrhorization_test.json').then( info => {
            // Переход на страницу
            cy.visit('/')
            // Переход к авторизации
            cy.get('[class="alt-header__action js-signin"]').click()
        })
    })
})