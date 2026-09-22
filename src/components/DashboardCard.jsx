
function DashboardCard({
  title,
  value,
  description,
  accent,
  icon,
  percentage,
}) {
  const accentStyles = {
    red: {
      glow: "bg-[#C62828]/20",
      icon: "bg-[#C62828]/10 text-[#F08A8A]",
      progress: "from-[#E53935] to-[#8B1E1E]",
      badge:
        "border-[#C62828]/20 bg-[#C62828]/10 text-[#F08A8A]",
    },

    rose: {
      glow: "bg-[#A83A4A]/20",
      icon: "bg-[#A83A4A]/10 text-[#E69AA5]",
      progress: "from-[#E69AA5] to-[#9B3040]",
      badge:
        "border-[#A83A4A]/20 bg-[#A83A4A]/10 text-[#E69AA5]",
    },

    orange: {
      glow: "bg-[#C87535]/20",
      icon: "bg-[#C87535]/10 text-[#E2AA7D]",
      progress: "from-[#E2AA7D] to-[#A65325]",
      badge:
        "border-[#C87535]/20 bg-[#C87535]/10 text-[#E2AA7D]",
    },

    gray: {
      glow: "bg-[#777777]/15",
      icon: "bg-[#777777]/10 text-[#C5C5C5]",
      progress: "from-[#C5C5C5] to-[#666666]",
      badge:
        "border-white/10 bg-white/[0.04] text-[#C5C5C5]",
    },
  };

  const style = accentStyles[accent] || accentStyles.red;

  return (
    <div
      className="
        group relative w-full overflow-hidden
        rounded-2xl border border-white/[0.07]
        bg-[#151515]
        p-4
        shadow-xl shadow-black/20
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-[#C62828]/20
        hover:bg-[#181818]
        hover:shadow-2xl hover:shadow-black/30
        sm:rounded-[1.5rem]
        sm:p-5
        lg:rounded-[1.75rem]
      "
    >
      {/* Decorative Glow */}
      <div
        className={`
          absolute -right-10 -top-10
          h-24 w-24 rounded-full
          blur-3xl
          transition-opacity duration-500
          group-hover:opacity-80
          sm:-right-12 sm:-top-12
          sm:h-32 sm:w-32
          ${style.glow}
        `}
      />

      <div className="relative">

        {/* Top Section */}
        <div className="flex items-start justify-between gap-2 sm:items-center sm:gap-3">
          <p className="min-w-0 truncate text-xs font-medium text-[#929292] sm:text-sm">
            {title}
          </p>

          <div
            className={`
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              border border-white/[0.06]
              transition-all duration-300
              group-hover:scale-110
              group-hover:rotate-3
              sm:h-10 sm:w-10
              ${style.icon}
            `}
          >
            {icon}
          </div>
        </div>

        {/* Value + Percentage */}
        <div className="mt-5 flex items-end justify-between gap-2 sm:mt-6 sm:gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-[#F3F3F3] sm:text-3xl">
            {value}
          </h2>

          {percentage && (
            <span
              className={`
                mb-0.5 shrink-0
                rounded-full border
                px-2 py-1
                text-[9px] font-semibold
                sm:mb-1 sm:px-2.5 sm:text-[11px]
                ${style.badge}
              `}
            >
              {percentage}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="
            mt-2
            min-h-[2.5rem]
            text-[11px]
            leading-5
            text-[#666666]
            sm:text-xs
          "
        >
          {description}
        </p>

        {/* Progress Bar */}
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.06] sm:mt-5 sm:h-1.5">
          <div
            className={`
              h-full w-2/3
              rounded-full
              bg-gradient-to-r
              transition-all duration-700 ease-out
              group-hover:w-full
              ${style.progress}
            `}
          />
        </div>

      </div>
    </div>
  );
}

export default DashboardCard;

