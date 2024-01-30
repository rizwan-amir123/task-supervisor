import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Footer from './components/Footer.js'
import LogoImg from '../../public/ts_2.png'
import HeroImg from '../../public/hero2.png'
export default function Home() {
  return (
    <div>
      <Header src={LogoImg}/>
      <Hero src={HeroImg}/>
      <Footer/>
    </div>
  );
};