import { ReactNode } from 'react';
import classnames from 'classnames';

interface Point {
  image: string;
  title: string;
  description: ReactNode;
}

const points: Point[] = [
  {
    image: '/images/point_nlp.png',
    title: 'Natural Language Processing',
    description: (
      <>
        Lifelike uses Artificial Intelligence (AI) and rule-based entity
        recognition to automatically recognize key biological entities such as
        genes, proteins, diseases, chemicals, phenomena, anatomy, proteins,
        species and relationships between them. It also enables ‘on the fly’
        custom annotations so users can define additional key entities of
        interest.
      </>
    ),
  },
  {
    image: '/images/point_kr.png',
    title: 'Knowledge Reconstruction',
    description: (
      <>
        Lifelike’s drawing canvas allows users to create connected content and
        express relationships between biological entities, provide evidence for
        those relationships including hyperlinks and direct connections to
        literature and other sources. Drag and drop from annotated papers and
        enrichment tables allows for fast knowledge reconstruction and visual
        note taking. Multiple maps can be merged into a comprehensive knowledge
        graph for graph analysis.
      </>
    ),
  },
  {
    image: '/images/point_patterns.png',
    title: 'Knowledge Visualization & Enrichment',
    description: (
      <>
        Lifelike provides an interactive knowledge graph visualizer that
        clusters relationships by type to simplify complex graphs. Graph nodes
        can be expanded and detailed supporting data can be viewed. Structured
        data can be uploaded and enriched against knowledge from many sources.
        Statistical analysis against ontologies as well as semantic analysis
        performed on text from public databases enables users to move from big
        picture view to details.
      </>
    ),
  },
  {
    image: '/images/point_graph.png',
    title: 'Search (Full Text and Graph Powered)',
    description: (
      <>
        Full-text and graph-powered search enables users to find non-obvious
        connections, and related concepts or find content based on synonyms.
        This search is seamlessly integrated throughout the application on a
        button click.
      </>
    ),
  },
];

function Points() {
  return (
    <div className="point-table">
      {points.map(({ image, title, description }, i) => (
        <div
          key={i}
          className="point-item row justify-content-center mr-lg-4 align-items-center"
        >
          <div
            className={classnames({
              'order-md-2': i % 2 === 0,
              'point-image col-md-4 mb-4 mb-lg-0': true,
            })}
          >
            <img src={image} alt={title} />
          </div>
          <div className="point-body col-md-8 col-lg-6">
            <h2 className="point-title">{title}</h2>
            <div className="point-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Points;
