/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы экскурсий на сайте', () => {
    it('Тест экскурсий', () => {
        cy.visit('/')
        cy.get('[data-cy="commercial-form-container"]').contains('Экскурсии').click()
        cy.get('[data-cy="commercial-form-excursions"]').then( formExcurs => {
            // Проверка видимости формы
            cy.wrap(formExcurs).should('be.visible')
            // Активация формы
            cy.wrap(formExcurs).find('.field-base__label').click()
            // Проверка видимости меню
            cy.wrap(formExcurs).find('.field-base__dropdown').should('be.visible')
            // Ввод запроса
            cy.wrap(formExcurs).find('.field-base__control').type('Тбилиси')
            // Проверка меню предложенных
            cy.wrap(formExcurs).find('.field-excursions-list').should('be.visible')
            cy.wrap(formExcurs).find('.field-excursions-list__name').should('contain', 'Тбилиси')
            // Активация поиска
            cy.wrap(formExcurs).find('[class="search-forms__button excursions-search__btn"]').click()
        })
        // Проверка правильно ли загрузилась страница
        cy.get('.alt-header__logo-title').should('contain', 'экскурсии')
    })
})