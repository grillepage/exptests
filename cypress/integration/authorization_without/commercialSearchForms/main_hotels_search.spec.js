/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы отелей на сайте', () => {
    it('Тест отелей', () => {
        cy.visit('/')
        cy.get('[data-cy="commercial-form-container"]').contains('Отели').click()
        cy.get('[data-cy="commercial-form-hotels"]').then( formHotels => {
            // Проверка видимости формы
            cy.wrap(formHotels).find('[class="search-fields hotels-search__fields"]').should('be.visible')
            // Проверка чекбокса "Даты неизвестны"
            cy.wrap(formHotels).find('.com-checkbox__text').click()
            cy.wrap(formHotels).find('[label="Дата заезда"]').click()
                .get('.field-date__container').should('not.be.visible')
            cy.wrap(formHotels).find('.com-checkbox__text').click()
            // Проверка ввода пункта назначения
            cy.wrap(formHotels).find('[label="Направление"]').type('Барселона')
            // Проверка видимости меню предложенных
            cy.wrap(formHotels).find('.field-cities-list').should('be.visible')
            cy.wrap(formHotels).find('.country-item__name').eq(0).should('contain', 'Барселона').click()
            // Проверка выбора даты заселения
            cy.wrap(formHotels).find('[class="datepicker-inline"]').eq(0).then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click({force: true})
            })
            // Проверка выбора даты выселения
            cy.wrap(formHotels).find('[class="datepicker-inline"]').eq(1).then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click({force: true})
            })
            // Проверка поля выбора количества жильцов
            cy.wrap(formHotels).find('[label="Номера для"]').click()
            cy.wrap(formHotels).find('.settlers-counters').should('be.visible')
            // Активация поиска
            cy.wrap(formHotels).find('[class="search-forms__button hotels-search__btn"]').click()
        })
        // Проверка загрузилась ли правильная страница
        cy.get('.alt-header__logo-title').should('contain', 'отели')
    })
})