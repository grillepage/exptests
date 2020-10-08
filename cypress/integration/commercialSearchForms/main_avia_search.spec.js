/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы на сайте', () => {
    it('Тест поисковой формы для авиабилетов на главной', () => {
        cy.fixture('commercialSearchFormsFixtures/main_avia_search_test.json').then((info) => {
            cy.log('Переход на страницу')
            cy.visit(info.url)
            cy.get(info.button).contains(info.button_text).click()
            cy.log('Проверка на наличие поисковой формы в DOM')
            cy.get(info.form).should('be.visible')
           
        })
    })
    


})