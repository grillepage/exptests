// Кастомные команды для Cypress под нужды проекта

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



// Команда для тестирования мета тегов
Cypress.Commands.add("metaCheck", () => {
  cy.fixture('metaTags/metaTags_test.json').then( info => {
    // Вспомогательная функция для проверки существования элемента (первым аргументом вписывать селектор, вторым - часть DOM (head, body и т.д.))
    function checkElemExists(elem, part) {
      cy.get(part).then( allPart => {
        if (allPart.find(elem).length > 0) {
          // Выполнение проверки отсутствия в мета тегах элементов из фикстуры
          cy.get(elem).invoke('attr', 'content').should('not.contain', info.meta)
        }
      })
    }
    // Выполнение проверок по элементам
    checkElemExists('meta[property="og:description"]', 'head')
    checkElemExists('meta[name="description"]', 'head')
    checkElemExists('meta[property="og:url"]', 'head')
  })
})