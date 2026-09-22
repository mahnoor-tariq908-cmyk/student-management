
import { useNavigate } from "react-router-dom";

function EyeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
      />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20h9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1-1-4L16.5 3.5Z"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 11v6M14 11v6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7l1 14h10l1-14M9 7V4h6v3"
      />
    </svg>
  );
}

function StudentCard({ student, onEdit, onDelete }) {
  const navigate = useNavigate();

  const initials = student.name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#151515] p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C62828]/20 hover:bg-[#181818] hover:shadow-2xl hover:shadow-black/30">

      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C62828]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C62828]/20" />

      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#8B1E1E]/5 blur-3xl" />

      <div className="relative">

        {/* Student Header */}
        <div className="flex items-start justify-between gap-3">

          <div className="flex min-w-0 items-center gap-3">

            {/* Initials Avatar */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C62828]/25 bg-gradient-to-br from-[#351313] to-[#171111] text-sm font-bold tracking-wide text-[#F08A8A] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-[#E53935]/40">
              {initials}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-[#F1F1F1]">
                {student.name}
              </h3>

              <p className="mt-1 text-xs text-[#626262]">
                Student ID · #{student.id}
              </p>
            </div>

          </div>

          {/* Status */}
          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
              student.status === "Active"
                ? "border-[#C62828]/25 bg-[#C62828]/10 text-[#F08A8A]"
                : "border-white/10 bg-white/[0.04] text-[#999999]"
            }`}
          >
            {student.status}
          </span>

        </div>

        {/* Age & Course */}
        <div className="mt-6 grid grid-cols-2 gap-3">

          <div className="rounded-2xl border border-white/[0.06] bg-[#0F0F0F] p-3 transition-all duration-300 group-hover:border-white/[0.08] group-hover:bg-[#131313]">

            <p className="text-[10px] uppercase tracking-[0.14em] text-[#5E5E5E]">
              Age
            </p>

            <p className="mt-1.5 text-sm font-semibold text-[#DCDCDC]">
              {student.age} years
            </p>

          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-[#0F0F0F] p-3 transition-all duration-300 group-hover:border-white/[0.08] group-hover:bg-[#131313]">

            <p className="text-[10px] uppercase tracking-[0.14em] text-[#5E5E5E]">
              Course
            </p>

            <p className="mt-1.5 truncate text-sm font-semibold text-[#E49A9A]">
              {student.course}
            </p>

          </div>

        </div>

        {/* Email */}
        <div className="mt-3 rounded-2xl border border-white/[0.06] bg-[#0F0F0F] px-3 py-3">

          <p className="truncate text-xs text-[#858585]">
            {student.email}
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-2">

          <button
            onClick={() => navigate(`/students/${student.id}`)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#C62828]/20 bg-[#C62828]/10 px-3 py-2.5 text-xs font-semibold text-[#F08A8A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E53935]/30 hover:bg-[#C62828]/20 hover:text-[#FFB0B0] active:scale-95"
          >
            <EyeIcon />
            View
          </button>

          <button
            onClick={() => onEdit(student)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#A8A8A8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C62828]/25 hover:bg-[#C62828]/10 hover:text-[#F08A8A] active:scale-95"
            title="Edit student"
          >
            <EditIcon />
          </button>

          <button
            onClick={() => onDelete(student.id)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B1E1E]/20 bg-[#8B1E1E]/10 text-[#C97878] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E53935]/30 hover:bg-[#C62828]/20 hover:text-[#FF9C9C] active:scale-95"
            title="Delete student"
          >
            <TrashIcon />
          </button>

        </div>

      </div>
    </div>
  );
}

export default StudentCard;

