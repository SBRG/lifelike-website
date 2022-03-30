import { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  actions?: ReactNode;
}

function Hero({ title, subtitle, actions }: HeroProps) {
  return (
    <div className="wrapper d-lg-flex">
      <div className="intro-left">
        <h2 className="intro-title">{title}</h2>
        <div className="intro-subtitle">{subtitle}</div>
        <div className="intro-actions">{actions}</div>
      </div>
    </div>
  );
}

export default Hero;
