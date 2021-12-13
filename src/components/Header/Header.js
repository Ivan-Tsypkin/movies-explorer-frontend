import Logo from '../Logo/Logo';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';


export default function Header1() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleOpenBurgerMenu = () => {
    isBurgerMenuOpen ? setIsBurgerMenuOpen(false) : setIsBurgerMenuOpen(true);
  }

  return (
    <Switch>

      <Route exact path="/">
        <header className = "header header_type_landing">
          <div className="header__section header__section_type_landing">
            <Logo />
            <ul className="header__links-list header__links-list_type_landing">
              <li className="header__links-list-item header__links-list-item_type_landing"><Link to="/signup" className="header__link header__link_type_landing">Регистрация</Link></li>
              <li className="header__links-list-item header__links-list-item_type_landing">
                <Link to="/signin" className="header__link header__link_type_landing">
                  <div className="header__login">Войти</div>
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </Route>

      <Route path="*">
        <header className="header">
          <div className="header__section">
            <Logo />

            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleOpenBurgerMenu={handleOpenBurgerMenu}>
              <ul className="header__links-list header__links-list_type_burger-menu">
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <NavLink
                    exact to="/"
                    className="header__link header__link_type_burger-menu"
                    activeClassName="header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >Главная</NavLink>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <NavLink
                    to="/movies"
                    className="header__link header__link_type_burger-menu"
                    activeClassName="header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >Фильмы</NavLink>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <NavLink
                    to="/saved-movies"
                    className="header__link header__link_type_burger-menu"
                    activeClassName="header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >Сохранённые фильмы</NavLink>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <NavLink
                    to="/profile"
                    className="header__link header__link_type_burger-menu header__profile-link"
                    activeClassName="header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >
                    <div className="header__profile-button">
                      Аккаунт
                      <div className="header__profile-icon"></div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </BurgerMenu>

            <ul className="header__links-list header__links-list_type_content">
              <li className="header__links-list-item">
                <NavLink
                  to="/movies"
                  className="header__link"
                  activeClassName="header__link_type_active"
                >Фильмы</NavLink>
              </li>
              <li className="header__links-list-item">
                <NavLink
                  to="/saved-movies"
                  className="header__link"
                  activeClassName="header__link_type_active"
                >Сохранённые фильмы</NavLink>
              </li>
              <li className="header__links-list-item">
                <NavLink
                  to="/profile"
                  className="header__link header__profile-link"
                  activeClassName="header__link_type_active"
                >
                  <div className="header__profile-button">
                    Аккаунт
                    <div className="header__profile-icon"></div>
                  </div>
                </NavLink>
              </li>
            </ul>

          </div>
        </header>
      </Route>

    </Switch>
  )
}
