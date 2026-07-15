import ContactInfoCard from "../../components/Card/ContactInfoCard";
import { contactInfo } from "../../data/contact";
import SectionHeader from "../../components/common/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section">
      {/* <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold">
          Contact Me
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Interested in working together? Feel free to get in touch. I'm
          always open to discussing enterprise software, automation, and
          innovative development projects.
        </p>
      </div> */}
      <SectionHeader
        badge="Get in Touch"
        title="Contact Me"
        subtitle="Interested in working together? Feel free to get in touch. I'm always open to discussing enterprise software, automation, and innovative development projects."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

        {/* Left Side */}
        <div className="space-y-5">
          {contactInfo.map((item) => (
            <ContactInfoCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="glass rounded-3xl p-8">
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}