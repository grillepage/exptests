/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Лучшие видео про Испанию 2020', () => {
        cy.fixture('testForTitle/spain_videos_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 