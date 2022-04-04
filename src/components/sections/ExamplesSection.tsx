import { useLayoutEffect, useRef, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Example, { ExampleProps } from './Example';
import Section from './Section';
import { useLocation } from 'react-router-dom';

const examples: ExampleProps[] = [
  {
    id: 'molybdenum',
    image: 'lifelike-examples/example2.png',
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
    image: 'lifelike-examples/example2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu tellus vitae. Phasellus non quam imperdiet, finibus leo sit amet, pulvinar velit. Duis risus tellus, sollicitudin sit amet sodales eget, viverra at metus. In hac habitasse platea dictumst. Ut in dui ac enim congue commodo scelerisque non ante. In porta enim sed congue tincidunt. Quisque vel tempor ipsum. Suspendisse suscipit tortor est, et dictum lectus pellentesque in.',
    caption: (
      <>
        <em>
          <strong>Paper in figure:</strong> &nbsp; In non mi sit amet lorem
          gravida finibus non a lorem.{' '}
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
    image: 'lifelike-examples/example2.png',
    description:
      'Ahasellus non quam imperdiet, finibus leo sit amet, pulvinar velit. Duis risus tellus, sollicitudin sit amet sodales eget, viverra at metus. In hac habitasse platea dictumst. Ut in dui ac enim congue commodo scelerisque non ante. In porta enim sed congue tincidunt. Quisque vel tempor ipsum.',
    caption: (
      <>
        <em>
          <strong>Paper in figure:</strong> &nbsp; Proin ac dolor sed erat
          luctus feugiat. In non mi sit amet lorem gravida finibus non a lorem.
          Etiam nec justo imperdiet, cursus leo a, mattis quam.{' '}
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

const ExamplesSection = () => {
  const { hash } = useLocation();
  const selectedExampleRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useLayoutEffect(() => {
    if (selectedExampleRef.current && hash) {
      selectedExampleRef?.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setHasScrolled(true), 1000);
    }
  }, [selectedExampleRef]);

  return (
    <Section name="examples" title="Lifelike Examples" className="secondary">
      <Container>
        <Stack>
          {examples.map((example) => {
            const isSelected = hash === `#${example.id}`;
            return (
              <div
                key={`${example.id}-${hasScrolled}-${isSelected}`}
                ref={isSelected ? selectedExampleRef : undefined}
              >
                <Example
                  defaultIsOpen={hasScrolled && isSelected}
                  {...example}
                />
              </div>
            );
          })}
        </Stack>
      </Container>
    </Section>
  );
};

export default ExamplesSection;
