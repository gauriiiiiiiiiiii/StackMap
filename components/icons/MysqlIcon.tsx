import React from 'react';

const MysqlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15v-4H9v-2h2V7h2v4h2v2h-2v4h-2z" />
    <path d="M12.5 10.1c-1.1-.5-2.3-.8-3.5-.8-2.5 0-4.7 1.1-6.1 2.9.2-.1.4-.2.6-.2 1.9 0 3.5 1.6 3.5 3.5 0 .3 0 .6-.1.9 1.2 1.3 2.9 2.1 4.7 2.1 3.9 0 7-3.1 7-7 0-1.5-.5-2.9-1.2-4.1-.3.2-.6.4-.9.6z" />
  </svg>
);

export default MysqlIcon;