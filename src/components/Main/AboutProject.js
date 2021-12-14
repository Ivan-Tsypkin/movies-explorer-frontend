export default function AboutProject({ aboutProjectRef }) {

  return (
    <div className="about-project" ref={aboutProjectRef}>
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__about-diploma-section">
        <div>
          <h3 className="about-diploma-section__heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-diploma-section__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className="about-diploma-section__heading about-diploma-section__heading_type_last">На выполнение диплома ушло 5 недель</h3>
          <p className="about-diploma-section__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="timeline__bar timeline__one-week">1 неделя</div>
        <div className="timeline__bar timeline__four-week">4 недели</div>
        <div className="timeline__bar timeline__caption">Back-end</div>
        <div className="timeline__bar timeline__caption">Front-end</div>
      </div>
    </div>
  )
}
