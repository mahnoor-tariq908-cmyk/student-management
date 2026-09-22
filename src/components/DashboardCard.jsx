
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
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#151515] p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C62828]/20 hover:bg-[#181818] hover:shadow-2xl hover:shadow-black/30">

      {/* Decorative Glow */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${style.glow}`}
      />

      <div className="relative">

        {/* Top */}
        <div className="flex items-center justify-between gap-3">

          <p className="text-sm font-medium text-[#929292]">
            {title}
          </p>

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${style.icon}`}
          >
            {icon}
          </div>

        </div>

        {/* Value */}
        <div className="mt-6 flex items-end justify-between gap-3">

          <h2 className="text-3xl font-bold tracking-tight text-[#F3F3F3]">
            {value}
          </h2>

          {percentage && (
            <span
              className={`mb-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
            >
              {percentage}
            </span>
          )}

        </div>

        {/* Description */}
        <p className="mt-2 min-h-10 text-xs leading-5 text-[#666666]">
          {description}
        </p>

        {/* Progress */}
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

          <div
            className={`h-full w-2/3 rounded-full bg-gradient-to-r transition-all duration-700 ease-out group-hover:w-full ${style.progress}`}
          />

        </div>

      </div>
    </div>
  );
}

export default DashboardCard;

