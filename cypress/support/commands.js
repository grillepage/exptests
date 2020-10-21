// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

// Команда для логина на Travelask
Cypress.Commands.add("loginTravel", () => {
    cy.fixture('authorization/authorization_test.json').then( info => {
        // Переход на страницу
        cy.visit('/')
        cy.wait(1000)
        // Переход к авторизации
        cy.get('[class="alt-header__action js-signin"]').click()
        // Проверка видимости формы авторизации
        cy.get('.auth-popup__wrap').should('be.visible')
        // Работа с формой авторизации
        cy.get('.auth-popup__wrap').then( formAuth => {
            // Ввод логина (Здесь используются данные не из указанной выше фикстуры, а из env переменных, хранящихся в cypress.env.json)
            cy.wrap(formAuth).find('[placeholder="Эл. почта"]').eq(0).wait(1000).type(Cypress.env('login'))
            // Ввод пароля (Здесь используются данные не из указанной выше фикстуры, а из env переменных, хранящихся в cypress.env.json)
            cy.wrap(formAuth).find('[placeholder="Пароль"]').eq(0).type(Cypress.env('password'))
            // Вход по введённым данным
            cy.wrap(formAuth).find('[type="submit"]').eq(0).click()
            cy.wait(1000)
        })
        // Проверка факта авторизации
        cy.get('[property="og:url"]').invoke('attr', 'content').should('eq', info.end_page)
        cy.wait(1000)
    })
})