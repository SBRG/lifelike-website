import { ReactNode } from 'react';
import { getMediaUrl } from './CloudImage';

interface Example {
  image: string;
  title: string;
  description: ReactNode;
}

const examples: Example[] = [
  {
    title: 'Knowledge graph for a celular process',
    image: 'lifelike-examples/example1.png',
    description: (
      <>
        The Lifelike knowledge-graph allows a broad view of available
        information for a cellular process of interest. Users can pull together
        information from a wide range of sources, map it onto a canvas, where
        the user can organize the data into a narrative, or a story. Graph
        algorithms can subsequently be used to analyze the connectivity and
        structure of the information. (Leimkühler, S. (2020), The biosynthesis
        of the molybdenum cofactors in Escherichia coli. Environ Microbiol, 22:
        2007-2026.
        <a
          href="https://doi.org/10.1111/1462-2920.15003"
          target="_blank"
          rel="noreferrer"
        >
          https:/doi.org/10.1111/1462-2920.15003
        </a>
        )
      </>
    ),
  },
];

function Examples() {
  return (
    <div className="row">
      {examples.map(({ title, image, description }) => (
        <figure key={title} className="figure mb-0">
          <h2 className="section-title">{title}</h2>
          <div className="shadow p-3 bg-white rounded">
            <a href={getMediaUrl(image)} target="_blank" rel="noreferrer">
              <img
                src={getMediaUrl(image, 'c_scale,w_1000')}
                className="cld-responsive spotlight-video w-100 figure-img img-fluid rounded"
                alt={title}
              />
            </a>
          </div>
          <figcaption className="figure-caption mt-1 text-justify pl-4 pr-4">
            {description}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Examples;
