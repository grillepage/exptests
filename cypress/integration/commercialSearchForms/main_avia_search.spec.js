/// <reference types= "cypress" />

describe('Тест работы коммерческой поисковой формы на сайте', () => {
    it('Тест поисковой формы для авиабилетов на главной', () => {
        cy.visit('/')
        cy.get('[data-cy="commercial-form-container"]').contains('Авиабилеты').click()
        cy.get('[data-cy="commercial-form-avia"]').then( formAvia => {
            // Проверка видимости формы
            cy.wrap(formAvia).should('be.visible')
            // Ввод города, откуда вылет
            cy.wrap(formAvia).find('[label="Откуда"]').click().type('Москва')
                .find('.city-item__code').eq(0).click()
            // Ввод города, куда прибытие
            cy.wrap(formAvia).find('[label="Куда"]').click().type('Берлин')
                .find('.city-item__code').eq(0).click()
            cy.wait(1000)

            // Эту строку и подобные можно не использовать, так как форма открывается автоматом
            // cy.wrap(formAvia).find('[label="Туда"]').click()

            // Выбор даты вылета (сегодняшний день)
            cy.wrap(formAvia).find('.datepicker--content').then( calendar_from => {
                cy.wrap(calendar_from).find('[class="datepicker--cell datepicker--cell-day -current-"]').click()
            })
            cy.wait(1000)

            // cy.wrap(formAvia).find('[label="Обратно"]')

            // Выбор даты прибытия (1 число следующего месяца)
            cy.wrap(formAvia).find('[class="field-date__container field-date__container--last"]').then( calendar_to => {
                cy.wrap(calendar_to).find('[data-date="1"].-other-month-').click()
            })
            cy.wait(1000)
            // Выбор пассажиров (2 взрослых человека, эконом)
            cy.wrap(formAvia).find('[label="Пассажиры и класс"]').click()
            cy.wrap(formAvia).find('.passenger-counters__counter').eq(0).then( passanger => {
                cy.wrap(passanger).find('[class="counter__btn counter__btn--inc"]').click()
            })
            cy.wrap(formAvia).find('[label="Пассажиры и класс"]').click()
            
            //Нажатие кнопки поиска
            cy.wrap(formAvia).find('[class="search-forms__button avia-search__btn"]').click()
        })

        // Проверка загрузилась ли правильная страница
        cy.get('.fly-iframe').should('be.visible')
        
    })
})


// describe('Тест работы коммерческой поисковой формы на сайте', () => {
//     it('Тест поисковой формы для авиабилетов на главной', () => {
//         cy.fixture('commercialSearchFormsFixtures/main_avia_search_test.json').then((info) => {
//             cy.log('Переход на страницу')
//             cy.visit(info.url)
//             cy.get(info.button).contains(info.button_text).click()
//             cy.log('Проверка на наличие поисковой формы в DOM')
//             cy.get(info.form).should('be.visible')
//             cy.log('Ввод запросов в поисковые поля')
//             cy.get(info.from_form).contains(info.from_form_text).click().type(info.from_form_type)
//             .wait(2000).get(info.air_choose).contains(info.air_1).click()
//             cy.get(info.to_form).contains(info.to_form_text).click().type(info.to_form_type)
//             .wait(2000).get(info.air_choose).contains(info.air_2).click()
//             cy.log('Переход к полям выбора даты')
//             cy.get('[class="datepicker avia-datepicker"]').should('be.visible')
//             cy.get('class="datepicker--cell datepicker--cell-day -current-"').should('be.visible')
            

//         })
//     })
// })