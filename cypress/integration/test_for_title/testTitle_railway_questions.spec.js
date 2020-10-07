/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title ЖД Вопросы', () => {
        cy.fixture('testForTitle/railway_questions_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 