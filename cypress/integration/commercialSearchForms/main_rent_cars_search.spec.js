/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы для аренды авто на сайте', () => {
    it('Тест аренды авто', () => {
        cy.visit('/')
        // Выбор Аренды автомобиля
        cy.get('[data-cy="commercial-form-container"]').contains('Аренда авто').click()
        cy.get('[data-cy="commercial-form-rent_cars"]').then( formRent => {
            // Проверка видимости формы
            cy.wrap(formRent).find('[class="search-fields rent-search__fields"]').should('be.visible')
            // Проверка чекбокса "Возврат машины в другое место"
            cy.wrap(formRent).find('.com-checkbox__text').eq(0).click()
            // Проверка ввода пункта получения
            cy.wrap(formRent).find('[label="Место получения"]').type('Мадрид')
            // Проверка видимости меню предложенных
            cy.wrap(formRent).find('.field-cities-list').should('be.visible')
            cy.wrap(formRent).find('.airport-item__name').eq(0).should('contain', 'Мадрид').click()
            // Проверка ввода пункта возврата
            cy.wrap(formRent).find('[label="Место возврата"]').type('Барселона')
            // Проверка видимости меню предложенных
            cy.wrap(formRent).find('.field-cities-list').should('be.visible')
            cy.wrap(formRent).find('.airport-item__name').eq(0).should('contain', 'Барселона').click()
            // Проверка выбора даты получения
            cy.wrap(formRent).find('[class="datepicker-inline"]').eq(0).then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click({force: true})
            })
            // Проверка выбора даты возврата
            cy.wrap(formRent).find('[class="datepicker-inline"]').eq(1).then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click({force: true})
            })
            // Включить закомментированные строки ниже, когда починят выдачу по аренде
            // Проверка активации поиска
            cy.wrap(formRent).find('[class="search-forms__button rent-search__btn"]').click()
        })
        // // Проверка загрузки правильной страницы
        cy.get('.alt-header__logo-title').should('contain', 'Аренда авто')
    })
})