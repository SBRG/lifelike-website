import classnames from 'classnames';
import { FC } from 'react';
import './Section.scss';

export interface SectionProps {
  name?: string;
  title?: string;
  className?: string;
}

const Section: FC<SectionProps> = ({ name, title, className, children }) => (
  <section className={classnames('Section', className)}>
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </section>
);

export default Section;
