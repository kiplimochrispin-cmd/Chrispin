import { FormEvent, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-animate', {
        y: 24,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
        stagger: 0.1
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={pageRef} className="section">
      <div className="container">
        <h1 className="contact-animate">Contact Us</h1>
        <p className="section-intro contact-animate">
          Reach Eldoret National Polytechnic for admissions, course details, partnerships, and general inquiries.
        </p>

        <div className="split-grid">
          <article className="feature-card contact-animate">
            <h3>Official Contact Channels</h3>
            <p>Phone: +254 746 849 148</p>
            <p>Phone: +254 704 538 233</p>
            <p>Email: principal@tenp.ac.ke</p>
            <p>Postal Address: P.O. Box 4461-30100, Eldoret</p>
          </article>

          <form className="feature-card contact-form contact-animate" onSubmit={handleSubmit}>
            <h3>Send an Inquiry</h3>
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="How can we help you?" />

            <button className="btn btn-primary" type="submit">
              Submit Message
            </button>

            {submitted && <p className="submit-note">Thanks. This demo form has captured your request locally.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
