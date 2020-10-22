# Autotests for TravelAsk with cypress 

## Часто используемые команды
```
npx cypress open
npx cypress open --config baseUrl=http://localhost:8060
npx cypress open --config baseUrl=https://rocket:rocket@stage1.rs0.ru
```

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

## Установка пакетов для проекта 


```bash
$ npm install
```

## Запуск cypress

Если версия npm > v5.2 можно запустить с помощью npx
```bash
$ npx cypress open
```
для более старых версий
```bash
./node_modules/.bin/cypress open
```
Если нужно запустить только тесты с авторизацией - добавить спек:
```bash
--spec 'cypress/integration/authorization_dependent/**/*'
```
Если нужно запустить только тесты без авторизации - добавить спек:
```bash
--spec 'cypress/integration/authorization_without/**/*'
```
Если нужно запустить тесты с кастомными данными авторизации:
```bash
--env login=нужныйемейл,password=нужныйпароль
```

- Ссылка на документацию cypress : https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
- Ссылка на первый тест : https://rscz.ru/travel/travelask-prod-tests/-/tree/master/cypress/integration
- Ссылка на тестовую документацию:  https://drive.google.com/drive/folders/1MYhl8PpV5Dn4cODbmHhwC3sNjsiB0EMP?usp=sharing
