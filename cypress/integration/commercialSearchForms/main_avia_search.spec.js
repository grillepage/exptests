/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы на сайте', () => {
    it('Тест поисковой формы для авиабилетов на главной', () => {
        cy.fixture('commercialSearchFormsFixtures/main_avia_search_test.json').then((info) => {
            cy.log('Переход на страницу')
            cy.visit(info.url)
            cy.get(info.button).contains(info.button_text).click()
            cy.log('Проверка на наличие поисковой формы в DOM')
            cy.get(info.form).should('be.visible')
            cy.log('Ввод запросов в поисковые поля')
            cy.get(info.from_form).contains(info.from_form_text).click().type(info.from_form_type)
            .wait(2000).get(info.air_choose).contains(info.air_1).click()
            cy.get(info.to_form).contains(info.to_form_text).click().type(info.to_form_type)
            .wait(2000).get(info.air_choose).contains(info.air_2).click()
            cy.log('Переход к полям выбора даты')
            cy.get('[class="datepicker avia-datepicker"]').should('be.visible')
            cy.get('class="datepicker--cell datepicker--cell-day -current-"').should('be.visible')
            

        })
    })
})