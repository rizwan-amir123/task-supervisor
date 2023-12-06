import Header from '../components/Header.js'
import Signup from '../components/Signup.js'
import Footer from '../components/Footer.js'
import LogoImg from '../../../public/ts_2.png'
import HeroImg from '../../../public/hero.png'
import LoginImg from '../../../public/login.png'
export default function Main() {
  return (
    <div>
      <Header src={LogoImg}/>
      <Signup src={LoginImg} />
      <Footer/>
    </div>
  );
};