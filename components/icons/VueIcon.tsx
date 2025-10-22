import React from 'react';

const VueIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#42b883" d="M12,2L2,12l10,10l10-10L12,2z" />
    <path fill="#35495e" d="M12,5.5L5.5,12l6.5,6.5l6.5-6.5L12,5.5z" />
  </svg>
);

export default VueIcon;
