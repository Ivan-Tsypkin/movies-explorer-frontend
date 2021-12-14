import { Link } from 'react-router-dom';

export default function NavTab({ aboutProjectRef, techsRef, portfolioRef }) {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  return (
    <nav className="navtab">
      <ul className="navtab__links-list">
        <li className="navtab__links-list-item"><Link to="/" onClick={() => scrollToRef(aboutProjectRef)} className="navtab__link">О проекте</Link></li>
        <li className="navtab__links-list-item"><Link to="/" onClick={() => scrollToRef(techsRef)} className="navtab__link">Технологии</Link></li>
        <li className="navtab__links-list-item"><Link to="/" onClick={() => scrollToRef(portfolioRef)} className="navtab__link">Студент</Link></li>
      </ul>
    </nav>
  )
}
