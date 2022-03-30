import { ReactNode } from 'react';

interface Feature {
  image: string;
  title: string;
  description: ReactNode;
}

const features: Feature[] = [
  {
    title: 'Extract concepts easily',
    image: '/images/workflow_step_1.png',
    description: (
      <>
        Upload any PDF, auto-extract knowledge, create new annotations on the
        fly, quickly understand unstructured text and cross-connect it with
        other sources of knowledge.
      </>
    ),
  },
  {
    title: 'Make new connections',
    image: '/images/workflow_step_2.png',
    description: (
      <>
        Explore system extracted information, add additional curation and
        consolidate large amounts of knowledge into a big-picture view.
      </>
    ),
  },
  {
    image: '/images/workflow_step_3.png',
    title: 'Leap beyond traditional research',
    description: (
      <>
        Perform deep analytics against a knowledge graph that integrates data
        from many public databases, leveraging prior work and research
        investments. Extract enriched data for external processing.
      </>
    ),
  },
];

function Features() {
  return (
    <div className="feature-table">
      {features.map(({ image, title, description }) => (
        <div key={title} className="feature-item">
          <div className="feature-icon">
            <img src={image} alt={title} />
          </div>
          <h2 className="feature-title">{title}</h2>
          <div className="feature-description">{description}</div>
        </div>
      ))}
    </div>
  );
}

export default Features;
