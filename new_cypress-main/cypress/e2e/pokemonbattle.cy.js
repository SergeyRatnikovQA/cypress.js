describe('Покупка аватара', function () {

    it('e2e тестирование покупки аватара', function () {   //Название проверки
        cy.visit('https://pokemonbattle.me/');   //Зайти на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   //Ввести верный логин
        cy.get('#password').type('USER_PASSWORD');   //Ввести верный пароль
        cy.get('.auth__button').click();   //Нажать кнопку "Войти"
        cy.get('.header__btns > [href="/shop"]').click();   //Нажать на раздел "Магазин"
        cy.get('.available > button').first().click();   //Нажимаем "Купить" на доступном аватаре
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555544444442'); //Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //Вводим срок карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //Вводим код карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('weld monster'); //Вводим имя владельца карты
        cy.get('.pay-btn').click(); //Нажимаем оплатить
        cy.get('#cardnumber').type('56456'); //Вводим код из пуша или СМС
        cy.get('.payment__submit-button').click();   //Нажимаем "Отправить"
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');   //Проверить, что текст верный
        cy.get('.payment__adv').click();   //Нажать "Вернуться в битву покемонов"
        cy.wait(3000)   //Подождать
        cy.get('.header__container > .header__id').click();   //Нажать на раздел тренера, чтобы проверить смену аватара
    })   
})