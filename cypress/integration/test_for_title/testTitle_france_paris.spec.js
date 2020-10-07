/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Франция Париж', () => {
        cy.fixture('testForTitle/france_paris_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 