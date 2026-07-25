export default function Gradients() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-primary to-transparent opacity-50"></div>
    </div>
  );
}