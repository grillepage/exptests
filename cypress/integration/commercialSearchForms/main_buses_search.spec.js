/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы для автобусов на сайте', () => {
    it('Тест автобусов', () => {
        cy.visit('/')
        // Переход на дополнительные категории поиска
        cy.get('.home-switcher__more').click()
        // Выбор Автобусов
        cy.get('[data-cy="commercial-form-container"]').contains('Автобусы').click()
        cy.get('[data-cy="commercial-form-bus"]').then( formBuses => {
            // Проверка видимости формы
            cy.wrap(formBuses).find('[class="search-fields transport-search__fields"]').should('be.visible')
            // Проверка ввода пункта назначения
            cy.wrap(formBuses).find('[label="Откуда"]').type('Санкт-Петербург')
            // Проверка видимости меню предложенных
            cy.wrap(formBuses).find('.field-cities-list').should('be.visible')
            cy.wrap(formBuses).find('.transport-item__text').eq(0).should('contain', 'Санкт-Петербург').click()
            // Проверка ввода пункта прибытия
            cy.wrap(formBuses).find('[label="Куда"]').type('Москва')
            // Проверка видимости меню предложенных
            cy.wrap(formBuses).find('.field-cities-list').should('be.visible')
            cy.wrap(formBuses).find('.transport-item__text').eq(0).should('contain', 'Москва').click()
            // Проверка выбора даты отбытия
            cy.wrap(formBuses).find('[class="datepicker-inline"]').eq(0).then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click()
            })
            // Проверка выбора даты возвращения
            cy.wrap(formBuses).find('[class="datepicker-inline"]').eq(1).then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click()
            })
            // Проверка поле выбора количества путешественников
            cy.wrap(formBuses).find('[label="Количество путешественников"]').click()
            cy.wrap(formBuses).find('.field-all-travelers__container').should('be.visible')
            // Добавление ещё одного путешественника
            cy.wrap(formBuses).find('.field-all-travelers__counter').eq(0).then( newPerson => {
                cy.wrap(newPerson).find('[class="counter__btn counter__btn--inc"]').click()
            })
            // Активация поиска
            cy.wrap(formBuses).find('[class="search-forms__button transport-search__btn"]').click()
        })
        // Проверка загрузки правильной страницы
        cy.get('.alt-header__logo-title').should('contain', 'автобусы')
    })
})