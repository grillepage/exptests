/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title ЖД Отзыв пользователя', () => {
        cy.fixture('testForTitle/railway_review_user_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 