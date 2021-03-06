/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title ЖД Отзыв о покупке', () => {
        cy.fixture('testForTitle/railway_review_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 