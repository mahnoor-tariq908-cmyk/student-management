
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
    <section className="min-h-screen w-full overflow-x-hidden bg-[#0B0B0B] px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Hero */}
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-gradient-to-br
            from-[#211313] via-[#171515] to-[#101010]
            p-5
            shadow-2xl
            sm:rounded-[2rem]
            sm:p-8
            md:p-10
            lg:p-14
          "
        >
          <div
            className="
              absolute -right-16 -top-16
              h-48 w-48 rounded-full
              bg-[#C62828]/10 blur-3xl
              sm:-right-24 sm:-top-24
              sm:h-80 sm:w-80
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

          <div className="relative max-w-4xl">

            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E05A5A] sm:text-xs sm:tracking-[0.2em]">
              About the Project
            </p>

            <h1
              className="
                mt-3
                max-w-3xl
                font-serif
                text-3xl
                italic
                leading-[1.15]
                text-[#F5F5F5]
                sm:mt-4
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              A clearer way to
              <span className="text-[#E53935]">
                {" "}manage students.
              </span>
            </h1>

            <p
              className="
                mt-4 max-w-2xl
                text-xs leading-6
                text-[#858585]
                sm:mt-6 sm:text-sm sm:leading-7
                md:text-base
              "
            >
              StudentHub is a modern Student Management Dashboard
              built to make student records easier to manage,
              search and organize in one place.
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
              Explore Students →
            </Link>

          </div>
        </div>

        {/* Features */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                group relative w-full overflow-hidden
                rounded-2xl
                border border-white/[0.07]
                bg-[#151515]
                p-5
                shadow-xl
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#C62828]/20
                hover:bg-[#181818]
                sm:rounded-3xl
                sm:p-6
              "
            >
              <div
                className="
                  absolute -right-8 -top-8
                  h-24 w-24 rounded-full
                  bg-[#C62828]/5 blur-3xl
                  transition-all duration-500
                  group-hover:bg-[#C62828]/15
                  sm:-right-10 sm:-top-10
                  sm:h-28 sm:w-28
                "
              />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#C62828] sm:text-xs">
                    {feature.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#E53935] transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h2 className="mt-6 font-serif text-xl italic text-[#F0F0F0] sm:mt-8 sm:text-2xl">
                  {feature.title}
                </h2>

                <p className="mt-3 text-xs leading-6 text-[#707070] sm:text-sm">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Built With */}
        <div
          className="
            mt-5
            rounded-2xl
            border border-white/[0.07]
            bg-[#151515]
            p-5
            shadow-xl
            sm:mt-6
            sm:rounded-[2rem]
            sm:p-8
          "
        >
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C62828] sm:text-xs sm:tracking-[0.18em]">
                Built With
              </p>

              <h2 className="mt-2 font-serif text-2xl italic leading-tight text-[#F2F2F2] sm:text-3xl">
                Simple tools.
                <br />
                Powerful workflow.
              </h2>

              <p className="mt-3 max-w-md text-xs leading-6 text-[#707070] sm:mt-4 sm:text-sm">
                The project combines modern React concepts with
                reusable components, routing and browser storage.
              </p>
            </div>

            {/* Technologies */}
            <div className="grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2 sm:grid-cols-3 sm:gap-3">

              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="
                    group rounded-xl
                    border border-white/[0.06]
                    bg-[#0F0F0F]
                    p-3.5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#C62828]/25
                    hover:bg-[#171212]
                    sm:rounded-2xl
                    sm:p-4
                  "
                >
                  <span className="text-[9px] font-semibold text-[#555555] sm:text-[10px]">
                    0{index + 1}
                  </span>

                  <p className="mt-2 text-xs font-semibold text-[#D7D7D7] transition-colors duration-300 group-hover:text-[#F08A8A] sm:mt-3 sm:text-sm">
                    {technology}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Footer Quote */}
        <div className="px-2 py-8 text-center sm:py-10">

          <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-[#C62828] to-transparent sm:w-16" />

          <p className="font-serif text-lg italic text-[#777777] sm:text-xl">
            “Everything in one place.”
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#444444] sm:text-[10px] sm:tracking-[0.2em]">
            StudentHub
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;

