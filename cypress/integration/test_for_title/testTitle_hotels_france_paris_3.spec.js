/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Отели Франция Париж 3 звезды', () => {
        cy.fixture('testForTitle/hotels_france_paris_3.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.get('title').contains(info.title)
        })
    }) 
})  