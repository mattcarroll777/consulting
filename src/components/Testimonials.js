export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Blush Consulting helped us clean up our entire financial process. We now have a clear strategy, and our business is thriving.',
      name: 'Alex R.',
      title: 'Founder, FinCore Solutions',
    },
    {
      quote:
        'I was overwhelmed with taxes and planning. Their team made everything easy — and saved me thousands.',
      name: 'Tanya L.',
      title: 'Entrepreneur',
    },
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <footer className="testimonial-footer">
              — {t.name}, {t.title}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
