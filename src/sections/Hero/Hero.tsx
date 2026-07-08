import Button from "../../components/Button/Button";
import profile from "../../assets/images/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import AnimatedBackground from "../../components/Background/AnimatedBackground";


export default function Hero() {
  return (
    <section
      id="hero"
      className="section min-h-screen flex items-center justify-center  overflow-hidden"
    >
      <AnimatedBackground />
      <div className="glass fade-up max-w-4xl rounded-3xl px-10 py-16 text-center">

        {/* Profile Image */}
        <img
          src={profile}
          alt="Bala Chandar"
          // className="profile-glow mx-auto mb-8 h-48 w-48 rounded-full border-4 border-blue-500/30 object-cover shadow-2xl"
          className="profile-glow mx-auto mb-8 h-40 w-40 md:h-48 md:w-48 rounded-full border-4 border-blue-500/30 object-cover"
        />

        {/* Name */}
        {/* <h1 className="gradient-text text-7xl font-black tracking-tight"> */}
        <h1 className="gradient-text text-5xl md:text-7xl font-black tracking-tight">
          Bala Chandar
        </h1>

        {/* Title */}
        {/* <h2 className="mt-6 text-2xl font-medium text-slate-300">
          Software Developer
        </h2> */}
        <div className="mt-6 h-10">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,

                "Python Developer",
                2000,

                "PostgreSQL Specialist",
                2000,

                "Data Engineer",
                2000,

                "Automation Enthusiast",
                2000,

                "Enterprise Solutions Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-2xl font-semibold text-cyan-400"
            />
         </div>

        {/* Description */}
        {/* <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"> */}
         <p className="mx-auto mt-8 max-w-3xl px-4 text-base leading-8 text-slate-400 md:text-lg">
          I build scalable enterprise applications,
          automation tools, data platforms, and modern web
          solutions with a strong focus on performance,
          reliability, and user experience.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Button>View Projects</Button>

          <Button variant="secondary">
            Download Resume
          </Button>

          <Button variant="outline">
            Contact Me
          </Button>
        </div>

      </div>
    </section>
  );
}