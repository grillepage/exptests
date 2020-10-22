/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Москва — Санкт-Петербург билеты на поезд', () => {
        cy.fixture('testForTitle/railway_moscow_spb_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    })
})
