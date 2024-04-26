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
      <div className="hero">
        <img src="/assets/crop1.jpg" alt="Bergamot" />
      </div>
      <div className="hero">
        <img src="/assets/crop2.jpg" alt="Mayer" />
      </div>
      <div className="hero">
        <video src="https://imgur.com/LO3T7QN.mp4" autoPlay={true} muted playsInline={true} loop preload="auto"></video>
      </div>
      <div className="hero">
        <img src="https://cactus.store/cdn/shop/products/20200521_HotCactus_Garden_4_6c0f0da1-b2b5-4057-a3bd-3f717870906e.jpg" alt="Mayer 2" />
      </div>
      <div className="hero">
        <img src="/assets/crop3.jpg" alt="El Centro" />
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