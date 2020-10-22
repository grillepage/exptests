/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title ЖД билеты Киев — Москва', () => {
        cy.fixture('testForTitle/railway_kiev_moscow_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 
