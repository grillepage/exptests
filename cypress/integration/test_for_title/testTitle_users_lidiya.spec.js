/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Лидия Майер', () => {
        cy.fixture('testForTitle/users_lidiya_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 