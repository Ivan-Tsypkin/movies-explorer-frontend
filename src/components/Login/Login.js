import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';
import { useFormValidation } from '../../hooks/useForm';


export default function Login({ onLoginSubmit, isLoggedIn, history }) {

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
    onLoginSubmit(values.password, values.email);
  }

  return (
    <div className="login">
      <Logo />
      <h1 className="login__heading">Рады видеть!</h1>
      <form className="login__form" onSubmit = {handleSubmit}>

        <label className="login__form-item-label" htmlFor="email">E-mail</label>
        <input
          type="email"
          className="login__form-item"
          name="email"
          id="email"
          required
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className="login__error login__error_type_email login__error_visible">{errors.email || ""}</span>

        <label className="login__form-item-label" htmlFor="password">Пароль</label>
        <input
          type="password"
          className="login__form-item"
          name="password"
          id="password"
          minLength="6"
          maxLength="60"
          required
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className="login__error login__error_type_password login__error_visible">{errors.password || ""}</span>

        <button
          type="submit"
          className={`login__submit-button ${!isFormValid && `login__submit-button_disabled`}`}
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
