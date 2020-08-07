/// <reference types="cypress" />

describe('Пробный тест главной страницы', () => {

    it ('Тест кейс 1', () => {
        cy.fixture ('exampleFixtures').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
        
            cy.log('Скролл в в подвал сайта')               
            cy.scrollTo('bottom',  { duration: 3000 })
    
            cy.log('Скролл обратно на первый экран')
            cy.scrollTo('top', { duration: 3000 })
    
        })
    })
    it ('Тест кейс 2', () => {              
        cy.fixture ('exampleFixtures').then(data => {
            cy.log('В поле Input “Куда” напечатать текст')
            cy.get('input').click()
            .type(data.type_text)

            cy.log('Нажать кнопку поиск')
            cy.get(data.button_search)
            .click()            
        }) 

    })    
    it ('Тест кейс 3', () => {
        cy.fixture ('exampleFixtures').then(data => {
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
            cy.wait(1000)
            
            cy.log('Ищем Париж')
            cy.get(data.button_search)
            .click()             
    
        })
    })    
})
  










