
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
      <section className="min-h-screen w-full overflow-x-hidden bg-[#101412] px-3 py-8 sm:px-5 sm:py-12 lg:px-8">
        <div
          className="
            mx-auto w-full max-w-xl
            rounded-2xl
            border border-white/[0.07]
            bg-[#171C19]
            p-6
            text-center
            shadow-2xl
            sm:rounded-[2rem]
            sm:p-8
          "
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#C87575]/20 bg-[#C87575]/10 text-lg font-semibold text-[#D99A9A] sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl">
            !
          </div>

          <h1 className="mt-4 text-xl font-semibold text-[#F1F3EE] sm:mt-5 sm:text-2xl">
            Student not found
          </h1>

          <p className="mt-2 text-xs leading-6 text-[#737F77] sm:text-sm">
            The student record you are looking for does not exist.
          </p>

          <Link
            to="/students"
            className="
              mt-5 inline-flex min-h-11
              items-center justify-center
              rounded-xl
              bg-gradient-to-r
              from-[#789B78] to-[#526D57]
              px-5 py-3
              text-xs font-semibold text-white
              shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              hover:from-[#88AA87]
              hover:to-[#607C65]
              active:scale-95
              sm:mt-6 sm:text-sm
            "
          >
            Back to Students
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-[#101412] px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* Back Button */}
        <Link
          to="/students"
          className="
            group inline-flex
            min-h-10
            items-center gap-2
            text-xs font-medium
            text-[#7F8A82]
            transition-all duration-300
            hover:-translate-x-1
            hover:text-[#DCE2DB]
            sm:text-sm
          "
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Students
        </Link>

        {/* Main Profile */}
        <div
          className="
            relative mt-4
            overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-[#171C19]
            shadow-2xl
            sm:mt-6
            sm:rounded-[2rem]
          "
        >
          {/* Decorative Background */}
          <div
            className="
              absolute -right-16 -top-16
              h-40 w-40 rounded-full
              bg-[#789B78]/10 blur-3xl
              sm:-right-20 sm:-top-20
              sm:h-64 sm:w-64
            "
          />

          <div
            className="
              absolute -bottom-16 -left-14
              h-40 w-40 rounded-full
              bg-[#A28BC4]/10 blur-3xl
              sm:-bottom-24 sm:-left-20
              sm:h-64 sm:w-64
            "
          />

          <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">

            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">

              <div className="min-w-0">

                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#789B78] sm:text-xs sm:tracking-[0.2em]">
                  Student Profile
                </p>

                <h1
                  className="
                    mt-2
                    break-words
                    font-serif
                    text-3xl
                    italic
                    leading-tight
                    text-[#F1F3EE]
                    sm:mt-3
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {student.name}
                </h1>

                <p className="mt-2 text-xs text-[#737F77] sm:text-sm">
                  Academic information and student record
                </p>

              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">

                <span
                  className={`rounded-full border px-2.5 py-1.5 text-[10px] font-semibold sm:px-3 sm:text-xs ${
                    student.status === "Active"
                      ? "border-[#789B78]/25 bg-[#789B78]/10 text-[#B6CDB0]"
                      : "border-[#D3A85C]/25 bg-[#D3A85C]/10 text-[#E4C58A]"
                  }`}
                >
                  {student.status}
                </span>

                <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-[#89948C] sm:px-3 sm:text-xs">
                  Student #{student.id}
                </span>

              </div>

            </div>

            {/* Information Cards */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

              {/* Age */}
              <div
                className="
                  group min-w-0
                  rounded-2xl
                  border border-white/[0.06]
                  bg-[#111613]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#789B78]/20
                  hover:bg-[#141A16]
                  sm:p-5
                "
              >
                <div className="flex items-center justify-between">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#68736C] sm:text-[10px] sm:tracking-[0.15em]">
                    Age
                  </p>

                  <span className="text-[10px] text-[#789B78] sm:text-xs">
                    01
                  </span>

                </div>

                <p className="mt-3 text-xl font-bold text-[#E7EBE5] sm:mt-4 sm:text-2xl">
                  {student.age}
                  <span className="ml-1 text-xs font-medium text-[#68736C] sm:text-sm">
                    years
                  </span>
                </p>

                <p className="mt-1 text-[10px] text-[#59635D] sm:text-xs">
                  Personal information
                </p>
              </div>

              {/* Course */}
              <div
                className="
                  group min-w-0
                  rounded-2xl
                  border border-white/[0.06]
                  bg-[#111613]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#A28BC4]/20
                  hover:bg-[#141A16]
                  sm:p-5
                "
              >
                <div className="flex items-center justify-between">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#68736C] sm:text-[10px] sm:tracking-[0.15em]">
                    Course
                  </p>

                  <span className="text-[10px] text-[#A28BC4] sm:text-xs">
                    02
                  </span>

                </div>

                <p className="mt-3 truncate text-lg font-bold text-[#CDBDE0] sm:mt-4 sm:text-xl">
                  {student.course}
                </p>

                <p className="mt-1 text-[10px] text-[#59635D] sm:text-xs">
                  Current enrollment
                </p>
              </div>

              {/* Status */}
              <div
                className="
                  group min-w-0
                  rounded-2xl
                  border border-white/[0.06]
                  bg-[#111613]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#D3A85C]/20
                  hover:bg-[#141A16]
                  sm:p-5
                "
              >
                <div className="flex items-center justify-between">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#68736C] sm:text-[10px] sm:tracking-[0.15em]">
                    Status
                  </p>

                  <span className="text-[10px] text-[#D3A85C] sm:text-xs">
                    03
                  </span>

                </div>

                <p
                  className={`mt-3 text-lg font-bold sm:mt-4 sm:text-xl ${
                    student.status === "Active"
                      ? "text-[#B6CDB0]"
                      : "text-[#E4C58A]"
                  }`}
                >
                  {student.status}
                </p>

                <p className="mt-1 text-[10px] text-[#59635D] sm:text-xs">
                  Current student status
                </p>
              </div>

            </div>

            {/* Email Card */}
            <div
              className="
                group mt-3 min-w-0
                rounded-2xl
                border border-white/[0.06]
                bg-[#111613]
                p-4
                transition-all duration-300
                hover:border-[#7396B8]/20
                hover:bg-[#141A16]
                sm:mt-4 sm:p-5
              "
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="min-w-0">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#68736C] sm:text-[10px] sm:tracking-[0.15em]">
                    Email Address
                  </p>

                  <p className="mt-2 break-all text-xs font-semibold text-[#DCE2DB] sm:text-sm">
                    {student.email}
                  </p>

                </div>

                <span className="self-start rounded-xl bg-[#7396B8]/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#B5C9DD] sm:self-center sm:text-[10px]">
                  Contact
                </span>

              </div>
            </div>

            {/* Summary */}
            <div
              className="
                mt-4
                rounded-2xl
                border border-white/[0.06]
                bg-gradient-to-r
                from-[#1D2821] to-[#211D2C]
                p-4
                sm:mt-6 sm:p-5
              "
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#789B78] sm:text-[10px] sm:tracking-[0.18em]">
                Profile Summary
              </p>

              <p className="mt-2 text-xs leading-6 text-[#89948C] sm:text-sm">
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
        <div className="px-2 pb-8 pt-6 text-center sm:pb-10 sm:pt-7">

          <p className="font-serif text-base italic text-[#A8B5A7] sm:text-lg">
            Student information, beautifully organized.
          </p>

          <p className="mt-2 text-[10px] text-[#59635D] sm:text-xs">
            StudentHub · Student Management Dashboard
          </p>

        </div>

      </div>
    </section>
  );
}

export default StudentDetails;

