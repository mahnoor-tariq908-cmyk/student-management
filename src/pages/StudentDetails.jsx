import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function StudentDetails() {
  const { id } = useParams();
  const { students } = useContext(StudentContext);

  const student = students.find(
    (item) => item.id.toString() === id
  );

  if (!student) {
    return (
      <section className="min-h-screen bg-[#101412] px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-xl rounded-[2rem] border border-white/[0.07] bg-[#171C19] p-8 text-center shadow-2xl">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C87575]/20 bg-[#C87575]/10 text-xl font-semibold text-[#D99A9A]">
            !
          </div>

          <h1 className="mt-5 text-2xl font-semibold text-[#F1F3EE]">
            Student not found
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#737F77]">
            The student record you are looking for does not exist.
          </p>

          <Link
            to="/students"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-[#789B78] to-[#526D57] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-[#88AA87] hover:to-[#607C65] active:scale-95"
          >
            Back to Students
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#101412] px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-[1100px]">

        {/* Back Button */}
        <Link
          to="/students"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[#7F8A82] transition-all duration-300 hover:-translate-x-1 hover:text-[#DCE2DB]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Students
        </Link>

        {/* Main Profile */}
        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#171C19] shadow-2xl">

          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#789B78]/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#A28BC4]/10 blur-3xl" />

          <div className="relative p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789B78]">
                  Student Profile
                </p>

                <h1 className="mt-3 font-serif text-4xl italic leading-tight text-[#F1F3EE] sm:text-5xl">
                  {student.name}
                </h1>

                <p className="mt-2 text-sm text-[#737F77]">
                  Academic information and student record
                </p>

              </div>

              <div className="flex flex-wrap gap-2">

                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    student.status === "Active"
                      ? "border-[#789B78]/25 bg-[#789B78]/10 text-[#B6CDB0]"
                      : "border-[#D3A85C]/25 bg-[#D3A85C]/10 text-[#E4C58A]"
                  }`}
                >
                  {student.status}
                </span>

                <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#89948C]">
                  Student #{student.id}
                </span>

              </div>

            </div>

            {/* Information Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* Age */}
              <div className="group rounded-2xl border border-white/[0.06] bg-[#111613] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#789B78]/20 hover:bg-[#141A16]">

                <div className="flex items-center justify-between">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68736C]">
                    Age
                  </p>

                  <span className="text-xs text-[#789B78]">
                    01
                  </span>

                </div>

                <p className="mt-4 text-2xl font-bold text-[#E7EBE5]">
                  {student.age}
                  <span className="ml-1 text-sm font-medium text-[#68736C]">
                    years
                  </span>
                </p>

                <p className="mt-1 text-xs text-[#59635D]">
                  Personal information
                </p>

              </div>

              {/* Course */}
              <div className="group rounded-2xl border border-white/[0.06] bg-[#111613] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A28BC4]/20 hover:bg-[#141A16]">

                <div className="flex items-center justify-between">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68736C]">
                    Course
                  </p>

                  <span className="text-xs text-[#A28BC4]">
                    02
                  </span>

                </div>

                <p className="mt-4 truncate text-xl font-bold text-[#CDBDE0]">
                  {student.course}
                </p>

                <p className="mt-1 text-xs text-[#59635D]">
                  Current enrollment
                </p>

              </div>

              {/* Status */}
              <div className="group rounded-2xl border border-white/[0.06] bg-[#111613] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D3A85C]/20 hover:bg-[#141A16]">

                <div className="flex items-center justify-between">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68736C]">
                    Status
                  </p>

                  <span className="text-xs text-[#D3A85C]">
                    03
                  </span>

                </div>

                <p
                  className={`mt-4 text-xl font-bold ${
                    student.status === "Active"
                      ? "text-[#B6CDB0]"
                      : "text-[#E4C58A]"
                  }`}
                >
                  {student.status}
                </p>

                <p className="mt-1 text-xs text-[#59635D]">
                  Current student status
                </p>

              </div>

            </div>

            {/* Email Card */}
            <div className="group mt-4 rounded-2xl border border-white/[0.06] bg-[#111613] p-5 transition-all duration-300 hover:border-[#7396B8]/20 hover:bg-[#141A16]">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68736C]">
                    Email Address
                  </p>

                  <p className="mt-2 break-all text-sm font-semibold text-[#DCE2DB]">
                    {student.email}
                  </p>

                </div>

                <span className="self-start rounded-xl bg-[#7396B8]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#B5C9DD] sm:self-center">
                  Contact
                </span>

              </div>

            </div>

            {/* Summary */}
            <div className="mt-6 rounded-2xl border border-white/[0.06] bg-gradient-to-r from-[#1D2821] to-[#211D2C] p-5">

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#789B78]">
                Profile Summary
              </p>

              <p className="mt-2 text-sm leading-6 text-[#89948C]">
                {student.name} is currently enrolled in{" "}
                <span className="font-medium text-[#CDBDE0]">
                  {student.course}
                </span>{" "}
                and has an{" "}
                <span
                  className={
                    student.status === "Active"
                      ? "font-medium text-[#B6CDB0]"
                      : "font-medium text-[#E4C58A]"
                  }
                >
                  {student.status.toLowerCase()}
                </span>{" "}
                student record.
              </p>

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="pb-10 pt-7 text-center">

          <p className="font-serif text-lg italic text-[#A8B5A7]">
            Student information, beautifully organized.
          </p>

          <p className="mt-2 text-xs text-[#59635D]">
            StudentHub · Student Management Dashboard
          </p>

        </div>

      </div>

    </section>
  );
}

export default StudentDetails;