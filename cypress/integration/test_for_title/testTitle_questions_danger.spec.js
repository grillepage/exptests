/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Опасно ли девушке ехать в Грузию без мужского сопровождения?', () => {
        cy.fixture('testForTitle/questions_danger_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 