/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Карта Люцерна с достопримечательностями', () => {
        cy.fixture('testForTitle/switzerland_luzern_map_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 