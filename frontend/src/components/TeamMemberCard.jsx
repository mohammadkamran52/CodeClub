function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TeamMemberCard({ name, role, photo, featured }) {
    const sizeClasses = featured ? "w-16 h-16 text-lg" : "w-12 h-12 text-sm";
  return (
    <div
      className={`bg-brand-stats-bg z-10 backdrop-filter backdrop-blur-sm rounded-lg text-center ${featured ? "p-6 w-44" : "p-4"} border border-transparent hover:scale-105 hover:border-brand-accent transition-all duration-300`}
      > {photo ? (
          <img
              src={photo}
              alt={name}
              className={`rounded-full object-cover mx-auto mb-3 ${sizeClasses}`}
          />
      ) : (
          <div
              className={`rounded-full bg-brand-accent text-brand-bg font-semibold flex items-center justify-center mx-auto mb-3 ${featured ? "w-16 h-16 text-lg" : "w-12 h-12 text-sm"}`}
          >
              {getInitials(name)}
          </div>)}
      <p
        className={`text-brand-text ${featured ? "text-sm font-medium" : "text-sm"}`}
      >
        {name}
      </p>
      <p
        className={`${featured ? "text-brand-accent" : "text-brand-muted"} text-xs mt-1`}
      >
        {role}
      </p>
    </div>
  );
}
