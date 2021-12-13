import { useState } from 'react';

export default function Profile() {

  const [name, setName] = useState('Иван');
  const [email, setEmail] = useState('profile@ya.ru');
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing(true);
  }

  function handleEditSubmitButton(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="profile">
      <h1 className="profile__greetings">Привет, Иван!</h1>
      {isEditing
      ?
      <>
        <form className="profile__form">

          <label className="profile__form-item-label" htmlFor="name">Имя</label>
            <input
              type="text"
              className="profile__form-item"
              name="name"
              id="name"
              required
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          <span className="profile__error profile__error_type_name">Что-то пошло не так...</span>

          <label className="profile__form-item-label" htmlFor="email">E-mail</label>
          <input
            type="email"
            className="profile__form-item"
            name="email"
            id="email"
            required
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="profile__error profile__error_type_email profile__error_visible">Что-то пошло не так...</span>

          <button
            type="submit"
            className="profile__submit-button"
            onClick={(e) => handleEditSubmitButton(e)}
            aria-label="Отправить данные"
          >Сохранить</button>

        </form>
      </>
      :
      <>
        <div className="profile__info-bar">
          <p className="profile__name-caption">Имя</p>
          <p className="profile__name">{name}</p>
        </div>
        <div className="profile__info-bar">
          <p className="profile__name-caption profile__email-caption">E-mail</p>
          <p className="profile__name profile__email">profile1@ya.ru</p>
        </div>
        <button
          className="profile__button profile__edit-button"
          onClick={() => handleEditButton()}
          type="button"
          aria-label="Редактировать"
        >Редактировать</button>
        <button className="profile__button profile__logout-button" type="button" aria-label="Выйти из аккаунта">Выйти из аккаунта</button>
      </>}
    </div>
  )
}
