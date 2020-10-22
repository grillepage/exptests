/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Люцерн в апреле', () => {
        cy.fixture('testForTitle/questions_luzern_weather_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 