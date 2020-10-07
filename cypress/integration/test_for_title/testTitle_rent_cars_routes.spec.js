/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Аренда машин направления', () => {
        cy.fixture('testForTitle/rent_cars_routes_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 