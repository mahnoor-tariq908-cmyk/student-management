
import { useContext, useMemo, useState } from "react";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";
import { StudentContext } from "../context/StudentContext";

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
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

function Students() {
  const {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
  } = useContext(StudentContext);

  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const courses = useMemo(() => {
    return [...new Set(students.map((student) => student.course))];
  }, [students]);

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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmed) {
      deleteStudent(id);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setCourseFilter("All");
  };

  return (
    <section className="min-h-screen w-full overflow-x-hidden bg-[#0B0B0B] px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E05A5A] sm:text-xs sm:tracking-[0.2em]">
              Student Directory
            </p>

            <h1 className="mt-2 font-serif text-3xl italic leading-tight text-[#F5F5F5] sm:text-4xl md:text-5xl">
              Manage your students.
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#707070] sm:text-sm sm:leading-7">
              Add, update, search and manage student records
              from one organized place.
            </p>
          </div>

          <button
            onClick={() => {
              setEditingStudent(null);
              setShowForm(!showForm);
            }}
            className="
              inline-flex min-h-11 w-full shrink-0
              items-center justify-center
              rounded-xl
              bg-gradient-to-r
              from-[#C62828] to-[#7D1D1D]
              px-5 py-3
              text-xs font-semibold text-white
              shadow-lg shadow-[#C62828]/10
              transition-all duration-300
              hover:-translate-y-1
              hover:from-[#E53935]
              hover:to-[#982222]
              hover:shadow-xl
              hover:shadow-[#C62828]/20
              active:scale-95
              sm:w-auto sm:text-sm
            "
          >
            {showForm ? "Close Form" : "+ Add Student"}
          </button>

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
        <div
          className="
            mt-6
            rounded-2xl
            border border-white/[0.07]
            bg-[#151515]
            p-4
            shadow-xl shadow-black/20
            sm:rounded-3xl
            sm:p-5
          "
        >
          <div className="grid gap-3 md:grid-cols-[1fr_220px_auto]">

            {/* Search */}
            <div className="relative min-w-0">

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search student by name..."
                className="
                  w-full min-w-0
                  rounded-xl
                  border border-white/[0.07]
                  bg-[#0F0F0F]
                  py-3 pl-10 pr-4
                  text-xs text-[#EEEEEE]
                  outline-none
                  transition-all duration-300
                  placeholder:text-[#555555]
                  hover:border-white/[0.12]
                  focus:border-[#C62828]/50
                  focus:ring-2
                  focus:ring-[#C62828]/10
                  sm:text-sm
                "
              />

              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">
                <SearchIcon />
              </div>

            </div>

            {/* Course Filter */}
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="
                w-full min-w-0
                rounded-xl
                border border-white/[0.07]
                bg-[#0F0F0F]
                px-3.5 py-3
                text-xs text-[#DCDCDC]
                outline-none
                transition-all duration-300
                hover:border-white/[0.12]
                focus:border-[#C62828]/50
                focus:ring-2
                focus:ring-[#C62828]/10
                sm:text-sm
              "
            >
              <option value="All" className="bg-[#151515]">
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

            {/* Clear */}
            <button
              onClick={clearFilters}
              className="
                min-h-11
                rounded-xl
                border border-white/[0.08]
                bg-white/[0.03]
                px-5 py-3
                text-xs font-medium
                text-[#999999]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#C62828]/25
                hover:bg-[#C62828]/10
                hover:text-[#F1F1F1]
                active:scale-95
                md:min-w-[100px]
              "
            >
              Clear
            </button>

          </div>

          {/* Result Count */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-4">

            <p className="text-[10px] text-[#666666] sm:text-xs">
              Showing{" "}
              <span className="font-semibold text-[#C8C8C8]">
                {filteredStudents.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#C8C8C8]">
                {students.length}
              </span>{" "}
              students
            </p>

            {(search || courseFilter !== "All") && (
              <button
                onClick={clearFilters}
                className="text-[10px] font-semibold text-[#E05A5A] transition-colors hover:text-[#FF8585] sm:text-xs"
              >
                Reset filters
              </button>
            )}

          </div>
        </div>

        {/* Students Grid */}
        {filteredStudents.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 xl:grid-cols-3 sm:gap-5">

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
          <div
            className="
              mt-6
              rounded-2xl
              border border-white/[0.07]
              bg-[#151515]
              px-5 py-12
              text-center
              shadow-xl
              sm:rounded-3xl
              sm:px-8 sm:py-16
            "
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C62828]/20 bg-[#C62828]/10 text-xl text-[#E05A5A]">
              ∅
            </div>

            <h2 className="mt-5 text-lg font-semibold text-[#E8E8E8] sm:text-xl">
              No students found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#666666] sm:text-sm">
              Try changing your search or course filter,
              or add a new student record.
            </p>

            <button
              onClick={() => {
                clearFilters();
                setEditingStudent(null);
                setShowForm(true);
              }}
              className="
                mt-5
                rounded-xl
                bg-gradient-to-r
                from-[#C62828] to-[#7D1D1D]
                px-5 py-3
                text-xs font-semibold text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:from-[#E53935]
                hover:to-[#982222]
                active:scale-95
                sm:text-sm
              "
            >
              Add New Student
            </button>
          </div>
        )}

        <div className="h-8 sm:h-12" />

      </div>
    </section>
  );
}

export default Students;
