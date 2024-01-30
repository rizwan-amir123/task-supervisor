"use client"
import { useSearchParams } from 'next/navigation';

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import LogoImg from '../../../../public/ts_2.png'
export default function Home() {

    const searchParams = useSearchParams();

  // E.g. `/dashboard?page=2&order=asc`
  const title = searchParams.get('name');
  const desc = searchParams.get('link');
  return (
    <div>
      <Header src={LogoImg}/>
      <p>Hello, {title}</p>
      <p>Hello, {desc}</p>

      <Footer/>
    </div>
  );
};