/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Климат в Люцерне', () => {
        cy.fixture('testForTitle/questions_luzern_climate_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 