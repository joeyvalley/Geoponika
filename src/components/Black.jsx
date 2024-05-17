import '../black.css';

export default function Black() {
  return (
    <main className="container">
      <section className="landing">
        <div className="flower">
          <img src="/assets/black-logo.png" alt="Geoponika Flower Logo" />
        </div>
        <div className="text">
          <img src="/assets/black-text.png" alt="Geoponika Text Logo" />
        </div>
      </section>

      <div className="hero portrait">
        <img src="/assets/crop2.jpg" alt="Bergamot Portrait" />
      </div>
      <div className="hero landscape">
        <img src="/assets/hero1.jpg" alt="Bergamot Landscape" />
      </div>

      <section className="menu-container">
        <div className="menu">
          <div>
            <h1>G E O P O N I K A</h1>
            <h2>Agricultural Pursuits</h2>
          </div>
          <div>
          </div>
          <div>
            <h2>Los Angeles / NYC</h2>
          </div>
          <div>
            <h3>Landscapes, Gardens,<br />Glasshouses and Installations </h3>
          </div>
          <div>
            <h2>For more information or selected portfolio:<br /><a href="mailto:info@geoponika.com">info@Geoponika.co</a></h2>
          </div>
        </div>
      </section>
    </main>
  )
}