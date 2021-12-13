import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo';


export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="register">
      <Logo />
      <h1 className="register__heading">Добро пожаловать!</h1>
      <form className="register__form">

        <label className="register__form-item-label" htmlFor="name">Имя</label>
        <input
          type="text"
          className="register__form-item"
          name="name"
          id="name"
          required
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="register__error register__error_type_name">Что-то пошло не так...</span>

        <label className="register__form-item-label" htmlFor="email">E-mail</label>
        <input
          type="email"
          className="register__form-item"
          name="email"
          id="email"
          required
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="register__error register__error_type_email">Что-то пошло не так...</span>

        <label className="register__form-item-label" htmlFor="password">Пароль</label>
        <input
          type="password"
          className="register__form-item"
          name="password"
          id="password"
          required
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="register__error register__error_type_password register__error_visible">Что-то пошло не так...</span>

        <button
          type="submit"
          className="register__submit-button"
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
