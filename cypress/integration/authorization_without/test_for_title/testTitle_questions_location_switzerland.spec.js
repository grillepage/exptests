/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title ответов от реальных туристов', () => {
        cy.fixture('testForTitle/questions_location_switzerland_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 
