import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const initialStudents = [
  {
    id: 1,
    name: "Ali Khan",
    age: 22,
    email: "ali@gmail.com",
    course: "React",
    status: "Active",
  },
  {
    id: 2,
    name: "Ayesha Noor",
    age: 21,
    email: "ayesha@gmail.com",
    course: "Web Development",
    status: "Active",
  },
  {
    id: 3,
    name: "Hamza Ahmed",
    age: 23,
    email: "hamza@gmail.com",
    course: "JavaScript",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sara Malik",
    age: 20,
    email: "sara@gmail.com",
    course: "React",
    status: "Active",
  },
  {
    id: 5,
    name: "Usman Tariq",
    age: 24,
    email: "usman@gmail.com",
    course: "UI/UX Design",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Hina Fatima",
    age: 22,
    email: "hina@gmail.com",
    course: "Web Development",
    status: "Active",
  },
];

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : initialStudents;
  });

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(),
    };

    setStudents((previous) => [
      ...previous,
      newStudent,
    ]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === id
          ? {
              ...student,
              ...updatedStudent,
            }
          : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((previous) =>
      previous.filter(
        (student) => student.id !== id
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}