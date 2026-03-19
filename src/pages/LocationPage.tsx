import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function LocationPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.location-animate', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="section">
      <div className="container">
        <h1 className="location-animate">Campus Location</h1>
        <p className="section-intro location-animate">
          Eldoret National Polytechnic is located along Eldoret - Kapsabet Road in Uasin Gishu County, Kenya.
        </p>

        <div className="split-grid">
          <article className="feature-card location-animate">
            <h3>Address</h3>
            <p>Eldoret National Polytechnic</p>
            <p>P.O. Box 4461-30100</p>
            <p>Eldoret, Kenya</p>
            <p>Landmark: Along Eldoret-Kapsabet Road, near Gaba Campus area.</p>
          </article>

          <article className="feature-card location-animate">
            <h3>Access</h3>
            <p>Public transport and private vehicles can access the campus through Eldoret town road network.</p>
            <p>
              For first-time visitors, call the administration office before arrival to get the latest gate and
              visitor guidance.
            </p>
          </article>
        </div>

        <div className="map-wrap location-animate">
          <iframe
            title="Map to Eldoret National Polytechnic"
            src="https://www.openstreetmap.org/export/embed.html?bbox=35.244%2C0.494%2C35.324%2C0.574&layer=mapnik&marker=0.535%2C35.284"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
