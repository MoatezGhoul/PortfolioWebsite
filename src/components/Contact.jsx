export default function Contact({ profile }) {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Thank you for your interest in getting in touch!</p>
      <p>Want to work together or just say hi? My inbox is open.</p>
      <div className="buttons">
        <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}