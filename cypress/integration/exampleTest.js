/// <reference types="cypress" />

describe('Пробный тест главной страницы', () => {

    it ('Test Case 1', () => {
        cy.fixture ('exampleFixtures').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url)
        
            cy.log('Скролл страницы вниз до конца')               
            cy.scrollTo('bottom',  { duration: 3000 })
    
            cy.log('Скролл странице вверх до конца')
            cy.scrollTo('top', { duration: 3000 })
    
        })
    })
    it ('Test case 2', () => {              
        cy.fixture ('exampleFixtures').then(data => {
            cy.log('В поле Input “Куда” напечатать текст')
            cy.get('input').click()
            .type(data.type_text)

            cy.log('Нажать кнопку поиск')
            cy.get(data.button_search)
            .click()
                      
            cy.log('Скролл страницы вниз до конца')               
            cy.scrollTo('bottom',  { duration: 3000 })

            cy.log('Скролл странице вверх до конца')
            cy.scrollTo('top', { duration: 3000 })
        }) 

    })    
    it ('Тест кейс 3', () => {
        cy.fixture ('exampleFixtures').then(data => {
            cy.log('возвращаемся обратно на главную страницу')
            cy.visit(data.main_url)

            cy.log('В поле input печатаем валидный текст')
            cy.get('input').click()
            .type(data.type_text2)

            cy.log('Проверяем на наличие в DOM dropdown списка')
            cy.get(data.drop_down1)
            .should('exist')

            ///временное решение, так как на сайте баг. надо подумать в сторону проверки на наличие в dropdown списке 
            ///слов Париж и прочее
            cy.wait(1000)
            
            cy.log('Нажимаем на кнопку поиска')
            cy.get(data.button_search)
            .click()             

        })
    })    
})
  










