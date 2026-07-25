function StatCard({label, value}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-brand-stats-bg  p-4 z-10 mt-5 ">
            <p className="text-3xl font-bold text-brand-accent">{value}</p>
            <h3 className="text-lg font-semibold text-brand-muted">{label}</h3>
        </div>
    )
}

export default function StatsStrip( {stats} ) {
    return (
      <div className="flex justify-center grid grid-cols-2 lg:grid-cols-4 gap-20">
        {stats.map((stat, index) => {
          return <StatCard key={index} label={stat.label} value={stat.value} />;
        })}
      </div>
    );
}