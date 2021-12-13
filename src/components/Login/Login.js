import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <Logo />
      <h1 className="login__heading">Рады видеть!</h1>
      <form className="login__form">

        <label className="login__form-item-label" htmlFor="email">E-mail</label>
        <input
          type="email"
          className="login__form-item"
          name="email"
          id="email"
          required
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="login__error login__error_type_email">Что-то пошло не так...</span>

        <label className="login__form-item-label" htmlFor="password">Пароль</label>
        <input
          type="password"
          className="login__form-item"
          name="password"
          id="password"
          required
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="login__error login__error_type_password login__error_visible">Что-то пошло не так...</span>

        <button
          type="submit"
          className="login__submit-button"
          aria-label="Отправить данные"
        >Войти</button>

      </form>
      <div className="login__register">
        <p>Ещё не зарегистрированы?&nbsp;</p>
        <Link to="/signup" className="login__register-link">Регистрация</Link>
      </div>
    </div>
  )
}
