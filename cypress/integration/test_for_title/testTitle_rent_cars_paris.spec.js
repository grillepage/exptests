/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Аренда авто в Париже', () => {
        cy.fixture('testForTitle/rent_cars_paris_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
        })
    }) 
}) 
