/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Места Венеция', () => {
        cy.fixture('testForTitle/italy_venice_places_all_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 