export default function Services() {
  const services = [
    {
      title: 'Financial Strategy',
      description:
        'Tailored plans to align with your personal or business goals.',
    },
    {
      title: 'Investment Advisory',
      description: 'Smart portfolio design based on long-term market insights.',
    },
    {
      title: 'Tax Optimization',
      description:
        'Reduce liabilities legally and efficiently with expert guidance.',
    },
    {
      title: 'Business Consulting',
      description:
        'Make confident growth decisions backed by solid financial modeling.',
    },
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3 className="card-title">{s.title}</h3>
            <p className="card-desc">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
