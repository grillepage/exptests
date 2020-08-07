/// <reference types="cypress" />


describe('testcae', () => {
    it ('Visits the TravelAsk', () => {
        cy.fixture ('example').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
        
            cy.log('Печатаем текст в строке ввода')
            cy.get('input').click()
            .type(data.type_text)

            cy.log('Нажимаем кнопку поиск')
            cy.get(data.button_search)
            .click()        

            cy.log('возвращаемся обратно на главную страницу')
            cy.visit(data.main_url)

            cy.log('Печатаем текст в строке ввода')
            cy.get('input').click()
            .type(data.type_text2)

            cy.log('Проверяем на наличие в DOM dropdown списка')
            cy.get('body > div.wrapper > div.home > section.home__section.home__section--dark.home__section--intro > div > div.intro__content > div > div.intro__search > div.search-forms > div.cities-form > div.cities-form__search > div.cities-form__dropdown')
            .should('exist')

            ///временное решение, так как на сайте баг. надо подумать в сторону проверки на наличие в dropdown списке 
            ///слов Париж и прочее
            cy.wait(3000)
            
            cy.log('Ищем Париж')
            cy.get(data.button_search)
            .click()    
    
        })
    })
})    










