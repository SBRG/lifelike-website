import { ReactNode } from 'react';
import classnames from 'classnames';

interface SectionProps {
  name: string;
  title?: string;
  withDivider?: string;
  isPageSection?: boolean;
  children: ReactNode;
}

function Section({
  name,
  title,
  withDivider,
  isPageSection,
  children,
}: SectionProps) {
  return (
    <>
      {withDivider && <h2 className="section-divider">{withDivider}</h2>}
      <section
        className={classnames({
          'page-section': isPageSection,
          [`section-${name}`]: true
        })}
      >
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </section>  
      ;
    </>
  );
}

export default Section;
