export default function About({ profile }) {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>{profile.about}</p>
      <ul className="chips">
        {profile.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}