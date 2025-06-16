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
            <a href="https://wa.me/31687480593" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
              <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
                          <a href="mailto:info@sloopautos.online" className="email-button">
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
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
