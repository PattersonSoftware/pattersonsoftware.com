import React from 'react';
import LogoImage from '../assets/logo.png';
import { site } from '../siteConfig';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 225, height = 100, className = '' }) => {
  return (
    <img src={LogoImage} alt={site.legalName} width={width} height={height} className={className} />
  );
};

export default Logo;
