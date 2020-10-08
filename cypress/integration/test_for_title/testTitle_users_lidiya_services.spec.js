/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it.only('Проверка title Услуги предоставляемые пользователем Лидия Майер', () => {
        cy.fixture('testForTitle/users_lidiya_services_test.json').then((info) => {
            cy.log('Переход страницу')
            cy.visit(info.url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', info.title)
        })
    }) 
}) 