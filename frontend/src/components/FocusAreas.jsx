function FocusAreaCard({ title, description, icon: Icon }) {
  return (
    <div className="text-brand-text bg-brand-stats-bg backdrop-filter backdrop-blur-sm rounded-lg shadow-md p-6 text-center border border-transparent hover:border-brand-accent/50 transition-colors z-10">
      <Icon className="w-10 h-10 text-brand-accent mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-brand-muted">{description}</p>
    </div>
  );
}

export default function FocusAreas({ focusAreas }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focusAreas.map((area) => {
          return <FocusAreaCard key={area.title} {...area} />;
        })}
      </div>
    </section>
  );
}
