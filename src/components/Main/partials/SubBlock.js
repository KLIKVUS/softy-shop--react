import React from 'react';


function SubBlock() {
    const readForm = (e) => {
        e.preventDefault();
        alert(`Ваш email (${e.target.email.value || "пусто"}) недействителен! Проверьте его на корректность.`);
    }

    return (
        <section className="main-body__form form flex-helper">
            <form onSubmit={(e) => readForm(e)} className="flex-helper">
                <label htmlFor="email">Подпишись на полезную рассылку и получи 30% скидку</label>
                <input type="text" name="email" placeholder="E-mail" id="form__input" />
                <button id="form__accept">Подписаться</button>
            </form>
            <img src="./img/form-image.jpg" alt="decorate img for form" />
        </section>
    );
}

export default SubBlock;
