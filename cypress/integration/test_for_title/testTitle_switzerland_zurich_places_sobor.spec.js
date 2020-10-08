/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Храмы, церкви, монастыри и соборы Цюриха', () => {
        cy.fixture('testForTitle/switzerland_zurich_places_sobor_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 