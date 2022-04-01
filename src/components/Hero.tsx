import { FC, ReactNode } from 'react';

export interface HeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  actions?: ReactNode;
}

const Hero: FC<HeroProps> = ({ title, subtitle, actions }) => (
  <div className="wrapper d-lg-flex">
    <div className="intro-left">
      <h2 className="intro-title">{title}</h2>
      <div className="intro-subtitle">{subtitle}</div>
      <div className="intro-actions">{actions}</div>
    </div>
  </div>
);

export default Hero;
