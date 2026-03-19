import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12
      });

      gsap.from('.feature-card', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.25
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="hero-section">
        <div className="container hero-layout hero-content">
          <p className="eyebrow">Technical and Vocational Education and Training</p>
          <h1>Welcome to Eldoret National Polytechnic</h1>
          <p>
            Eldoret National Polytechnic (TENP) is a public TVET institution in Eldoret that provides practical,
            industry-oriented training across engineering, ICT, business, hospitality, and applied sciences.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Contact Admissions
            </Link>
            <Link className="btn btn-ghost" to="/location">
              Find Campus
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>About TENP</h2>
          <p className="section-intro">
            Based on published school information, TENP focuses on skills development, innovation, and preparing
            students for modern industry demands in Kenya and beyond.
          </p>
          <div className="card-grid">
            <article className="feature-card">
              <h3>Vision</h3>
              <p>A center of excellence in technical training, research, and innovation.</p>
            </article>
            <article className="feature-card">
              <h3>Mission</h3>
              <p>
                To offer quality technical and vocational education, training, and research for sustainable
                development.
              </p>
            </article>
            <article className="feature-card">
              <h3>Core Areas</h3>
              <p>Engineering, ICT, Building and Civil, Business, Hospitality, and Applied Sciences programs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section accent-section">
        <div className="container split-grid">
          <div className="feature-card">
            <h3>Why Students Choose TENP</h3>
            <ul>
              <li>Hands-on training with practical workshops and labs</li>
              <li>Nationally recognized TVET qualifications</li>
              <li>Industry engagement and employability-focused learning</li>
              <li>Accessible campus environment in Eldoret town outskirts</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Admissions Support</h3>
            <p>
              Prospective students can contact the institution for course guidance, fee inquiries, and application
              support through the contacts listed on this website.
            </p>
            <Link className="text-link" to="/contact">
              Go to Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
