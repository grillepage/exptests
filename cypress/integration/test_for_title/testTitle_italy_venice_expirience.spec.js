/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Венеция — все посты', () => {
        cy.fixture('testForTitle/italy_venice_expirience_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 