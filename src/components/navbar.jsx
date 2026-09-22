
import { NavLink } from "react-router-dom";

function HomeIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10.5 12 3l9 7.5M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"
      />
    </svg>
  );
}

function StudentsIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
      />
      <circle cx="9.5" cy="7" r="3.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11a3.5 3.5 0 1 0-1.5-6.65M21 21v-2a4 4 0 0 0-3-3.87"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 11v5" />
      <circle cx="12" cy="7.5" r=".7" fill="currentColor" />
    </svg>
  );
}

function Navbar() {
  const navStyle = ({ isActive }) =>
    `group relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
      isActive
        ? "bg-[#C62828]/15 text-[#F08A8A] shadow-sm shadow-[#C62828]/10"
        : "text-[#8A8A8A] hover:bg-white/[0.05] hover:text-[#F5F5F5]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0B0B]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#C62828]/30 bg-gradient-to-br from-[#3A1111] to-[#171111] shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#E53935]/60 group-hover:shadow-[#C62828]/10">

            <div className="absolute h-5 w-5 rounded-full border border-[#E53935]/50" />

            <div className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />

          </div>

          <div className="hidden sm:block">
            <h1 className="font-serif text-[18px] font-semibold tracking-tight text-[#F5F5F5]">
              Stude
              <span className="text-[15px] text-[#E53935]">
                n
              </span>
              t<span className="text-[#E53935]">Hub</span>
            </h1>

            <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.22em] text-[#666666]">
              Student Management
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-1 rounded-2xl border border-white/[0.07] bg-[#151515] p-1">

          <NavLink
            to="/"
            end
            className={navStyle}
          >
            <HomeIcon />
            <span className="hidden sm:inline">
              Dashboard
            </span>
          </NavLink>

          <NavLink
            to="/students"
            className={navStyle}
          >
            <StudentsIcon />
            <span className="hidden sm:inline">
              Students
            </span>
          </NavLink>

          <NavLink
            to="/about"
            className={navStyle}
          >
            <InfoIcon />
            <span className="hidden sm:inline">
              About
            </span>
          </NavLink>

        </nav>

        {/* Profile */}
        <div className="flex items-center gap-2 sm:gap-3">

          <div className="hidden text-right md:block">
            <p className="text-xs font-semibold text-[#E8E8E8]">
              Mahnoor
            </p>

            <p className="mt-0.5 text-[10px] text-[#666666]">
              Administrator
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C62828]/30 bg-gradient-to-br from-[#C62828] to-[#721818] text-xs font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#C62828]/20">
            M
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
