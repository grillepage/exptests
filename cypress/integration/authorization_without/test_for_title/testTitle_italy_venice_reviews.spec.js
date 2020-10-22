/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Венеция — достопримечательности, что посмотреть', () => {
        cy.fixture('testForTitle/italy_venice_reviews_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 