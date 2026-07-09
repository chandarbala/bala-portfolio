import Card from "../../components/Card/Card";

export default function About() {
  return (
    <section id="about" className="section">

      <div className="text-center">

        <h2 className="gradient-text text-5xl font-bold">
          About Me
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          I'm a Software Developer passionate about building enterprise
          applications, automation tools, and scalable data solutions.
          I enjoy solving real-world business problems using Python,
          PostgreSQL, modern web technologies, and clean software
          architecture.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        <Card
          title="Years Learning"
          value="9+"
        />

        <Card
          title="Projects"
          value="Multiple"
        />

        <Card
          title="Technologies"
          value="Different"
        />

        <Card
          title="Database Records"
          value="Millions"
        />

      </div>

    </section>
  );
}