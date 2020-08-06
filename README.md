# Autotests for TravelAsk witch cypress 

### Запуск cypress
---
Cypress - это настольное приложение, которое устанавливается на компьютер. Настольное приложение поддерживает следующие операционные системы:
- macOS 10.9 и выше (только 64-битная версия)
- Linux Ubuntu 12.04 и выше, Fedora 21 и Debian 8 (только 64-разрядная версия)
- Windows 7 и выше

Для Linux нужно установить необходимые зависимости в системе 
 ```
$apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb 
```
 Для запуска необходима версия Node.js >= 8

## Установка cypress 


```
$npm install cypress
```

## Запуск cypress


```
$./node_modules/.bin/cypress open
```
Если версия npm > v5.2 можно запустить с помощью npx
```
$npx cypress open
```
---
- Ссылка на документацию cypress : https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
- Ссылка на первый тест : https://rscz.ru/travel/travelask-prod-tests/-/tree/master/cypress/integration/travelAsk