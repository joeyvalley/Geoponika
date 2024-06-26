import "../main.css";

export default function Original() {
  return (
    <main className="original-container">
      <section className="original-landing">
        <div className="original-flower">
          <img src="/assets/black-logo.png" alt="Geoponika Flower Logo" />
        </div>
        <div className="original-text">
          <img src="/assets/black-text.png" alt="Geoponika Text Logo" />
        </div>
      </section>
      <section className="original-hero">
        <img src="/assets/hero1.jpg" alt="Bergamot" />
      </section>
      <section className="original-hero">
        <img src="/assets/hero2.jpg" alt="Mayer" />
      </section>
      <section className="original-menu-container">
        <div className="original-menu">
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
            <h3>Landscapes, Gardens,<br />Glasshouses and Installations</h3>
          </div>
          <div>
            <h2>For more information or selected portfolio:<br /><a href="mailto:info@geoponika.com">info@Geoponika.co</a></h2>
          </div>
        </div>
      </section>
    </main>
  )
}