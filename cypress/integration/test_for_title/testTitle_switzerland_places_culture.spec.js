/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Культурные объекты и памятники всемирного наследия ЮНЕСКО в Швейцарии', () => {
        cy.fixture('testForTitle/switzerland_places_culture_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 