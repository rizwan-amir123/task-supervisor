import Header from '../components/Header.js'
import Add from '../components/Add.js'
import Footer from '../components/Footer.js'
import LogoImg from '../../../public/ts_2.png'
import HeroImg from '../../../public/hero.png'
export default function Main() {
  return (
    <div>
      <Header src={LogoImg}/>
      <Add />
      <Footer/>
    </div>
  );
};