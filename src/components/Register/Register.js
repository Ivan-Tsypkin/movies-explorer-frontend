import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';
import { useFormValidation } from '../../hooks/useForm';


export default function Register({ onRegisterSubmit, isLoggedIn, history }) {

  const {values, handleChange, errors, isFormValid, resetForm} = useFormValidation();

  useEffect(() => {
    if(isLoggedIn) {history.push("/")};
  });

  useEffect(() => {
    resetForm({}, {
      ...errors,
      name: 'Заполните это поле.',
      email: 'Заполните это поле.',
      password: 'Заполните это поле.'
    }, false)
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    onRegisterSubmit(values.email, values.name, values.password);
  }

  return (
    <div className="register">
      <Logo />
      <h1 className="register__heading">Добро пожаловать!</h1>
      <form className="register__form" onSubmit = {handleSubmit}>

        <label className="register__form-item-label" htmlFor="name">Имя</label>
        <input
          type="text"
          className="register__form-item"
          name="name"
          id="name"
          minLength="1"
          maxLength="60"
          required
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className="register__error register__error_type_name register__error_visible">{errors.name || ""}</span>

        <label className="register__form-item-label" htmlFor="email">E-mail</label>
        <input
          type="email"
          className="register__form-item"
          name="email"
          id="email"
          required
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className="register__error register__error_type_email register__error_visible">{errors.email || ""}</span>

        <label className="register__form-item-label" htmlFor="password">Пароль</label>
        <input
          type="password"
          className="register__form-item"
          name="password"
          id="password"
          minLength="6"
          maxLength="60"
          required
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className="register__error register__error_type_password register__error_visible">{errors.password || ""}</span>

        <button
          type="submit"
          className={`register__submit-button ${!isFormValid && `register__submit-button_disabled`}`}
          aria-label="Отправить данные"
        >Зарегистрироваться</button>

      </form>
      <div className="register__login">
        <p>Уже зарегистрированы?&nbsp;</p>
        <Link to="/signin" className="register__login-link">Войти</Link>
      </div>
    </div>
  )
}
