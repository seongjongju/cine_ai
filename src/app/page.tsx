import 'swiper/css';
import 'swiper/css/scrollbar';
import './main/_styles/main.css';

import Ai_pick from "./main/_components/Ai_pick";
import Intro from "./main/_components/Intro";
import Loop_carousel from "./main/_components/Loop_carousel";
import Instructions from './main/_components/Instructions';
import How_mood from './main/_components/How_mood';

export default function Home() {
  return (
    <div className="wrap">
      <main>
        <Intro />
        <Loop_carousel />
        <Ai_pick />
        <Instructions />
        <How_mood />
      </main>
    </div>
  );
}
