/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Медицинская страховка в Южную Корею', () => {
        cy.fixture('testForTitle/insurance_south_korea_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('include', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 
