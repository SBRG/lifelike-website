import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { NavLink } from 'react-router-dom';
import './Header.scss';
// import Section from './layout/Section';
// import UserMenu from './UserMenu';
import NavBar from './NavBar';

const Header = () => (
  <header className="Header shadow">
    {/* <div className="site-header wrapper d-flex align-items-center flex-wrap">
        <div className="site-logo mr-4">
          <NavLink to="/">
            <h1>Lifelike</h1>
          </NavLink>
        </div>
      </div> */}

    <div className="intro">
      <Container>
        <NavBar />
        <div className="intro-left">
          <h2 className="intro-title">
            From Big Data
            <br />
            to Big Picture
          </h2>
          <div className="intro-subtitle">
            Turning big data into contextualized knowledge, creating a
            360-degree view and big picture understanding, augmenting our
            intelligence in solving complex problems.
          </div>
        </div>
        <Stack direction="horizontal" gap={3}>
          <Button
            as="a"
            size="lg"
            href="mailto:lifelike@biosustain.dtu.dk?body=I%20am%20interested%20in%20demoing%20Lifelike."
            className="primary"
          >
            Request a Demo
          </Button>
          <NavLink to="/examples" className="btn btn-lg">
            View Examples
          </NavLink>
        </Stack>
      </Container>
    </div>
  </header>
);

export default Header;
