import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useForm';

export default function Profile({ onSignOut, onUpdateUser }) {

  const currentUser = useContext(CurrentUserContext);

  const {values,
    handleChange,
    errors,
    isFormValid,
    resetForm,
    setErrors,
    setIsFormValid
  } = useFormValidation();

  const [isEditing, setIsEditing] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    resetForm({
      ...values,
      name: currentUser.name,
      email: currentUser.email
    }, {
      ...errors,
      name: 'Измените имя.',
      email: 'Измените email.',
    }, false)
  }, [currentUser]);

  useEffect(() => {
    if((currentUser.name === values.name) && (currentUser.email === values.email)) {
      setIsButtonDisabled(true);
      resetForm({...values}, {
        ...errors,
        name: 'Измените имя.',
        email: 'Измените email.',
      }, false)
    } else {
      setIsButtonDisabled(false);
    }
  }, [values.name, values.email, currentUser.name, currentUser.email]);

  useEffect(() => {
    const str = values.email || "";
    if (!str.match(/.+@.+\...+/i)) {
      setErrors({...errors,
        email: 'Введите корректный e-mail.',
      });
      setIsFormValid(false)
    }
  }, [values.email])

  function handleEditButton() {
    setIsEditing(true);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    onUpdateUser(values.email, values.name);
    setIsEditing(false);
  }

  return (
    <div className="profile">
      <h1 className="profile__greetings">Привет, {currentUser.name}!</h1>
      {isEditing
      ?
      <>
        <form className="profile__form" onSubmit={handleEditSubmit}>

          <label className="profile__form-item-label" htmlFor="name">Имя</label>
            <input
              type="text"
              className="profile__form-item"
              name="name"
              id="name"
              minLength="1"
              maxLength="60"
              required
              value={values.name || ""}
              onChange={handleChange}
            />
          <span className="profile__error profile__error_type_name profile__error_visible">{errors.name || ""}</span>

          <label className="profile__form-item-label" htmlFor="email">E-mail</label>
          <input
            type="email"
            className="profile__form-item"
            name="email"
            id="email"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="profile__error profile__error_type_email profile__error_visible">{errors.email || ""}</span>

          <button
            type="submit"
            className={`profile__submit-button ${(!isFormValid || isButtonDisabled) && `profile__submit-button_disabled`}`}
            aria-label="Отправить данные"
            disabled={isButtonDisabled}
          >Сохранить</button>

        </form>

        <button
          className="profile__button profile__logout-button profile__logout-button_type_edit"
          type="button"
          aria-label="Выйти из аккаунта"
          onClick={onSignOut}
        >Выйти из аккаунта</button>
      </>
      :
      <>
        <div className="profile__info-bar">
          <p className="profile__name-caption">Имя</p>
          <p className="profile__name">{currentUser.name}</p>
        </div>
        <div className="profile__info-bar">
          <p className="profile__name-caption profile__email-caption">E-mail</p>
          <p className="profile__name profile__email">{currentUser.email}</p>
        </div>
        <button
          className="profile__button profile__edit-button"
          onClick={() => handleEditButton()}
          type="button"
          aria-label="Редактировать"
        >Редактировать</button>
        <button
          className="profile__button profile__logout-button"
          type="button"
          aria-label="Выйти из аккаунта"
          onClick={onSignOut}
        >Выйти из аккаунта</button>
      </>}
    </div>
  )
}
