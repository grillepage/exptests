/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Захватывающие воздушные фотографии', () => {
        cy.fixture('testForTitle/blog_air_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
            cy.log('Проверка мета тегов')
            cy.metaCheck()
        })
    }) 
}) 