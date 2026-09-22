
import { useContext, useMemo, useState } from "react";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";
import { StudentContext } from "../context/StudentContext";

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="7" />
      <path
        strokeLinecap="round"
        d="m20 20-4-4"
      />
    </svg>
  );
}

function FilterIcon() {
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
        d="M4 6h16M7 12h10M10 18h4"
      />
    </svg>
  );
}

function PlusIcon() {
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
        d="M12 5v14M5 12h14"
      />
    </svg>
  );
}

function Students() {
  const {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
  } = useContext(StudentContext);

  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const courses = [
    ...new Set(students.map((student) => student.course)),
  ];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCourse =
        courseFilter === "All" ||
        student.course === courseFilter;

      return matchesSearch && matchesCourse;
    });
  }, [students, search, courseFilter]);

  const handleSubmit = (studentData) => {
    if (editingStudent) {
      updateStudent(editingStudent.id, studentData);
      setEditingStudent(null);
    } else {
      addStudent(studentData);
    }

    setShowForm(false);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      deleteStudent(id);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setCourseFilter("All");
  };

  return (
    <section className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Page Header */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-[#1D1111] via-[#171515] to-[#121212] p-6 shadow-2xl sm:p-8">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#C62828]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E05A5A]">
                Student Directory
              </p>

              <h1 className="mt-3 font-serif text-4xl italic text-[#F5F5F5] sm:text-5xl">
                Manage your students.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#777777]">
                Add, update, search and organize student records
                from one simple workspace.
              </p>
            </div>

            <button
              onClick={() => {
                setEditingStudent(null);
                setShowForm(!showForm);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C62828] to-[#7D1D1D] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C62828]/10 transition-all duration-300 hover:-translate-y-1 hover:from-[#E53935] hover:to-[#982222] hover:shadow-xl hover:shadow-[#C62828]/20 active:scale-95"
            >
              <PlusIcon />
              {showForm ? "Close Form" : "Add Student"}
            </button>

          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mt-6">
            <StudentForm
              onSubmit={handleSubmit}
              editingStudent={editingStudent}
              onCancel={() => {
                setEditingStudent(null);
                setShowForm(false);
              }}
            />
          </div>
        )}

        {/* Search & Filter */}
        <div className="mt-6 rounded-3xl border border-white/[0.07] bg-[#151515] p-4 shadow-xl sm:p-5">

          <div className="grid gap-3 lg:grid-cols-[1fr_260px_auto]">

            {/* Search */}
            <div className="relative">

              <SearchIcon />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search student by name..."
                className="w-full rounded-xl border border-white/[0.07] bg-[#0F0F0F] py-3 pl-10 pr-4 text-sm text-[#EEEEEE] outline-none transition-all duration-300 placeholder:text-[#555555] hover:border-white/[0.12] focus:border-[#C62828]/50 focus:bg-[#131313] focus:ring-2 focus:ring-[#C62828]/10"
              />

              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">
                <SearchIcon />
              </div>

            </div>

            {/* Filter */}
            <div className="relative">

              <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#666666]">
                <FilterIcon />
              </div>

              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#0F0F0F] py-3 pl-10 pr-4 text-sm text-[#DCDCDC] outline-none transition-all duration-300 hover:border-white/[0.12] focus:border-[#C62828]/50 focus:ring-2 focus:ring-[#C62828]/10"
              >
                <option
                  value="All"
                  className="bg-[#151515]"
                >
                  All Courses
                </option>

                {courses.map((course) => (
                  <option
                    key={course}
                    value={course}
                    className="bg-[#151515]"
                  >
                    {course}
                  </option>
                ))}
              </select>

            </div>

            {/* Clear */}
            {(search || courseFilter !== "All") && (
              <button
                onClick={clearFilters}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-xs font-semibold text-[#999999] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C62828]/25 hover:bg-[#C62828]/10 hover:text-[#F08A8A] active:scale-95"
              >
                Clear Filters
              </button>
            )}

          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">

            <p className="text-xs text-[#666666]">
              Showing{" "}
              <span className="font-semibold text-[#D4D4D4]">
                {filteredStudents.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#D4D4D4]">
                {students.length}
              </span>{" "}
              students
            </p>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#555555]">
                Live Records
              </span>
            </div>

          </div>
        </div>

        {/* Student Cards */}
        {filteredStudents.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-6 rounded-[2rem] border border-white/[0.07] bg-[#151515] px-6 py-14 text-center shadow-xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C62828]/20 bg-[#C62828]/10 text-[#E05A5A]">
              <SearchIcon />
            </div>

            <h2 className="mt-5 font-serif text-2xl italic text-[#F0F0F0]">
              No students found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#686868]">
              Try a different name or course filter to find
              the student you are looking for.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-[#C62828]/10 px-4 py-2.5 text-xs font-semibold text-[#E05A5A] transition-all duration-300 hover:bg-[#C62828]/20 hover:text-[#FF9B9B] active:scale-95"
            >
              Reset Search
            </button>

          </div>
        )}

        <div className="h-10" />

      </div>
    </section>
  );
}

export default Students;

