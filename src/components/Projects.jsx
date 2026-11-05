import data from "../data/portfolio.json";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {data.portfolio.map((p) => (
          <a
            className="card"
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
          >
            {p.cover && <img src={p.cover} alt={p.title} />}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}