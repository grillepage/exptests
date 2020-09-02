/// <reference types="cypress" />

describe('Тест seo страницы: Экскурсии', () => {
    it ('Test 1', () => {
       cy.fixture('commercialSeoPagesFixtures/commercial_seo_excursions.json').then (data => {

           cy.log('Переход на главну страницу')
           cy.visit(data.main_url)
           cy.log('Проверка на наличие поисковой формы в DOM')
           cy.get(data.search_form)
           .should('exist')
        })
    })
})