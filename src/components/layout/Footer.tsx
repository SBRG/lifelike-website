import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Footer.scss';

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  {
    name: 'The Novo Nordisk Foundation Center for Sustainability',
    logo: '/images/cfb_logo.png',
  },
  {
    name: 'University of California San Diego Bioengineering',
    logo: '/images/ucsd_logo.png',
  },
  {
    name: 'Technical University of Denmark - DTU',
    logo: '/images/dtu_logo.png',
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="Footer text-center">
    <Container>
      <h2 className="Footer--title">Lifelike Partners</h2>
      <div className="mb-4">
        We would like to thank the Novo Nordisk Foundation for funding this
        work.
      </div>
      <div>
        {partners.map(({ name, logo }) => (
          <Image key={name} src={logo} alt={name} />
        ))}
      </div>
      <div className="mt-4 text-muted">
        Copyright &copy; {currentYear} Novo Nordisk Foundation Center for
        Biosustainability. All rights reserved.
      </div>
    </Container>
  </footer>
);

export default Footer;
