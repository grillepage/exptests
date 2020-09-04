/// <reference types="cypress" />

describe('Проверка title страниц', () => {
    it ('Проверка title главной страницы', () => {
       cy.fixture('testForTitle/test.json').then (data => {

           cy.log('Переход на главную страницу')
           cy.visit(data.main_url)
           cy.log('Проверка соответствия title')
           cy.title().should('eq', data.main_title)
        })
    })
    it ('Проверка title seo страницы Авиабилеты', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу авиа')
            cy.visit(data.flights_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.flights_title)
         })
     })
     it ('Проверка title seo страницы Ж/Д Билеты', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу Ж/Д Билеты')
            cy.visit(data.railway_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.railway_title)
         })
     })
     it ('Проверка title seo страницы Отели', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу отелей')
            cy.visit(data.hotels_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.hotels_title)
         })
     })
     it ('Проверка title seo страницы Автобусы', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу автобусов')
            cy.visit(data.bus_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.bus_title)
         })
     })
     it ('Проверка title seo страницы Страховки', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу страховок')
            cy.visit(data.insurance_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.insurance_title)
         })
     })       
     it ('Проверка title seo страницы Отели - Страны', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу отелей - страна')
            cy.visit(data.hotels_country_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.hotels_country_title)
         })
     })
     it ('Проверка title seo страницы Отели - Регион', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу отелей - город')
            cy.visit(data.hotels_region_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.hotels_region_title)
         })
     })
     it ('Проверка title seo страницы Отели - Регион 3 звезды', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу отелей регион - три звезды')
            cy.visit(data.hotels_region_3stars_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.hotels_region_3stars_title)
         })
     })
     it ('Проверка title seo страницы Мини-отели Регион', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу мини-отелей регион')
            cy.visit(data.miniHotels_region_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.miniHotels_region_title)
         })
     })
     it ('Проверка title seo страницы Карточка отеля', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу карточки отеля')
            cy.visit(data.hotel_card_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.hotel_card_title)
         })
     })     
     it ('Проверка title страницы Страна', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу страны')
            cy.visit(data.country_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.country_title)
         })
     })
     it ('Проверка title страницы Город', () => {
        cy.fixture('testForTitle/test.json').then (data => {
 
            cy.log('Переход на страницу города')
            cy.visit(data.city_url)
            cy.log('Проверка соответствия title')
            cy.title().should('eq', data.city_title)
         })
     })

})      