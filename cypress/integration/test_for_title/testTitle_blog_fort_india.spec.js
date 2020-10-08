/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Неприступный форт Джанджира в Индии', () => {
        cy.fixture('testForTitle/blog_fort_india_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 