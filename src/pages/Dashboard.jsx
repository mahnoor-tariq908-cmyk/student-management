
import { useContext } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import { StudentContext } from "../context/StudentContext";

function Dashboard() {
  const { students } = useContext(StudentContext);

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const totalCourses = new Set(
    students.map((student) => student.course)
  ).size;

  const activePercentage =
    totalStudents > 0
      ? Math.round((activeStudents / totalStudents) * 100)
      : 0;

  const recentStudents = [...students].slice(-4).reverse();

  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-[#0B0B0B] px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Hero */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-gradient-to-br from-[#171111] via-[#191515] to-[#211416]
            shadow-2xl
            sm:rounded-[2rem]
          "
        >
          {/* Decorative Glows */}
          <div
            className="
              absolute -right-16 -top-16
              h-48 w-48 rounded-full
              bg-[#C62828]/10 blur-3xl
              sm:-right-20 sm:-top-24
              sm:h-72 sm:w-72
            "
          />

          <div
            className="
              absolute -bottom-16 left-1/3
              h-40 w-40 rounded-full
              bg-[#8B1E1E]/10 blur-3xl
              sm:-bottom-24
              sm:h-64 sm:w-64
            "
          />

          <div
            className="
              relative grid
              gap-7
              p-5
              sm:gap-8 sm:p-8
              lg:grid-cols-[1.2fr_0.8fr]
              lg:p-10
            "
          >
            {/* Hero Content */}
            <div className="min-w-0">

              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E05A5A] sm:text-xs sm:tracking-[0.2em]">
                Student Management
              </p>

              <h1
                className="
                  mt-3
                  max-w-2xl
                  font-serif
                  text-3xl
                  italic
                  leading-[1.15]
                  text-[#F5F5F5]
                  sm:mt-4 sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Everything in one
                <span className="text-[#E53935]">
                  {" "}place.
                </span>
              </h1>

              <p
                className="
                  mt-4 max-w-xl
                  text-xs leading-6
                  text-[#858585]
                  sm:mt-5 sm:text-sm sm:leading-7
                  md:text-base
                "
              >
                A clearer view of your students, courses and academic
                records. Manage everything from one organized dashboard.
              </p>

              <Link
                to="/students"
                className="
                  mt-6 inline-flex
                  min-h-11
                  items-center justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-[#C62828] to-[#7D1D1D]
                  px-4 py-3
                  text-xs font-semibold text-white
                  shadow-lg shadow-[#C62828]/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:from-[#E53935]
                  hover:to-[#982222]
                  hover:shadow-xl
                  hover:shadow-[#C62828]/20
                  active:scale-95
                  sm:mt-7 sm:px-5 sm:text-sm
                "
              >
                Manage Students →
              </Link>

            </div>

            {/* Hero Image */}
            <div className="hidden min-w-0 lg:flex lg:items-center lg:justify-end">

              <div className="relative w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151515] shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
                  alt="Students working together"
                  className="
                    h-56 w-full object-cover
                    transition-transform duration-700
                    hover:scale-105
                    xl:h-72
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">

                  <p className="text-[10px] uppercase tracking-wider text-[#E59A9A] sm:text-xs">
                    Your workspace
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                    Simple. Organized. Connected.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-6 xl:grid-cols-4">

          <DashboardCard
            title="Total Students"
            value={totalStudents}
            description="Students currently in your records."
            accent="red"
            percentage={`${activePercentage}% active`}
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="7" r="3" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 4.5a3 3 0 0 1 0 5.8M21 21v-2a4 4 0 0 0-3-3.87"
                />
              </svg>
            }
          />

          <DashboardCard
            title="Active Students"
            value={activeStudents}
            description="Students with an active status."
            accent="rose"
            percentage={`${activePercentage}%`}
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 6 9 17l-5-5"
                />
              </svg>
            }
          />

          <DashboardCard
            title="Inactive Students"
            value={inactiveStudents}
            description="Students currently marked inactive."
            accent="orange"
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6 6 18"
                />
              </svg>
            }
          />

          <DashboardCard
            title="Total Courses"
            value={totalCourses}
            description="Different courses in your records."
            accent="gray"
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6.5 12 3l8 3.5L12 10 4 6.5Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9v5l6 3 6-3V9"
                />
              </svg>
            }
          />

        </div>

        {/* Lower Section */}
        <div className="mt-5 grid gap-5 sm:mt-6 lg:grid-cols-[1.5fr_0.8fr]">

          {/* Recent Students */}
          <div className="min-w-0 rounded-2xl border border-white/[0.07] bg-[#151515] p-4 shadow-xl shadow-black/20 sm:rounded-3xl sm:p-6">

            <div className="flex items-start justify-between gap-3">

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C62828] sm:text-xs sm:tracking-[0.18em]">
                  Directory
                </p>

                <h2 className="mt-1 font-serif text-xl italic text-[#F5F5F5] sm:text-2xl">
                  Recent students
                </h2>
              </div>

              <Link
                to="/students"
                className="
                  shrink-0
                  pt-1
                  text-[10px]
                  font-semibold
                  text-[#E05A5A]
                  transition-all duration-300
                  hover:-translate-x-0.5
                  hover:text-[#FF7777]
                  sm:text-xs
                "
              >
                View all →
              </Link>

            </div>

            <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">

              {recentStudents.map((student, index) => (
                <Link
                  key={student.id}
                  to={`/students/${student.id}`}
                  className="
                    group flex min-w-0
                    items-center justify-between
                    gap-2
                    rounded-xl
                    border border-white/[0.05]
                    bg-white/[0.025]
                    p-2.5
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#C62828]/20
                    hover:bg-[#1B1515]
                    sm:gap-4
                    sm:rounded-2xl
                    sm:p-3
                  "
                >

                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-lg
                        border border-[#C62828]/20
                        bg-[#C62828]/10
                        text-[11px] font-bold
                        text-[#E87575]
                        sm:h-10 sm:w-10
                        sm:rounded-xl
                        sm:text-xs
                      "
                    >
                      {student.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-[#E7E7E7] group-hover:text-white sm:text-sm">
                        {student.name}
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-[#666666] sm:text-xs">
                        {student.course}
                      </p>
                    </div>

                  </div>

                  <div className="shrink-0 text-right">

                    <span
                      className={`rounded-full px-2 py-1 text-[8px] font-semibold sm:px-2.5 sm:py-1 sm:text-[10px] ${
                        student.status === "Active"
                          ? "bg-[#C62828]/10 text-[#E87575]"
                          : "bg-white/[0.06] text-[#999999]"
                      }`}
                    >
                      {student.status}
                    </span>

                    <p className="mt-1.5 text-[8px] text-[#555555] sm:mt-2 sm:text-[10px]">
                      #{students.length - index}
                    </p>

                  </div>

                </Link>
              ))}

            </div>
          </div>

          {/* Quick Overview */}
          <div
            className="
              relative min-w-0 overflow-hidden
              rounded-2xl
              border border-white/[0.07]
              bg-gradient-to-br from-[#241719] to-[#151515]
              p-5
              sm:rounded-3xl sm:p-6
            "
          >

            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C62828]/10 blur-3xl sm:-right-12 sm:-top-12 sm:h-36 sm:w-36" />

            <div className="relative">

              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E05A5A] sm:text-xs sm:tracking-[0.18em]">
                Overview
              </p>

              <h2 className="mt-2 font-serif text-2xl italic leading-tight text-[#F5F5F5] sm:text-3xl">
                Your dashboard,
                <br />
                at a glance.
              </h2>

              <div className="mt-6 space-y-5 sm:mt-7">

                <div>

                  <div className="flex items-center justify-between gap-3 text-[10px] sm:text-xs">

                    <span className="text-[#858585]">
                      Active students
                    </span>

                    <span className="shrink-0 font-semibold text-[#E8A0A0]">
                      {activePercentage}%
                    </span>

                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06] sm:h-2">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#C62828] to-[#E05A5A] transition-all duration-700"
                      style={{
                        width: `${activePercentage}%`,
                      }}
                    />

                  </div>

                </div>

                <div className="border-t border-white/[0.06] pt-5">

                  <p className="text-[10px] text-[#666666] sm:text-xs">
                    Available courses
                  </p>

                  <p className="mt-1 text-2xl font-bold text-[#E7E7E7] sm:text-3xl">
                    {totalCourses}
                  </p>

                </div>

              </div>

              <Link
                to="/about"
                className="
                  mt-6 inline-flex
                  min-h-10
                  items-center
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.03]
                  px-3.5 py-2.5
                  text-[10px] font-semibold
                  text-[#B5B5B5]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#C62828]/25
                  hover:bg-[#C62828]/10
                  hover:text-white
                  active:scale-95
                  sm:mt-7 sm:px-4 sm:text-xs
                "
              >
                About StudentHub
              </Link>

            </div>
          </div>

        </div>

        <div className="h-6 sm:h-10" />

      </div>
    </section>
  );
}

export default Dashboard;
