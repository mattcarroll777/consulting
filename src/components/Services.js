export default function Services() {
  const services = [
    {
      title: 'Financial Planning',
      desc: 'Strategies to achieve your long-term goals.',
    },
    {
      title: 'Investment Strategy',
      desc: 'Optimize portfolios for growth and risk.',
    },
    {
      title: 'Business Consulting',
      desc: 'Scale smart with financial modeling.',
    },
    {
      title: 'Tax Efficiency',
      desc: 'Reduce liabilities while staying compliant.',
    },
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <div key={i} className="card">
            <h3 className="card-title">{s.title}</h3>
            <p className="card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
