/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Аренда машин главная', () => {
        cy.fixture('testForTitle/rent_cars_main_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 