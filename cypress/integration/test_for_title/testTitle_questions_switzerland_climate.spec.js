/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Климат Швейцарии', () => {
        cy.fixture('testForTitle/questions_switzerland_climate_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 