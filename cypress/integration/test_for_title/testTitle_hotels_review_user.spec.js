/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Отели отзыв пользователя', () => {
        cy.fixture('testForTitle/hotels_review_user_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 