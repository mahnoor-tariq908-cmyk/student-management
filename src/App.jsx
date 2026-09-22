
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/students/:id"
            element={<StudentDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

