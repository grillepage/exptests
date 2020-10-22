/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Маршруты по Испании из Барселоны', () => {
        cy.fixture('testForTitle/spain_barcelona_routes_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 