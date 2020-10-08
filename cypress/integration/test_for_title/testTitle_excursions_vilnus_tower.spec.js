/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Экскурсии в Вильнюсе Башня Гедимина', () => {
        cy.fixture('testForTitle/excursions_vilnus_tower_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 