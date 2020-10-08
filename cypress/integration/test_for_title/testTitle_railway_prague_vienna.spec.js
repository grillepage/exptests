/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Прага — Вена билеты на поезд', () => {
        cy.fixture('testForTitle/railway_prague_vienna_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
        })
    }) 
}) 
