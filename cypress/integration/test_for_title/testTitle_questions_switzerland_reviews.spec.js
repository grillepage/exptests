/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Отзывы туристов об отдыхе в Швейцарии 2019', () => {
        cy.fixture('testForTitle/questions_switzerland_reviews_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 