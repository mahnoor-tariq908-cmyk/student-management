
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

  const recentStudents = [...students]
    .slice(-4)
    .reverse();

  return (
    <section className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-[#171111] via-[#191515] to-[#211416] shadow-2xl">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#C62828]/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#8B1E1E]/10 blur-3xl" />

          <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E05A5A]">
                Student Management
              </p>

              <h1 className="mt-4 max-w-2xl font-serif text-4xl italic leading-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                Everything in one
                <span className="text-[#E53935]">
                  {" "}place.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#858585] sm:text-base">
                A clearer view of your students, courses and academic
                records. Manage everything from one organized dashboard.
              </p>

              <Link
                to="/students"
                className="mt-7 inline-flex items-center rounded-xl bg-gradient-to-r from-[#C62828] to-[#7D1D1D] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C62828]/10 transition-all duration-300 hover:-translate-y-1 hover:from-[#E53935] hover:to-[#982222] hover:shadow-xl hover:shadow-[#C62828]/20 active:scale-95"
              >
                Manage Students →
              </Link>

            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">

              <div className="relative ml-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151515] shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
                  alt="Students working together"
                  className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-xs uppercase tracking-wider text-[#E59A9A]">
                    Your workspace
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Simple. Organized. Connected.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

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
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">

          {/* Recent Students */}
          <div className="rounded-3xl border border-white/[0.07] bg-[#151515] p-5 shadow-xl shadow-black/20 sm:p-6">

            <div className="flex items-center justify-between gap-4">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C62828]">
                  Directory
                </p>

                <h2 className="mt-1 font-serif text-2xl italic text-[#F5F5F5]">
                  Recent students
                </h2>
              </div>

              <Link
                to="/students"
                className="text-xs font-semibold text-[#E05A5A] transition-all duration-300 hover:-translate-x-0.5 hover:text-[#FF7777]"
              >
                View all →
              </Link>

            </div>

            <div className="mt-6 space-y-3">

              {recentStudents.map((student, index) => (
                <Link
                  key={student.id}
                  to={`/students/${student.id}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.025] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C62828]/20 hover:bg-[#1B1515]"
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C62828]/20 bg-[#C62828]/10 text-xs font-bold text-[#E87575]">
                      {student.name.charAt(0)}
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-semibold text-[#E7E7E7] group-hover:text-white">
                        {student.name}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-[#666666]">
                        {student.course}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        student.status === "Active"
                          ? "bg-[#C62828]/10 text-[#E87575]"
                          : "bg-white/[0.06] text-[#999999]"
                      }`}
                    >
                      {student.status}
                    </span>

                    <p className="mt-2 text-[10px] text-[#555555]">
                      #{students.length - index}
                    </p>

                  </div>

                </Link>
              ))}

            </div>
          </div>

          {/* Quick Overview */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#241719] to-[#151515] p-6">

            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#C62828]/10 blur-3xl" />

            <div className="relative">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E05A5A]">
                Overview
              </p>

              <h2 className="mt-2 font-serif text-3xl italic text-[#F5F5F5]">
                Your dashboard,
                <br />
                at a glance.
              </h2>

              <div className="mt-7 space-y-5">

                <div>

                  <div className="flex justify-between text-xs">

                    <span className="text-[#858585]">
                      Active students
                    </span>

                    <span className="font-semibold text-[#E8A0A0]">
                      {activePercentage}%
                    </span>

                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#C62828] to-[#E05A5A] transition-all duration-700"
                      style={{
                        width: `${activePercentage}%`,
                      }}
                    />

                  </div>

                </div>

                <div className="border-t border-white/[0.06] pt-5">

                  <p className="text-xs text-[#666666]">
                    Available courses
                  </p>

                  <p className="mt-1 text-3xl font-bold text-[#E7E7E7]">
                    {totalCourses}
                  </p>

                </div>

              </div>

              <Link
                to="/about"
                className="mt-7 inline-flex rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-[#B5B5B5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C62828]/25 hover:bg-[#C62828]/10 hover:text-white active:scale-95"
              >
                About StudentHub
              </Link>

            </div>
          </div>

        </div>

        <div className="h-10" />

      </div>
    </section>
  );
}

export default Dashboard;

