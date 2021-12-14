import { Link } from 'react-router-dom';
import myFoto from '../../images/my-foto.png';

export default function Portfolio({ portfolioRef }) {

  return (
    <div className="portfolio" ref={portfolioRef}>
      <h2 className="portfolio__heading">Студент</h2>
      <div className="portfolio__about-me-section">
        <div className="portfolio__my-info">
          <h3 className="portfolio__my-name">Иван</h3>
          <p className="portfolio__my-job">Фронтенд-разработчик, 29 лет</p>
          <p className="portfolio__about-me-description">Я родился и живу в Нижнем Новгороде, закончил факультет электроэнергетики в НГТУ им. Р.Е. Алексеева. Увлекаюсь гитарой, пишу инструментальные треки в стиле рок и блюз. Люблю космос, слежу за миром астрофизики. Занимаюсь веб-разработкой, меня это вдохновляет, упорно учусь и развиваю навыки в этой области.</p>
          <ul className="portfolio__social-links-list">
            <li className="portfolio__social-links-list-item"><Link to={{pathname: "https://vk.com/interseptor"}} target={"_blank"} className="portfolio__social-link">Вконтакте</Link></li>
            <li className="portfolio__social-links-list-item"><Link to={{pathname: "https://github.com/Ivan-Tsypkin"}} target={"_blank"} className="portfolio__social-link">Github</Link></li>
          </ul>
        </div>
        <img className="portfolio__my-foto" src={myFoto} alt="Фото студента"/>
      </div>
      <h3 className="portfolio__project-links-heading">Портфолио</h3>
      <ul className="portfolio__project-links-list">
        <li className="portfolio__project-links-list-item">
          <Link to={{pathname: "https://ivan-tsypkin.github.io/how-to-learn/"}} target={"_blank"} className="portfolio__project-link">
            <div className="portfolio__project-link-plate">
              Статичный сайт
              <div className="portfolio__project-link-plate-arrow">↗</div>
            </div>
          </Link>
        </li>
        <li className="portfolio__project-links-list-item">
          <Link to={{pathname: "https://ivan-tsypkin.github.io/russian-travel/"}} target={"_blank"} className="portfolio__project-link">
            <div className="portfolio__project-link-plate">
              Адаптивный сайт
              <div className="portfolio__project-link-plate-arrow">↗</div>
            </div>
          </Link>
        </li>
        <li className="portfolio__project-links-list-item">
          <Link to={{pathname: "https://antares.nomoredomains.xyz/"}} target={"_blank"} className="portfolio__project-link">
            <div className="portfolio__project-link-plate">
              Одностраничное приложение
              <div className="portfolio__project-link-plate-arrow">↗</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
