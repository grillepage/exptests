/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Люцерн, Швейцария: вся информация об отдыхе', () => {
        cy.fixture('testForTitle/switzerland_luzern_overview_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 