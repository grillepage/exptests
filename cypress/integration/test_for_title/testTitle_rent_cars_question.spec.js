/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Аренда машин вопросы', () => {
        cy.fixture('testForTitle/rent_cars_question_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 