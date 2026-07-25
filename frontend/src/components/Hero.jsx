import useTypewriter from "../hooks/useTypewriter.jsx";

export default function Hero({ nextEvent }) {

  const typewriterText = ["Developers.", "Engineers.", "Creators.", "Innovators.", "Problem Solvers.", "Leaders."];
  // const typedText = typewriterText[Math.floor(Math.random() * typewriterText.length)];

  const typedText = useTypewriter(typewriterText, 100, 1500);


    return (
      <div className="z-10 flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-20">
        {nextEvent && (
          <span className="inline-block text-sm text-brand-accent bg-brand-accent/10 rounded-full px-4 py-1 mb-5">
            {nextEvent.title} ·{" "}
            {new Date(nextEvent.event_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        )}

        {/* <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text tracking-tight mb-6">
          Build the Future with <br className="hidden md:block" />
          <span className="text-brand-accent">CodeClub</span>
        </h1> */}

        {/* <p className="text-lg md:text-xl text-brand-muted mb-10 leading-relaxed max-w-2xl">
          Join a community of developers, collaborate on open-source projects,
          and master modern software engineering. Elevate your skills from
          foundational concepts to production-ready architecture.
        </p> */}

        {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-3 font-semibold text-brand-bg bg-brand-accent rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            Upcoming Events
          </button>
          <button className="px-8 py-3 font-semibold text-brand-text bg-transparent border border-brand-border rounded-lg hover:bg-brand-surface transition-colors cursor-pointer">
            View Projects
          </button>
        </div> */}

        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text tracking-tight mb-4">
          Build the Future with <br className="hidden md:block" />
          <span className="text-brand-accent">CodeClub</span>
        </h1>

        <p className="text-1xl md:text-2xl font-mono text-brand-muted mb-6">
          We turn students into{" "}
          <span className="text-brand-accent">{typedText}</span>
          <span className="animate-pulse text-brand-accent">|</span>
        </p>
      </div>
    );
}