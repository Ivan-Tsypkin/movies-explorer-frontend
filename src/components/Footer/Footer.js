import { Link } from 'react-router-dom';

export default function Footer() {
  const currentDate = new Date()
  return (
    <div className="footer">
      <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__date-and-links">
        <p className="footer__date">&copy; {currentDate.getFullYear()}</p>
        <ul className="footer__links-list">
          <li className="footer__links-list-item"><Link to={{pathname: "https://practicum.yandex.ru"}} target={"_blank"} className="footer__link">Яндекс.Практикум</Link></li>
          <li className="footer__links-list-item"><Link to={{pathname: "https://github.com/Ivan-Tsypkin"}} target={"_blank"} className="footer__link">Github</Link></li>
          <li className="footer__links-list-item"><Link to={{pathname: "https://vk.com/interseptor"}} target={"_blank"} className="footer__link">Вконтакте</Link></li>
        </ul>
      </div>
    </div>
  )
}
