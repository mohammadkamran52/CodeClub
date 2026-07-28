import { teamMembers } from "../data/teamMembers";
import TeamMemberCard from "../components/TeamMemberCard";      

export default function Team() {
  const featured = teamMembers.filter(
    (m) => m.category === "advisor" || m.category === "coordinator",
  );
  const members = teamMembers.filter((m) => m.category === "member");

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-brand-text mb-2">Our Team</h1>
        <p className="text-brand-muted">
          The people behind CodeClub IU Lucknow
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap mb-16">
        {featured.map((member) => (
          <TeamMemberCard key={member.id} name={member.name} role={member.role} photo={member.image} featured />
        ))}
      </div>

      <p className="text-sm text-brand-muted text-center mb-6">Members</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {members.map((member) => (
          <TeamMemberCard key={member.id} name={member.name} role={member.role} photo={member.image} />
        ))}
      </div>
    </section>
  );
}
