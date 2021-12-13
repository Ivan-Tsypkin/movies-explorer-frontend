import Logo from '../Logo/Logo';
import { Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';


export default function Header() {

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


      <Route path="/movies">
        <header className = "header">
          <div className="header__section">
            <Logo />

            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleOpenBurgerMenu={handleOpenBurgerMenu}>
              <ul className="header__links-list header__links-list_type_burger-menu">
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Главная</Link>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/movies"
                    className="header__link header__link_type_burger-menu header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >Фильмы</Link>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/saved-movies"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Сохранённые фильмы</Link>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/profile"
                    className="header__link header__link_type_burger-menu header__profile-link"
                    onClick={() => handleOpenBurgerMenu()}
                  >
                    <div className="header__profile-button">
                      Аккаунт
                      <div className="header__profile-icon"></div>
                    </div>
                  </Link>
                </li>
              </ul>
            </BurgerMenu>

            <ul className="header__links-list header__links-list_type_content">
              <li className="header__links-list-item"><Link to="/movies" className="header__link header__link_type_active">Фильмы</Link></li>
              <li className="header__links-list-item"><Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link></li>
              <li className="header__links-list-item">
                <Link to="/profile" className="header__link header__profile-link">
                  <div className="header__profile-button">
                    Аккаунт
                    <div className="header__profile-icon"></div>
                  </div>
                </Link>
              </li>
            </ul>

          </div>
        </header>
      </Route>


      <Route path="/saved-movies">
        <header className = "header">
          <div className="header__section">
            <Logo />

            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleOpenBurgerMenu={handleOpenBurgerMenu}>
              <ul className="header__links-list header__links-list_type_burger-menu">
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Главная</Link>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/movies"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Фильмы</Link>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/saved-movies"
                    className="header__link header__link_type_burger-menu header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >Сохранённые фильмы</Link>
                </li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/profile"
                    className="header__link header__link_type_burger-menu header__profile-link"
                    onClick={() => handleOpenBurgerMenu()}
                  >
                    <div className="header__profile-button">
                      Аккаунт
                      <div className="header__profile-icon"></div>
                    </div>
                  </Link>
                </li>
              </ul>
            </BurgerMenu>

            <ul className="header__links-list header__links-list_type_content">
              <li className="header__links-list-item"><Link to="/movies" className="header__link">Фильмы</Link></li>
              <li className="header__links-list-item"><Link to="/saved-movies" className="header__link header__link_type_active">Сохранённые фильмы</Link></li>
              <li className="header__links-list-item">
                <Link to="/profile" className="header__link header__profile-link">
                  <div className="header__profile-button">
                    Аккаунт
                    <div className="header__profile-icon"></div>
                  </div>
                </Link>
              </li>
            </ul>

          </div>
        </header>
      </Route>


      <Route path="/profile">
        <header className = "header">
          <div className="header__section">
            <Logo />

            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleOpenBurgerMenu={handleOpenBurgerMenu}>
              <ul className="header__links-list header__links-list_type_burger-menu">
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Главная</Link></li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/movies"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Фильмы</Link></li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/saved-movies"
                    className="header__link header__link_type_burger-menu"
                    onClick={() => handleOpenBurgerMenu()}
                  >Сохранённые фильмы</Link></li>
                <li className="header__links-list-item header__links-list-item_type_burger-menu">
                  <Link
                    to="/profile"
                    className="header__link header__link_type_burger-menu header__profile-link header__link_type_active"
                    onClick={() => handleOpenBurgerMenu()}
                  >
                    <div className="header__profile-button">
                      Аккаунт
                      <div className="header__profile-icon"></div>
                    </div>
                  </Link>
                </li>
              </ul>
            </BurgerMenu>

            <ul className="header__links-list  header__links-list_type_content">
              <li className="header__links-list-item"><Link to="/movies" className="header__link">Фильмы</Link></li>
              <li className="header__links-list-item"><Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link></li>
              <li className="header__links-list-item">
                <Link to="/profile" className="header__link header__profile-link header__link_type_active">
                  <div className="header__profile-button">
                    Аккаунт
                    <div className="header__profile-icon"></div>
                  </div>
                </Link>
              </li>
            </ul>

          </div>
        </header>
      </Route>


    </Switch>
  )
}
