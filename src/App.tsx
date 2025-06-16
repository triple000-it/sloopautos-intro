import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      const popup = document.createElement('div');
      popup.className = 'copyright-popup';
      popup.textContent = 'Autobv.nl © 2025';
      document.body.appendChild(popup);

      // Position popup near cursor
      popup.style.left = `${e.pageX}px`;
      popup.style.top = `${e.pageY}px`;

      // Remove popup after animation
      setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => {
          document.body.removeChild(popup);
        }, 300);
      }, 1500);
    };

    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const preventSave = (e: KeyboardEvent) => {
      if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('keydown', preventSave);
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('selectstart', (e) => e.preventDefault());

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('keydown', preventSave);
      document.removeEventListener('dragstart', (e) => e.preventDefault());
      document.removeEventListener('selectstart', (e) => e.preventDefault());
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <div className="logo">
              <div className="logo-icon">
                <img src="/logo-transparent.png" alt="Sloopautos.online Logo" />
              </div>
              <div className="logo-text">
                <h1>Sloopautos.online</h1>
                <p>Professionele handel in schade- en sloopauto's</p>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <a href="https://wa.me/31687480593" target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@sloopautos.online" className="contact-button email">
              <span>Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="hero">
        <div className="container">
          
          <p className="hero-subtitle">
            
          </p>
          

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="service-cards">
            <a href="https://www.inkoop.autos/nl" target="_blank" rel="noopener noreferrer" className="service-card inkoop">
              <h2>Inkoop</h2>
              <p><b>Wij bieden een eerlijke prijs voor uw oude schade- of sloopauto.</b></p>
              <ul>
              <li>● Directe uitbetaling, contant of via bankoverschrijving</li>
              <li>● Snelle afhandeling binnen 24 - 48 uur</li>
              <li>● Gratis ophaalservice in Nederland</li>
              <li>● Milieuvriendelijke recycling</li>
              <li>● Alle merken en modellen</li>
              </ul>
              <div className="service-image">
                <button className="cta-button">Ga verder</button>
              </div>
            </a>

            <a href="https://www.verkoop.autos/" target="_blank" rel="noopener noreferrer" className="service-card verkoop">
              <h2>Verkoop</h2>
              <p><b>Bekijk ons schade- en sloopauto's overzicht in Nederland.</b></p>
              <ul>
              <li>● Bieden op een voertuig via de veiling of direct claimen</li>
              <li>● Snelle afhendeling binnen 24 - 48 uur</li>
              <li>● Altijd een actueel aanbod</li>
              <li>● Lage commissies</li>
              <li>● Echte leads</li>
              </ul>
              <div className="service-image">
                <button className="cta-button">Ga verder</button>
              </div>
            </a>
          </div>
        </div>
      </section>

      

      {/* Statistics */}
      <div className="stats">
            
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <div className="logo-icon">
              <img src="/logo-transparent.png" alt="Sloopautos.online Logo" className="footer-logo-white" />
            </div>
            <div className="logo-text">
                <h1>Sloopautos.online</h1>
                <p>Professionele handel in schade- en sloopauto's</p>
              </div>
          </div>
          
          <div className="footer-bottom">
            <p><b>Autobv.nl © 2025</b> <br></br> Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
