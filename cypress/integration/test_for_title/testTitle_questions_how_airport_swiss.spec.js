/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Как добраться до аэропорта Euroairport Swiss', () => {
        cy.fixture('testForTitle/questions_how_airport_swiss_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 