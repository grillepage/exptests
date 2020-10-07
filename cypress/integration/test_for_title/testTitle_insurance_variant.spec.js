/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Страховка варианты', () => {
        cy.fixture('testForTitle/insurance_variant_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
}) 