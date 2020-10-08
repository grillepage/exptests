/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Авиа направления', () => {
        cy.fixture('testForTitle/flights_routes_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 