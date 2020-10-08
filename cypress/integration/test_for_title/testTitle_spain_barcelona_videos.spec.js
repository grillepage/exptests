/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title учшие видео про Барселону 2020', () => {
        cy.fixture('testForTitle/spain_barcelona_videos_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 