import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-400 px-4 py-2 rounded-full text-sm">
              ☁️ AWS Cloud Deployment
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-orange-400">
                Bibash Sharma
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Welcome to my AWS hosted Next.js application.
              This project demonstrates deployment using
              AWS EC2, Nginx and PM2 with a responsive
              modern UI.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold">
                Explore Project
              </button>

              <button className="border border-gray-500 hover:bg-white hover:text-black transition px-6 py-3 rounded-lg font-semibold">
                Contact
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 w-full max-w-md">
              <div className="flex justify-center">
                <Image
                  src="/aws.png"
                  alt="AWS Logo"
                  width={120}
                  height={120}
                  className="w-24 sm:w-32 h-auto"
                />
              </div>

              <h2 className="text-center text-2xl sm:text-3xl font-bold mt-6">
                AWS Deployment
              </h2>

              <p className="text-center text-gray-300 mt-4">
                Successfully deployed using cloud best
                practices.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Next.js",
                  "AWS EC2",
                  "Nginx",
                  "PM2",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-slate-800 rounded-xl p-4 flex justify-between items-center"
                  >
                    <span>{item}</span>
                    <span className="text-green-400 text-xl">
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Cloud Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "☁️",
              title: "AWS Hosting",
              desc: "Deploy scalable applications on Amazon EC2.",
            },
            {
              icon: "⚡",
              title: "Performance",
              desc: "Fast applications with Nginx & PM2.",
            },
            {
              icon: "🔒",
              title: "Security",
              desc: "Secure cloud deployment with best practices.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white/10 rounded-2xl p-8 border border-white/10 hover:scale-105 transition duration-300"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Bibash Sharma • AWS Deployment
      </footer>
    </main>
  );
}