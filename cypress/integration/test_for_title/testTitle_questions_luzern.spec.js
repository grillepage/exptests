/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Люцерн (Швейцария) - 18 вопросов', () => {
        cy.fixture('testForTitle/questions_luzern_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 