import FloatingSquares from "./components/FloatingSquares";
import Navbar from "./components/Navbar";
import Gradients from "./components/Gradients";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Learning from "./pages/Learning";

import {events} from "./data/mockEvents.js";
import { getNextEvent } from "./utils/getNextEvent.js";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const nextEvent = getNextEvent(events);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text relative flex flex-col items-center justify-center overflow-hidden">
      <Navbar />
      {/* <Gradients /> */}

      <div className="flex-grow flex flex-col items-center w-full mt-8">
        <Routes>
          <Route path="/" element={<Home nextEvent={nextEvent} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </div>

      <FloatingSquares />
    </div>
  );
}
