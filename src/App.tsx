import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageBanner from './components/ImageBanner';
import Schedule from './components/Schedule';
import Travel from './components/Travel';
import RSVP from './components/RSVP';

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
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
