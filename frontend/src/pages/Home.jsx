import Hero from "../components/Hero";
import About from "../components/About";
import StatsStrip from "../components/StatsStrip";

export default function Home({ nextEvent, stats }) {
    return (
        <>
            <Hero nextEvent={nextEvent} />
            <StatsStrip stats={stats} />
            <About />
        </>
    );
}