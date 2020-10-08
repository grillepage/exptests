/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Медицинская страховка в Россию', () => {
        cy.fixture('testForTitle/insurance_russia_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 