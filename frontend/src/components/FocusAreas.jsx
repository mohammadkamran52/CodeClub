function FocusAreaCard({ title, description, icon: Icon }) {
  return (
    <div className=" text-brand-text bg-brand-stats-bg backdrop-filter backdrop-blur-sm rounded-lg shadow-md p-6 text-center border border-transparent hover:border-brand-accent/50 transition-all hover:scale-105 z-10">
      <Icon className="w-15 h-15 text-brand-accent mb-4 mx-auto" />
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-brand-muted">{description}</p>
    </div>
  );
}

export default function FocusAreas({ focusAreas }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 mt-17  mb-17">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focusAreas.map((area) => {
          return <FocusAreaCard key={area.title} {...area} />;
        })}
      </div>
    </section>
  );
}
