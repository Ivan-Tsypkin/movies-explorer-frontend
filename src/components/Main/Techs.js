export default function Techs({ techsRef }) {

  return (
    <div className="techs" id="techs" ref={techsRef}>
      <div className="techs__section">
        <h2 className="techs__heading">Технологии</h2>
        <h3 className="techs__sub-heading">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <div className="techs__tools">
          <div className="techs__tool">HTML</div>
          <div className="techs__tool">CSS</div>
          <div className="techs__tool">JS</div>
          <div className="techs__tool">React</div>
          <div className="techs__tool">Git</div>
          <div className="techs__tool">Express.js</div>
          <div className="techs__tool">mongoDB</div>
        </div>
      </div>
    </div>
  )
}
