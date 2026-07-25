import Hero from "../components/Hero";
import About from "../components/About";

export default function Home({ nextEvent }) {
    return (
        <>
            <Hero nextEvent={nextEvent} />
            <About />
        </>
    );
}