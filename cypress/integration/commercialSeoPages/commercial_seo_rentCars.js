/// <reference types="cypress" />

describe('Тест seo страницы: Аренда авто', () => {
    it ('Test 1', () => {
       cy.fixture('commercialSeoPagesFixtures/commercial_seo_rentCars.json').then (data => {

           cy.log('Переход на главну страницу')
           cy.visit(data.main_url)
           cy.log('Проверка на наличие поисковой формы в DOM')
           cy.get(data.search_form).should('be.visible')
        })
    })
})