import Promo from './Promo';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import Portfolio from './Portfolio';
import { useRef } from 'react'

export default function Main() {

  const techsRef = useRef(null);
  const aboutProjectRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <>
      <Promo />
      <NavTab
        aboutProjectRef={aboutProjectRef}
        techsRef={techsRef}
        portfolioRef={portfolioRef}
      />
      <AboutProject aboutProjectRef={aboutProjectRef}/>
      <Techs techsRef={techsRef}/>
      <Portfolio portfolioRef={portfolioRef} />
    </>
  )
}
