import "./app.css";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">Croczy UI</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#stats">Stats</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="heroText">
            <h1>Aplicación web estática con Vite + Docker + CI/CD</h1>
            <p>
              Esta demo está dockerizada y se publica automáticamente en Docker Hub
              con tags <b>latest</b> y el <b>SHA</b> de cada commit.
            </p>
            <div className="actions">
              <a className="btn primary" href="#features">Ver features</a>
              <a className="btn" href="#contact">Contacto</a>
            </div>
          </div>

          <div className="card">
            <h3>Estado</h3>
            <ul>
              <li>✅ Vite build</li>
              <li>✅ Docker image</li>
              <li>✅ GitHub Actions</li>
              <li>✅ Push a Docker Hub</li>
              <li>✅ Tags: latest + SHA</li>
            </ul>
          </div>
        </section>

        <section id="features" className="grid">
          {[
            { t: "Build rápido", d: "Vite optimiza desarrollo y producción." },
            { t: "Docker listo", d: "Imagen ligera con Nginx sirviendo /dist." },
            { t: "CI/CD", d: "Pipeline build + push automático." },
            { t: "Versionado", d: "Cada commit genera tags: SHA y latest." },
          ].map((x) => (
            <article key={x.t} className="feature">
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </article>
          ))}
        </section>

        <section id="stats" className="stats">
          <div className="stat">
            <div className="num">3</div>
            <div className="label">commits mínimos</div>
          </div>
          <div className="stat">
            <div className="num">2</div>
            <div className="label">tags por commit</div>
          </div>
          <div className="stat">
            <div className="num">1</div>
            <div className="label">imagen en Docker Hub</div>
          </div>
        </section>

        <section id="contact" className="footer">
          <p>
            Hecho para Arquitectura de Sistemas — Assignment 04.
          </p>
        </section>
      </main>
    </div>
  );
}