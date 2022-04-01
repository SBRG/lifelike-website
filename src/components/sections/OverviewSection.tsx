import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Section from './Section';

const overviewParagraphs = [
  'Lifelike has several integrated features that support knowledge mining and collaboration among users in the biosciences field.',
  'Users can upload their own structured and unstructured data. The data is annotated in real-time using NLP and rule-based techniques allowing it to be contextualized and connected to global knowledge. Graph and statistical knowledge mining algorithms can then be run across the combined user and global datasets. In this way users can explore their own data in the broader context of existing knowledge, discovering extended paths comprised of new and previously known relationships.',
  'Lifelike supports communication and collaboration by allowing users to create Knowledge Maps. These are visual graph documents that can be used informally to take "visual notes", or in a more rigorous fashion to create highly curated models that can be analyzed with graph algorithms. Knowledge Maps are a great and easy to use tool to extract knowledge in a visual fashion by simply dragging entities, text snippets, files etc. onto the map. The user can then create new connections between the entities, provide evidence for each connection and add notes and links. The map content is very rich since the entities retain their meta-data and hyperlinks.',
];

const OverviewSection = () => (
  <Section
    name="overview"
    title="A graph-powered knowledge mining platform"
    className="secondary"
  >
    <Container>
      <Row>
        <Col lg={6} className="mb-4 mb-lg-0 text-center">
          <Image
            src="/images/reveal_left.png"
            alt="Digital mind"
            className="mw-100"
            style={{ maxHeight: '500px' }}
          />
        </Col>
        <Col lg={6}>
          {overviewParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Col>
      </Row>
    </Container>
  </Section>
);

export default OverviewSection;
