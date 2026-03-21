import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageBanner from './components/ImageBanner';
import Schedule from './components/Schedule';
import Travel from './components/Travel';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import Slovak from './components/Slovak';
import Tourism from './components/Tourism';

function Home() {
  return (
    <>
      <Hero />
      <ImageBanner />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/slovak" element={<Slovak />} />
          <Route path="/tourism" element={<Tourism />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
