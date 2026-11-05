export default function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p className="tagline">{profile.tagline}</p>
      <div className="buttons">
        <a className="btn primary" href="#projects">View my work</a>
        <a className="btn" href="#contact">Contact me</a>
      </div>
    </section>
  );
}