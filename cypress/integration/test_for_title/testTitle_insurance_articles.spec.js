/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Страховка статья', () => {
        cy.fixture('testForTitle/insurance_articles_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 