/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Страховка в', () => {
        cy.fixture('testForTitle/insurance_routes_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 