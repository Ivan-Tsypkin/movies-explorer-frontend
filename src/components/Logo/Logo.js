import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

export default function Logo() {

  return (
    <Link to="/" className="logo__link">
      <img className="logo" src={headerLogo} alt="Логотип"/>
    </Link>
  )
}
