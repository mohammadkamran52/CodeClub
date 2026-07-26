import Hero from "../components/Hero";
import About from "../components/About";
import StatsStrip from "../components/StatsStrip";
import FocusAreas from "../components/FocusAreas";
import Gallery from "../components/Gallery";

export default function Home({ nextEvent, stats, focusAreas, galleryItems }) {
    return (
      <>
        <Hero nextEvent={nextEvent} />
        <StatsStrip stats={stats} />
        <FocusAreas focusAreas={focusAreas} />
        <Gallery galleryItems={galleryItems} />
        <About />
      </>
    );
}