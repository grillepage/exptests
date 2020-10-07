/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Страховка FAQ', () => {
        cy.fixture('testForTitle/insurance_question_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 