import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Example, { ExampleProps } from './Example';
import Section from './Section';

const examples: ExampleProps[] = [
  {
    id: 'molybdenum',
    title: 'Knowledge graph for a celular process',
    image: 'lifelike-examples/example1.png',
    description:
      'The Lifelike knowledge-graph allows a broad view of available information for a cellular process of interest. Users can pull together information from a wide range of sources, map it onto a canvas, where the user can organize the data into a narrative, or a story (see figure below). Graph algorithms can subsequently be used to analyze the connectivity and structure of the information.',
    caption: (
      <>
        <em>
          <strong>Paper in figure:</strong> &nbsp; Leimkühler, S. (2020), The
          biosynthesis of the molybdenum cofactors in Escherichia coli. Environ
          Microbiol, 22: 2007-2026.{' '}
          <a
            href="https://doi.org/10.1111/1462-2920.15003"
            target="_blank"
            rel="noreferrer"
          >
            https:/doi.org/10.1111/1462-2920.15003
          </a>
        </em>
      </>
    ),
  },
  {
    id: 'molybdenum2',
    title: 'Knowledge graph for a celular process',
    image: 'lifelike-examples/example1.png',
    description:
      'The Lifelike knowledge-graph allows a broad view of available information for a cellular process of interest. Users can pull together information from a wide range of sources, map it onto a canvas, where the user can organize the data into a narrative, or a story (see figure below). Graph algorithms can subsequently be used to analyze the connectivity and structure of the information.',
    caption: (
      <>
        <em>
          <strong>Paper in figure:</strong> &nbsp; Leimkühler, S. (2020), The
          biosynthesis of the molybdenum cofactors in Escherichia coli. Environ
          Microbiol, 22: 2007-2026.{' '}
          <a
            href="https://doi.org/10.1111/1462-2920.15003"
            target="_blank"
            rel="noreferrer"
          >
            https:/doi.org/10.1111/1462-2920.15003
          </a>
        </em>
      </>
    ),
  },
  {
    id: 'molybdenum3',
    title: 'Knowledge graph for a celular process',
    image: 'lifelike-examples/example1.png',
    description:
      'The Lifelike knowledge-graph allows a broad view of available information for a cellular process of interest. Users can pull together information from a wide range of sources, map it onto a canvas, where the user can organize the data into a narrative, or a story (see figure below). Graph algorithms can subsequently be used to analyze the connectivity and structure of the information.',
    caption: (
      <>
        <em>
          <strong>Paper in figure:</strong> &nbsp; Leimkühler, S. (2020), The
          biosynthesis of the molybdenum cofactors in Escherichia coli. Environ
          Microbiol, 22: 2007-2026.{' '}
          <a
            href="https://doi.org/10.1111/1462-2920.15003"
            target="_blank"
            rel="noreferrer"
          >
            https:/doi.org/10.1111/1462-2920.15003
          </a>
        </em>
      </>
    ),
  },
];

const ExamplesSection = () => (
  <Section name="examples" title="Lifelike Examples" className="secondary">
    <Container>
      <Stack>
        {examples.map((example) => (
          <Example key={example.id} {...example} />
        ))}
      </Stack>
    </Container>
  </Section>
);

export default ExamplesSection;
