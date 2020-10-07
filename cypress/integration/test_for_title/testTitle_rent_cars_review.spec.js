/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Аренда машин отзыв', () => {
        cy.fixture('testForTitle/rent_cars_review_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 