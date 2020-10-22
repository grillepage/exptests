/// <reference types="cypress" />

describe('Тест авторизации на главной', () => {
    it('Тест авторизации', () => {
        cy.fixture('authorization/authorization_test.json').then( info => {
            // Переход на страницу
            cy.visit('/')
            cy.wait(2000)
            // Переход к авторизации
            cy.get('[class="alt-header__action js-signin"]').click()
            // Проверка видимости формы авторизации
            cy.get('.auth-popup__wrap').should('be.visible')
            // Работа с формой авторизации
            cy.get('.auth-popup__wrap').then( formAuth => {
                // Ввод логина
                cy.wrap(formAuth).find('[placeholder="Эл. почта"]').eq(0).type(info.login)
                // Ввод пароля
                cy.wrap(formAuth).find('[placeholder="Пароль"]').eq(0).type(info.password)
                // Вход по введённым данным
                cy.wrap(formAuth).find('[type="submit"]').eq(0).click()
                cy.wait(2000)
            })
            // Проверка факта авторизации
            cy.get('[property="og:url"]').invoke('attr', 'content').should('eq', info.end_page)
        })
    })
})
