/// <reference types="cypress" />

describe('Проверка title страниц', () => {

    it.only('Проверка title страницы автобусов', () => {
        cy.fixture('testForTitle/bus_test.json').then((info) => {
            cy.visit(info.url)
            cy.get('title').contains(info.title)
        })

    })
    
})      

// it ('Проверка title страницы автобусов', () => {
//     cy.fixture('testForTitle/bus_test.json').then (data => {
//      data.pages.for(element => {
//          cy.log('Переход страницу')
//          cy.visit(element.url)
//          cy.log('Проверка соответствия title')
//          cy.title().should('contain', element.title)