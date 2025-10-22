import React from 'react';

const GrafanaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.2 2H4.5C3.1 2 2 3.1 2 4.5v10.3c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V9.1c0-.8-.7-1.5-1.5-1.5H16V4.5c0-1.4-1.1-2.5-2.5-2.5h-.8zM19 13.8H5v-2.3h14v2.3zm0-4.6H5V7h14v2.2z" />
    <circle cx="12" cy="18.5" r="1.5" />
  </svg>
);

export default GrafanaIcon;