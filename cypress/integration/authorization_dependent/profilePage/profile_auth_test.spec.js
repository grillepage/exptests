/// <reference types= "cypress" />

describe('Проверка работоспособности элементов на странице профиля', () => {
    it('Тест профиля', () => {
        // Выполнение скрипта авторизации
        cy.loginTravel()
        // Проверка наличия блоков на странице
        
        // Блоки "Обзор" и "Награды"
        cy.get('.user-cabinet__content').then( mainContent => {
            cy.wrap(mainContent).find('.cabinet-content').eq(0).should('be.visible')
            cy.wrap(mainContent).find('.cabinet-content').eq(1).should('be.visible')
        })
        // Боковые блоки
        cy.get('.user-cabinet__sidebar').then( sideContent => {
            cy.wrap(sideContent).find('.user-sidebar__profile').should('be.visible')
            cy.wrap(sideContent).find('.user-sidebar__menu').should('be.visible')
            cy.wrap(sideContent).find('.user-sidebar__suggestions').should('be.visible')
            cy.wrap(sideContent).find('.user-sidebar__info-block').eq(0).should('be.visible')
            cy.wrap(sideContent).find('.user-sidebar__info-block').eq(1).should('be.visible')
        
        // Переход по подразделам и проверка блоков там

        // Мои награды
            cy.wrap(sideContent).find('.user-menu__item').eq(1).click()
            cy.wait(500)
            cy.get('.user-badges__complete').should('be.visible')
            cy.get('.user-badges__next').should('be.visible')
        })
        // Избранное
        cy.get('.user-menu__item').eq(2).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
        // Уведомления
        cy.get('.user-menu__item').eq(3).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
        // Вопросы мне
        cy.get('.user-menu__item').eq(4).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
        // Мои вопросы
        cy.get('.user-menu__item').eq(5).click()
        cy.wait(500)
        cy.get('.user-ask').should('be.visible')
        // Мои ответы
        cy.get('.user-menu__item').eq(6).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
        // Мои отзывы
        cy.get('.user-menu__item').eq(7).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
        // Профиль
        cy.get('.user-menu__item').eq(8).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
        // Настройки
        cy.get('.user-menu__item').eq(9).click()
        cy.wait(500)
        cy.get('.cabinet-content').should('be.visible')
    })
})