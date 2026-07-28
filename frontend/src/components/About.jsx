export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-stats-bg border border-transparent hover:border-brand-accent/50 transition-all hover:scale-105 backdrop-filter backdrop-blur-sm rounded-lg shadow-md p-8 z-10">
          <h3 className="text-2xl font-bold text-brand-text mb-3">
            Who We Are
          </h3>
          <p className="text-brand-muted leading-relaxed">
            Code Club is the tech heartbeat of our campus — a community where
            curiosity meets code and ideas become reality.
          </p>
        </div>

        <div className="bg-brand-stats-bg border border-transparent hover:border-brand-accent/50 transition-all hover:scale-105 backdrop-filter backdrop-blur-sm rounded-lg shadow-md p-8 z-10">
          <h3 className="text-2xl font-bold text-brand-text mb-3">
            What We're About
          </h3>
          <p className="text-brand-muted leading-relaxed">
            We focus on coding, problem-solving, and innovation through
            interactive activities and real-world tech projects that push you
            beyond the classroom.
          </p>
        </div>
      </div>
    </section>
  );
}
