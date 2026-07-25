export default function About() {
    return (
      <section className="w-full max-w-6xl mx-auto px-6 py-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
              Empowering Next-Gen{" "}
              <span className="text-brand-accent">Engineers</span>
            </h2>

            <p className="text-lg text-brand-muted leading-relaxed mb-6">
              The Code Club serves as a launchpad for aspiring software
              engineers. Focus shifts from theoretical concepts to
              production-grade development, mastering algorithms, and
              collaborating on high-impact projects.
            </p>

            <ul className="space-y-4 text-brand-text font-medium">
              <li className="flex items-center gap-3">
                <span className="text-brand-accent text-xl">▹</span> Data
                Structures & Algorithms
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-accent text-xl">▹</span> MERN Stack
                Development
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-accent text-xl">▹</span> Competitive
                Hackathons
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}