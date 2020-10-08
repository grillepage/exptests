/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Авиабилеты Москва — Краснодар', () => {
        cy.fixture('testForTitle/flights_moscow_krasnodar_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 