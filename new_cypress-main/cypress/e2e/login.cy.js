describe('Проверка страницы авторизации', function () {

    it('Верный логин и верный пароль', function () {   //Название проверки
        cy.visit('https://login.qa.studio/');   //Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru');   //Ввести верный логин
        cy.get('#pass').type('iLoveqastudio1');   //Ввести верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно');   //Проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверить наличие крестика для закрытия
    })

    it('Проверка логики восстановления пароля', function () {   //Название проверки
        cy.visit('https://login.qa.studio/');   //Зайти на сайт
        cy.get('#forgotEmailButton').click();   //Нажать кнопку "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru');   //Ввести логин
        cy.get('#restoreEmailButton').click();   //Нажать кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');   //Проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверить наличие крестика для закрытия
    })
    
    it('Верный логин и НЕ верный пароль', function () {   //Название проверки
        cy.visit('https://login.qa.studio/');   //Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru');   //Ввести верный логин
        cy.get('#pass').type('Loveqastudio');   //Ввести НЕ верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');   //Проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверить наличие крестика для закрытия
   })

    it('НЕ верный логин и верный пароль', function () {   //Название проверки
        cy.visit('https://login.qa.studio/');   //Зайти на сайт
        cy.get('#mail').type('mihalich@dolnikov.ru');   //Ввести НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1');   //Ввести верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');   //Проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверить наличие крестика для закрытия
    })

    it('Ввести логин без @', function () {   //Название проверки
        cy.visit('https://login.qa.studio/');   //Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru');   //Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');   //Ввести верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');   //Проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверить наличие крестика для закрытия
    })
 
    it('Проверка на приведение к строчным буквам в логине', function () {   //Название проверки
        cy.visit('https://login.qa.studio/');   //Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');   //Ввести логин не только строчными буквами
        cy.get('#pass').type('iLoveqastudio1');   //Ввести верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно');   //Проверить, что текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Проверить наличие крестика для закрытия
    })   
 })