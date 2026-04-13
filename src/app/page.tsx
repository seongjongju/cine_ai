import 'swiper/css';
import 'swiper/css/scrollbar';
import './main/_styles/main.css';

import AiPick from "./main/_components/AiPick";
import Intro from "./main/_components/Intro";
import LoopCarousel from "./main/_components/LoopCarousel";
import Instructions from './main/_components/Instructions';
import HowMood from './main/_components/HowMood';
import Link from 'next/link';
import LastSection from './main/_components/LastSection';

export default async function Home() {
  return (
    <div className="wrap">
      <Intro />
      <LoopCarousel />
      <AiPick />
      <Instructions />
      <HowMood />
      <LastSection />
    </div>
  );
}
