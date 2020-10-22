/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Швейцария и отдых там: вся информация о стране', () => {
        cy.fixture('testForTitle/switzerland_overview_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 