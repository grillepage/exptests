/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Лучшие фото достопримечательностей Люцерна', () => {
        cy.fixture('testForTitle/switzerland_luzern_photos_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 