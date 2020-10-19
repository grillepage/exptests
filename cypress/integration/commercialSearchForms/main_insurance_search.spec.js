/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы страховок на сайте', () => {
    it('Тест страховок', () => {
        cy.visit('/')
        // Переход на дополнительные категории поиска
        cy.get('.home-switcher__more').click()
        // Выбор страховок
        cy.get('[data-cy="commercial-form-container"]').contains('Страховки').click()
        cy.get('[data-cy="commercial-form-insurance"]').then( formInsurance => {
            // Проверка видимости формы
            cy.wrap(formInsurance).find('[class="search-fields insurance-search__fields"]').should('be.visible')
            // Проверка ввода пункта назначения
            cy.wrap(formInsurance).find('[label="Куда"]').type('Италия')
            // Проверка видимости меню предложенных
            cy.wrap(formInsurance).find('.field-cities-list').should('be.visible')
            cy.wrap(formInsurance).find('.country-item__name').should('contain', 'Италия').click()
            // Проверка выбора даты заселения
            cy.wrap(formInsurance).find('[class="datepicker-inline"]').eq(0).then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click()
            })
            // Проверка выбора даты выселения
            cy.wrap(formInsurance).find('[class="datepicker-inline"]').eq(1).then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click()
            })
            // Проверка поля выбора количества людей
            cy.wrap(formInsurance).find('.field-base__label').eq(3).click()
            cy.wrap(formInsurance).find('.field-travelers__list').should('be.visible')
            // Добавление ещё одного человека к страховке
            cy.wrap(formInsurance).find('.field-travelers__item').eq(1).then( newPerson => {
                cy.wrap(newPerson).find('.com-checkbox__text').click({force: true})
            })
            // Активация поиска
            cy.wrap(formInsurance).find('[class="search-forms__button insurance-search__btn"]').click()
        })
        // Проверка загрузилась ли правильная страница
        cy.get('.alt-header__logo-title').should('contain', 'страховки')
    })
})