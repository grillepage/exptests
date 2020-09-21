/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it ('Проверка title главной страницы', () => {
       cy.fixture('testForTitle/test.json').then (data => {
        data.pages.forEach(element => {
            cy.log('Переход страницу')
            cy.visit(element.url)
            cy.log('Проверка соответствия title')
            cy.title().should('contain', element.title)
        });
        })
    })
})      
