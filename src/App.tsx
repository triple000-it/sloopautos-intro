import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <div className="logo">
              <div className="logo-icon">
                <img src="/logo.png" alt="Sloopautos.online Logo" />
              </div>
              <div className="logo-text">
                <h1>Sloopautos.online</h1>
                <p>Professionele handel in schade- en sloopauto's</p>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <span className="phone">📞 +31 123 456 789</span>
            <span className="email">✉️ info@sloopautos.online</span>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Inkoop & Verkoop</h1>
          <p className="hero-subtitle">
            Uw betrouwbare partner voor professionele autodemontage en onderdelen
          </p>
          
          

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="service-cards">
            <div className="service-card inkoop">
              <div className="service-icon">🛒</div>
              <h2>Inkoop</h2>
              <p>Wij kopen uw oude auto tegen de beste prijs. Snelle afhandeling en gratis ophaalservice.</p>
              <ul>
                <li>● Gratis waardering en ophaling</li>
                <li>● Directe uitbetaling mogelijk</li>
                <li>● Alle merken en modellen</li>
                <li>● Milieuvriendelijke verwerking</li>
              </ul>
              <div className="service-image">
                <div className="placeholder-image">🚛 Ophaalservice</div>
              </div>
            </div>

            <div className="service-card verkoop">
              <div className="service-icon">🚗</div>
              <h2>Verkoop</h2>
              <p>Hoogwaardige gebruikte onderdelen en complete voertuigen tegen scherpe prijzen.</p>
              <ul>
                <li>● Geteste kwaliteitsonderdelen</li>
                <li>● Garantie op alle onderdelen</li>
                <li>● Snelle levering mogelijk</li>
                <li>● Concurrerende prijzen</li>
              </ul>
              <div className="service-image">
                <div className="placeholder-image">🔧 Onderdelen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Waarom Kiezen Voor Ons?</h2>
          <p>Jarenlange ervaring en betrouwbaarheid in de autodemontage sector</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Gecertificeerd</h3>
              <p>Officieel erkend demontagebedrijf met alle benodigde certificeringen</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Snelle Service</h3>
              <p>Binnen 24 uur reactie en snelle afhandeling van uw aanvraag</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Klanttevredenheid</h3>
              <p>Meer dan 1000 tevreden klanten vertrouwen op onze expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="stats">
            <div className="stat">
              <h3>1000+</h3>
              <p>Auto's Gesloopt</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Jaar Ervaring</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Service</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Milieuvriendelijk</p>
            </div>
          </div>
        </div>
      </section>ß

      

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <div className="logo-icon">
              <img src="/logo.png" alt="Sloopautos.online Logo" />
            </div>
            <span>Sloopautos.online</span>
          </div>
          <p>Uw betrouwbare partner voor professionele autodemontage</p>
          <div className="footer-bottom">
            <p>© 2024 Sloopautos.online • Alle rechten voorbehouden</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
