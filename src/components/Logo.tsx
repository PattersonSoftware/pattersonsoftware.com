import React from 'react';
import LogoImage from '../assets/logo.png';
import { site } from '../siteConfig';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img src={LogoImage} alt={site.legalName} width={225} height={100} className={className} />
  );
};

export default Logo;
