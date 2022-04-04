import classnames from 'classnames';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Section from './Section';
import './TechnologiesSection.scss';

import nlpImage from '../../assets/images/technologies-nlp.png';
import krImage from '../../assets/images/technologies-kr.png';
import vizImage from '../../assets/images/technologies-viz.png';
import searchImage from '../../assets/images/technologies-search.png';

type Technology = {
  id: string;
  title: string;
  description: string;
  image: string;
}

const technologies: Technology[] = [
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description:
      'Lifelike uses Artificial Intelligence (AI) and rule-based entity recognition to automatically recognize key biological entities such as genes, proteins, diseases, chemicals, phenomena, anatomy, proteins, species and relationships between them. It also enables ‘on the fly’ custom annotations so users can define additional key entities of interest.',
    image: nlpImage
  },
  {
    id: 'kr',
    title: 'Knowledge Reconstruction',
    description:
      'Lifelike’s drawing canvas allows users to create connected content and express relationships between biological entities, provide evidence for those relationships including hyperlinks and direct connections to literature and other sources. Drag and drop from annotated papers and enrichment tables allows for fast knowledge reconstruction and visual note taking. Multiple maps can be merged into a comprehensive knowledge graph for graph analysis.',
    image: krImage
  },
  {
    id: 'viz',
    title: 'Knowledge Visualization & Enrichment',
    description:
      'Lifelike provides an interactive knowledge graph visualizer that clusters relationships by type to simplify complex graphs. Graph nodes can be expanded and detailed supporting data can be viewed. Structured data can be uploaded and enriched against knowledge from many sources. Statistical analysis against ontologies as well as semantic analysis performed on text from public databases enables users to move from big picture view to details.',
    image: vizImage
  },
  {
    id: 'search',
    title: 'Search (Full Text and Graph Powered)',
    description:
      'Full-text and graph-powered search enables users to find non-obvious connections, and related concepts or find content based on synonyms. This search is seamlessly integrated throughout the application on a button click.',
    image: searchImage
  },
];

const TechnologiesSection = () => (
  <Section name="techonolgies" className="Technologies">
    <Container>
      {technologies.map(({ image, title, description }, i) => (
        <Row
          key={i}
          className="Technologies--item justify-content-center mr-lg-4 align-items-center"
        >
          <Col
            md={4}
            className={classnames('Technologies--image mb-4 mb-lg-0', {
              'order-md-2': i % 2 === 0,
            })}
          >
            <Image src={image} alt={title} />
          </Col>
          <Col md={8} lg={6} className="Technologies--body">
            <h2 className="Technologies--title">{title}</h2>
            <div className="Technologies--description">
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  </Section>
);

export default TechnologiesSection;
