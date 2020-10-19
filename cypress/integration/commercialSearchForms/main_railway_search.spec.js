/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы ЖД билетов на сайте', () => {
    it('Тест ЖД билетов', () => {
        cy.visit('/')
        // Переход на дополнительные категории поиска
        cy.get('.home-switcher__more').click()
        // Выбор ЖД билетов
        cy.get('[data-cy="commercial-form-container"]').contains('Ж/Д билеты').click()
        cy.get('[data-cy="commercial-form-railway"]').then( formRailway => {
            // Проверка видимости формы
            cy.wrap(formRailway).find('[class="search-fields railway-search__fields"]').should('be.visible')
            // Проверка ввода пункта назначения
            cy.wrap(formRailway).find('[label="Откуда"]').type('Москва')
            // Проверка видимости меню предложенных
            cy.wrap(formRailway).find('.field-cities-list').should('be.visible')
            cy.wrap(formRailway).find('.train-item__name').eq(0).should('contain', 'Москва').click()
            // Проверка ввода пункта прибытия
            cy.wrap(formRailway).find('[label="Куда"]').type('Санкт-Петербург')
            // Проверка видимости меню предложенных
            cy.wrap(formRailway).find('.field-cities-list').should('be.visible')
            cy.wrap(formRailway).find('.train-item__name').eq(0).should('contain', 'Санкт-Петербург').click()
            // Проверка выбора даты отбытия
            cy.wrap(formRailway).find('[class="datepicker-inline"]').eq(0).then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click()
            })
            // Проверка выбора даты возвращения
            cy.wrap(formRailway).find('[class="datepicker-inline"]').eq(1).then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click()
            })
            // Активация поиска
            cy.wrap(formRailway).find('[class="search-forms__button railway-search__btn"]').click()
        })
        // Проверка загрузилась ли правильная страница
        cy.get('.alt-header__logo-title').should('contain', 'ж/д билеты')
    })
})