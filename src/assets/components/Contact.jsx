import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#020617] text-white py-28 border-t border-white/10">

      <Container className="max-w-4xl">

        <h2 className="text-3xl font-extrabold mb-8">
          Contact
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed">
          Seasoned Full Stack Software Engineer with over 8 years experience
          building scalable web applications.
        </p>

        <p className="font-semibold mb-8">
          abmcodehub@gmail.com
        </p>

        <div className="flex gap-8 text-slate-400">
          <span>Instagram</span>
          <span>X</span>
          <span>YouTube</span>
        </div>

      </Container>
    </section>
  );
}
