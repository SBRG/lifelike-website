const partners = [
  {
    name: 'The Novo Nordisk Foundation Center for Sustainability',
    image: '/images/cfb_logo.png',
  },
  {
    name: 'University of California San Diego Bioengineering',
    image: '/images/ucsd_logo.png',
  },
  {
    name: 'Technical University of Denmark - DTU',
    image: '/images/dtu_logo.png',
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrapper text-center">
        <h2 className="footer-title mb-4">Lifelike Partners</h2>
        <div className="mb-4">
          We would like to thank the Novo Nordisk Foundation for funding this
          work.
        </div>
        <div className="footer-logos">
          {partners.map(({ name, image }) => (
            <img key={name} alt={name} src={image} />
          ))}
        </div>
        <div className="mt-4 text-muted">
          Copyright &copy; {currentYear} Novo Nordisk Foundation Center for
          Biosustainability. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
