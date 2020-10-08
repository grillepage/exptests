/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Отели Франция Париж мини-отели', () => {
        cy.fixture('testForTitle/hotels_france_paris_minihotels_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
})  