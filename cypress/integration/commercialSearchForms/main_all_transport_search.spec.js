/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы для всего транспорта на сайте', () => {
    it('Тест Весь транспорт', () => {
        cy.visit('/')
        // Выбор Всего транспорта
        cy.get('[data-cy="commercial-form-container"]').contains('Весь транспорт').click()
        cy.get('[data-cy="commercial-form-all_transport"]').then( formTransport => {
            // Проверка видимости формы
            cy.wrap(formTransport).find('[class="search-fields transport-search__fields"]').should('be.visible')
            // Проверка ввода пункта назначения
            cy.wrap(formTransport).find('[label="Откуда"]').type('Санкт-Петербург')
            // Проверка видимости меню предложенных
            cy.wrap(formTransport).find('.field-cities-list').should('be.visible')
            cy.wrap(formTransport).find('.transport-item__text').eq(0).should('contain', 'Санкт-Петербург').click()
            // Проверка ввода пункта прибытия
            cy.wrap(formTransport).find('[label="Куда"]').type('Москва')
            // Проверка видимости меню предложенных
            cy.wrap(formTransport).find('.field-cities-list').should('be.visible')
            cy.wrap(formTransport).find('.transport-item__text').eq(0).should('contain', 'Москва').click()
            cy.wait(1000)
            // Проверка выбора даты отбытия
            cy.wrap(formTransport).find('[label="Туда"]').click()
            cy.wrap(formTransport).find('[class="datepicker-inline"]').eq(0).then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click({force: true})
            })
            cy.wait(1000)
            cy.wrap(formTransport).find('[label="Откуда"]').click()
            cy.wait(1000)
            // Проверка выбора даты возвращения
            cy.wrap(formTransport).find('[label="Обратно"]').click({force: true})
            cy.wrap(formTransport).find('[class="datepicker-inline"]').eq(1).then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click({force: true})
            })
            cy.wait(1000)
            // Проверка поле выбора количества путешественников
            cy.wrap(formTransport).find('[label="Количество путешественников"]').click()
            cy.wrap(formTransport).find('.field-all-travelers__container').should('be.visible')
            // Добавление ещё одного путешественника
            cy.wrap(formTransport).find('.field-all-travelers__counter').eq(0).then( newPerson => {
                cy.wrap(newPerson).find('[class="counter__btn counter__btn--inc"]').click()
            })
            // Активация поиска
            cy.wrap(formTransport).find('[class="search-forms__button transport-search__btn"]').click()
        })
        // Проверка загрузки правильной страницы
        cy.get('.alt-header__logo-title').should('contain', 'весь транспорт')
    })
})