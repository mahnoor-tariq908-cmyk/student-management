
import { useEffect, useState } from "react";

function StudentForm({ onSubmit, editingStudent, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        age: editingStudent.age,
        email: editingStudent.email,
        course: editingStudent.course,
        status: editingStudent.status,
      });
    } else {
      setFormData({
        name: "",
        age: "",
        email: "",
        course: "",
        status: "Active",
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      age: Number(formData.age),
    });

    setFormData({
      name: "",
      age: "",
      email: "",
      course: "",
      status: "Active",
    });
  };

  return (
    <div
      className="
        group relative w-full overflow-hidden
        rounded-2xl border border-white/[0.07]
        bg-[#151515]
        p-4
        shadow-xl shadow-black/20
        transition-all duration-300
        hover:border-[#C62828]/20
        sm:rounded-[1.75rem]
        sm:p-6
      "
    >
      {/* Decorative Glow */}
      <div
        className="
          absolute -right-12 -top-12
          h-32 w-32 rounded-full
          bg-[#C62828]/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-[#C62828]/15
          sm:-right-16 sm:-top-16
          sm:h-44 sm:w-44
        "
      />

      <div
        className="
          absolute -bottom-16 -left-12
          h-32 w-32 rounded-full
          bg-[#8B1E1E]/10
          blur-3xl
          sm:-bottom-20 sm:-left-16
          sm:h-40 sm:w-40
        "
      />

      <div className="relative">

        {/* Heading */}
        <div className="mb-6 sm:mb-7">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E53935]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E05A5A] sm:text-[10px] sm:tracking-[0.2em]">
              {editingStudent ? "Update Record" : "New Record"}
            </p>
          </div>

          <h2 className="mt-2 font-serif text-xl italic leading-tight text-[#F1F1F1] sm:text-2xl">
            {editingStudent
              ? "Edit student details"
              : "Add a new student"}
          </h2>

          <p className="mt-1.5 max-w-md text-[11px] leading-5 text-[#686868] sm:text-xs">
            Keep your student information clear and organized.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="mb-1.5 block text-[11px] font-medium text-[#A5A5A5] sm:text-xs">
              Student Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
              className="
                w-full min-w-0
                rounded-xl
                border border-white/[0.07]
                bg-[#0F0F0F]
                px-3.5 py-3
                text-xs text-[#EEEEEE]
                outline-none
                transition-all duration-300
                placeholder:text-[#555555]
                hover:border-white/[0.12]
                focus:border-[#C62828]/50
                focus:bg-[#131313]
                focus:ring-2
                focus:ring-[#C62828]/10
                sm:px-4 sm:text-sm
              "
            />
          </div>

          {/* Age & Status */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-1.5 block text-[11px] font-medium text-[#A5A5A5] sm:text-xs">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="1"
                required
                className="
                  w-full min-w-0
                  rounded-xl
                  border border-white/[0.07]
                  bg-[#0F0F0F]
                  px-3.5 py-3
                  text-xs text-[#EEEEEE]
                  outline-none
                  transition-all duration-300
                  placeholder:text-[#555555]
                  hover:border-white/[0.12]
                  focus:border-[#C62828]/50
                  focus:bg-[#131313]
                  focus:ring-2
                  focus:ring-[#C62828]/10
                  sm:px-4 sm:text-sm
                "
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-medium text-[#A5A5A5] sm:text-xs">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
                  w-full min-w-0
                  rounded-xl
                  border border-white/[0.07]
                  bg-[#0F0F0F]
                  px-3.5 py-3
                  text-xs text-[#E2E2E2]
                  outline-none
                  transition-all duration-300
                  hover:border-white/[0.12]
                  focus:border-[#C62828]/50
                  focus:ring-2
                  focus:ring-[#C62828]/10
                  sm:px-4 sm:text-sm
                "
              >
                <option value="Active" className="bg-[#151515]">
                  Active
                </option>

                <option value="Inactive" className="bg-[#151515]">
                  Inactive
                </option>
              </select>
            </div>

          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-[11px] font-medium text-[#A5A5A5] sm:text-xs">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="student@example.com"
              required
              className="
                w-full min-w-0
                rounded-xl
                border border-white/[0.07]
                bg-[#0F0F0F]
                px-3.5 py-3
                text-xs text-[#EEEEEE]
                outline-none
                transition-all duration-300
                placeholder:text-[#555555]
                hover:border-white/[0.12]
                focus:border-[#C62828]/50
                focus:bg-[#131313]
                focus:ring-2
                focus:ring-[#C62828]/10
                sm:px-4 sm:text-sm
              "
            />
          </div>

          {/* Course */}
          <div>
            <label className="mb-1.5 block text-[11px] font-medium text-[#A5A5A5] sm:text-xs">
              Course
            </label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="
                w-full min-w-0
                rounded-xl
                border border-white/[0.07]
                bg-[#0F0F0F]
                px-3.5 py-3
                text-xs text-[#E2E2E2]
                outline-none
                transition-all duration-300
                hover:border-white/[0.12]
                focus:border-[#C62828]/50
                focus:ring-2
                focus:ring-[#C62828]/10
                sm:px-4 sm:text-sm
              "
            >
              <option value="" className="bg-[#151515]">
                Select course
              </option>

              <option value="React" className="bg-[#151515]">
                React
              </option>

              <option value="Web Development" className="bg-[#151515]">
                Web Development
              </option>

              <option value="JavaScript" className="bg-[#151515]">
                JavaScript
              </option>

              <option value="UI/UX Design" className="bg-[#151515]">
                UI/UX Design
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:pt-3">

            <button
              type="submit"
              className="
                flex min-h-11 flex-1
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
                active:scale-[0.97]
                sm:text-sm
              "
            >
              {editingStudent ? "Update Student" : "Add Student"}
            </button>

            {editingStudent && (
              <button
                type="button"
                onClick={onCancel}
                className="
                  min-h-11
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.03]
                  px-5 py-3
                  text-xs font-medium
                  text-[#A8A8A8]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#C62828]/20
                  hover:bg-[#C62828]/10
                  hover:text-[#F1F1F1]
                  active:scale-[0.97]
                  sm:text-sm
                "
              >
                Cancel
              </button>
            )}

          </div>

        </form>
      </div>
    </div>
  );
}

export default StudentForm;

