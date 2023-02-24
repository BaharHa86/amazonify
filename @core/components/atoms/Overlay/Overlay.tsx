import React from 'react';

import styles from './Overlay.module.scss';

interface OvelayProps extends React.AllHTMLAttributes<HTMLDivElement> {
  variant: 'signin' | 'slider';
}

function Overlay({ className, variant }: OvelayProps) {
  const overlayClasses = `${styles[variant]} ${className}`;
  return <div className={overlayClasses} />;
}

export default Overlay;
