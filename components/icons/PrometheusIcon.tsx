import React from 'react';

const PrometheusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.8 13.9c-.8.8-2.1.8-2.8 0l-1.4-1.4c-.8-.8-.8-2.1 0-2.8l5.7-5.7c.8-.8 2.1-.8 2.8 0l1.4 1.4c.8.8.8 2.1 0 2.8l-5.7 5.7z" />
    <path d="M12.7 13.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4.4-1 1.4 0c.4.4.4 1 0 1.4z" />
  </svg>
);

export default PrometheusIcon;