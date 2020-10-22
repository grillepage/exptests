/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Экскурсии в Швейцарии', () => {
        cy.fixture('testForTitle/questions_switzerland_excursions_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 