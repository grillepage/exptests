/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Музей янтаря (Amber Museum)', () => {
        cy.fixture('testForTitle/questions_amber_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 