import Image from 'react-bootstrap/Image';
import Section from './Section';
import './FeaturesSection.scss';

interface Feature {
  image: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Extract concepts easily',
    description:
      'Upload any PDF, auto-extract knowledge, create new annotations on the fly, quickly understand unstructured text and cross-connect it with other sources of knowledge.',
    image: '/images/workflow_step_1.png',
  },
  {
    title: 'Make new connections',
    description:
      'Explore system extracted information, add additional curation and consolidate large amounts of knowledge into a big-picture view.',
    image: '/images/workflow_step_2.png',
  },
  {
    title: 'Leap beyond traditional research',
    description:
      'Perform deep analytics against a knowledge graph that integrates data from many public databases, leveraging prior work and research investments. Extract enriched data for external processing.',
    image: '/images/workflow_step_3.png',
  },
];

const FeaturesSection = () => (
  <Section name="features" className="Features">
    {features.map(({ image, title, description }) => (
      <div key={title} className="Features--item">
        <div className="Features--item--icon">
          <Image src={image} alt={title} />
        </div>
        <h2 className="Features--item--title">{title}</h2>
        <div className="Features--item--description">{description}</div>
      </div>
    ))}
  </Section>
);

export default FeaturesSection;
