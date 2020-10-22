/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Отели Франция Париж Novotel', () => {
        cy.fixture('testForTitle/hotels_france_paris_novotel_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 
