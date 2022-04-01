import { FC, ReactNode, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Lightbox from 'react-awesome-lightbox';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import './Example.scss';
import 'react-awesome-lightbox/build/style.css';

export interface ExampleProps {
  id: string;
  title?: string;
  description: string;
  image: string;
  caption?: ReactNode;
}

const Example: FC<ExampleProps> = ({
  id,
  title = '',
  description,
  image,
  caption,
}) => {
  const [open, setOpen] = useState(false);
  const imageSrc = `https://lifelike-bio.mo.cloudinary.net/${image}`;

  return (
    <>
      <Row className="Example mt-4">
        <a href={`#${id}`} id={id}></a>
        <Col lg={6} className="description">
          <p>{description}</p>
        </Col>

        <div className="vr" />

        <Col lg={6} className="mb-4 mb-lg-0">
          <Figure>
            {open && (
              <Lightbox
                image={imageSrc}
                title="Molybdenum"
                onClose={() => setOpen(false)}
              />
            )}
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              onClick={(ev) => {
                ev.preventDefault();
                setOpen(true);
              }}
            >
              <FigureImage
                src={`${imageSrc}?tx=w_800`}
                alt={id}
                width="100%"
                className="shadow"
              />
            </a>
            {caption && <FigureCaption>{caption}</FigureCaption>}
          </Figure>
        </Col>
      </Row>
      <div className="hr" />
    </>
  );
};

export default Example;
