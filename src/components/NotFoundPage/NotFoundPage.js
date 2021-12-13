import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export default function NotFoundPage() {

  const history = useHistory();

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h2 className="not-found-page__subtitle">Страница не найдена</h2>
      <Link to="#" onClick={() => history.goBack()} className="not-found-page__link">Назад</Link>
    </div>
  )
}
