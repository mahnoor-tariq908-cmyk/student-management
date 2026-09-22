
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      number: "01",
      title: "Student Records",
      description:
        "Create, update and manage student information from one organized dashboard.",
    },
    {
      number: "02",
      title: "Smart Organization",
      description:
        "Search and filter students quickly to find the information you need.",
    },
    {
      number: "03",
      title: "Persistent Data",
      description:
        "Student records are saved in LocalStorage and remain available after refresh.",
    },
  ];

  const technologies = [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Context API",
    "LocalStorage",
  ];

  return (
    <section className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-[#211313] via-[#171515] to-[#101010] p-6 shadow-2xl sm:p-10 lg:p-14">

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C62828]/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#8B1E1E]/10 blur-3xl" />

          <div className="relative max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E05A5A]">
              About the Project
            </p>

            <h1 className="mt-4 max-w-3xl font-serif text-4xl italic leading-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
              A clearer way to
              <span className="text-[#E53935]">
                {" "}manage students.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#858585] sm:text-base">
              StudentHub is a modern Student Management Dashboard
              built to make student records easier to manage,
              search and organize in one place.
            </p>

            <Link
              to="/students"
              className="mt-7 inline-flex items-center rounded-xl bg-gradient-to-r from-[#C62828] to-[#7D1D1D] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C62828]/10 transition-all duration-300 hover:-translate-y-1 hover:from-[#E53935] hover:to-[#982222] hover:shadow-xl hover:shadow-[#C62828]/20 active:scale-95"
            >
              Explore Students →
            </Link>

          </div>
        </div>

        {/* Features */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#151515] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C62828]/20 hover:bg-[#181818]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C62828]/5 blur-3xl transition-all duration-500 group-hover:bg-[#C62828]/15" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#C62828]">
                    {feature.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#E53935] transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h2 className="mt-8 font-serif text-2xl italic text-[#F0F0F0]">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#707070]">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Built With */}
        <div className="mt-6 rounded-[2rem] border border-white/[0.07] bg-[#151515] p-6 shadow-xl sm:p-8">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C62828]">
                Built With
              </p>

              <h2 className="mt-2 font-serif text-3xl italic text-[#F2F2F2]">
                Simple tools.
                <br />
                Powerful workflow.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#707070]">
                The project combines modern React concepts with
                reusable components, routing and browser storage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="group rounded-2xl border border-white/[0.06] bg-[#0F0F0F] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C62828]/25 hover:bg-[#171212]"
                >
                  <span className="text-[10px] font-semibold text-[#555555]">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-sm font-semibold text-[#D7D7D7] transition-colors duration-300 group-hover:text-[#F08A8A]">
                    {technology}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Footer Quote */}
        <div className="py-10 text-center">

          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-[#C62828] to-transparent" />

          <p className="font-serif text-xl italic text-[#777777]">
            “Everything in one place.”
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#444444]">
            StudentHub
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;

