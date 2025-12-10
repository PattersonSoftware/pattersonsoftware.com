import React from 'react';
import LogoImage from '../assets/logo.png';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 225, height = 100, className = '' }: LogoProps) => {
  return (
    <img
      src={LogoImage}
      alt="Patterson Software, LLC"
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Logo;
