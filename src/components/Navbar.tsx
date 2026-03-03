import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const leftNavItems = [
  { to: '/', label: 'Home' },
  { to: '/location', label: 'About Us ▼' },
  { to: '/contact', label: 'Admissions ▼' },
  { to: '/contact', label: 'Contact' },
  { to: '/contact', label: 'Tenp Staff Welfare' },
  { to: '/contact', label: 'Tenp Staff Sacco' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-nav">
        <div className="container nav-wrap">
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            {leftNavItems.map((item, idx) => (
              <NavLink
                key={`${item.to}-${idx}`}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a className="nav-link portal-link" href="#">
              Student Portal
            </a>
            <a className="nav-link portal-link" href="#">
              Staff Portal
            </a>
            <span className="flag-pill" aria-label="Kenya flag">
              🇰🇪
            </span>
          </nav>
        </div>
      </div>

      <div className="sub-nav">
        <div className="container sub-nav-wrap">
          <div className="brand">
            <span className="brand-mark">ENP</span>
            <div>
              <p className="brand-title">The Eldoret National Polytechnic</p>
              <p className="brand-subtitle">A Centre of Excellence in Technological Advancement</p>
            </div>
          </div>

          <div className="header-ctas">
            <a className="header-btn header-btn-iso" href="#">
              I S O
            </a>
            <a className="header-btn header-btn-apply" href="#">
              Apply Now
            </a>
            <a className="header-btn header-btn-admission" href="#">
              Admission Letter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
