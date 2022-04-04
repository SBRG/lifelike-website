import { FC, ReactNode, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import FigureCaption from 'react-bootstrap/FigureCaption';
import FigureImage from 'react-bootstrap/FigureImage';
import Row from 'react-bootstrap/Row';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Example.scss';

export interface ExampleProps {
  id: string;
  title?: string;
  description: string;
  image: string;
  caption?: ReactNode;
  defaultIsOpen?: boolean;
}

const Example: FC<ExampleProps> = ({
  id,
  title = '',
  description,
  image,
  caption,
  defaultIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const imageSrc = `https://lifelike-bio.mo.cloudinary.net/${image}`;

  return (
    <>
      {isOpen && (
        <Lightbox
          imageTitle={title || description}
          imageCaption={caption}
          mainSrc={imageSrc}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
      <Row className="Example mt-4">
        <a href={`#${id}`} id={id}></a>
        <Col lg={6} className="description">
          <p>{description}</p>
        </Col>

        <div className="vr" />

        <Col lg={6} className="">
          <Figure>
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              onClick={(ev) => {
                ev.preventDefault();
                setIsOpen(true);
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
      <hr className="divider" />
    </>
  );
};

export default Example;
