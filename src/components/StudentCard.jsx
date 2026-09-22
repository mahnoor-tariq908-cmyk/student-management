
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
    <div
      className="
        group relative w-full overflow-hidden
        rounded-2xl border border-white/[0.07]
        bg-[#151515]
        p-4
        shadow-xl shadow-black/20
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#C62828]/20
        hover:bg-[#181818]
        sm:rounded-[1.75rem]
        sm:p-5
      "
    >
      {/* Decorative Glow */}
      <div
        className="
          absolute -right-10 -top-10
          h-24 w-24 rounded-full
          bg-[#C62828]/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-[#C62828]/20
          sm:-right-12 sm:-top-12
          sm:h-32 sm:w-32
        "
      />

      <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-[#8B1E1E]/5 blur-3xl sm:h-24 sm:w-24" />

      <div className="relative">

        {/* Student Header */}
        <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-3">

          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

            {/* Initials Avatar */}
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                border border-[#C62828]/25
                bg-gradient-to-br from-[#351313] to-[#171111]
                text-xs font-bold tracking-wide
                text-[#F08A8A]
                shadow-lg
                transition-all duration-300
                group-hover:scale-105
                group-hover:border-[#E53935]/40
                sm:h-14 sm:w-14
                sm:rounded-2xl
                sm:text-sm
              "
            >
              {initials}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-[#F1F1F1] sm:text-[15px]">
                {student.name}
              </h3>

              <p className="mt-1 truncate text-[10px] text-[#626262] sm:text-xs">
                Student ID · #{student.id}
              </p>
            </div>

          </div>

          {/* Status */}
          <span
            className={`shrink-0 rounded-full border px-2 py-1 text-[9px] font-semibold sm:px-2.5 sm:text-[10px] ${
              student.status === "Active"
                ? "border-[#C62828]/25 bg-[#C62828]/10 text-[#F08A8A]"
                : "border-white/10 bg-white/[0.04] text-[#999999]"
            }`}
          >
            {student.status}
          </span>

        </div>

        {/* Age & Course */}
        <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">

          <div
            className="
              min-w-0 rounded-xl
              border border-white/[0.06]
              bg-[#0F0F0F]
              p-2.5
              transition-all duration-300
              group-hover:border-white/[0.08]
              group-hover:bg-[#131313]
              sm:rounded-2xl sm:p-3
            "
          >
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#5E5E5E] sm:text-[10px]">
              Age
            </p>

            <p className="mt-1.5 truncate text-xs font-semibold text-[#DCDCDC] sm:text-sm">
              {student.age} years
            </p>
          </div>

          <div
            className="
              min-w-0 rounded-xl
              border border-white/[0.06]
              bg-[#0F0F0F]
              p-2.5
              transition-all duration-300
              group-hover:border-white/[0.08]
              group-hover:bg-[#131313]
              sm:rounded-2xl sm:p-3
            "
          >
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#5E5E5E] sm:text-[10px]">
              Course
            </p>

            <p className="mt-1.5 truncate text-xs font-semibold text-[#E49A9A] sm:text-sm">
              {student.course}
            </p>
          </div>

        </div>

        {/* Email */}
        <div
          className="
            mt-2.5 rounded-xl
            border border-white/[0.06]
            bg-[#0F0F0F]
            px-3 py-2.5
            sm:mt-3
            sm:rounded-2xl
            sm:py-3
          "
        >
          <p className="truncate text-[11px] text-[#858585] sm:text-xs">
            {student.email}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2 sm:mt-5">

          {/* View */}
          <button
            onClick={() => navigate(`/students/${student.id}`)}
            className="
              flex min-w-0 flex-1
              items-center justify-center
              gap-1.5 rounded-xl
              border border-[#C62828]/20
              bg-[#C62828]/10
              px-2 py-2.5
              text-[11px] font-semibold
              text-[#F08A8A]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#E53935]/30
              hover:bg-[#C62828]/20
              hover:text-[#FFB0B0]
              active:scale-95
              sm:gap-2 sm:px-3 sm:text-xs
            "
          >
            <EyeIcon />
            <span>View</span>
          </button>

          {/* Edit */}
          <button
            onClick={() => onEdit(student)}
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              border border-white/[0.08]
              bg-white/[0.03]
              text-[#A8A8A8]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#C62828]/25
              hover:bg-[#C62828]/10
              hover:text-[#F08A8A]
              active:scale-95
            "
            title="Edit student"
          >
            <EditIcon />
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(student.id)}
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              border border-[#8B1E1E]/20
              bg-[#8B1E1E]/10
              text-[#C97878]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#E53935]/30
              hover:bg-[#C62828]/20
              hover:text-[#FF9C9C]
              active:scale-95
            "
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
