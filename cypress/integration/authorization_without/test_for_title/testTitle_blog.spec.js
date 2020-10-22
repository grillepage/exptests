/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Блог киты', () => {
        cy.fixture('testForTitle/blog_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 