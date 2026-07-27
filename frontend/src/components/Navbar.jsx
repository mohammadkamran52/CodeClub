import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 px-6 py-2 flex items-center justify-between backdrop-blur-md bg-brand-surface/80 border-b border-brand-border">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" className="h-8" alt="CodeClub logo" />

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-brand-text">
              Code<span className="text-brand-accent">Club</span>
            </span>
            <span className="text-xs text-brand-muted">IU Lucknow</span>
          </div>
        </Link>
      </div>

      <ul className="flex gap-12 text-md font-medium text-brand-muted">
        <li>
          <Link to="/" className="hover:text-brand-text transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Learning"
            className="hover:text-brand-text transition-colors"
          >
            Learning
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className="hover:text-brand-text transition-colors"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className="hover:text-brand-text transition-colors"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className="hover:text-brand-text   transition-colors"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-brand-text transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <button className="px-4 py-2 text-sm font-semibold text-brand-bg bg-brand-accent rounded-lg hover:bg-[#0d9668] transition-all cursor-pointer">
        Login with IUL Email
      </button>
    </nav>
  );
}
