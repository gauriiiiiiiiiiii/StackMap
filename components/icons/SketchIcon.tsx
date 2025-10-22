import React from 'react';

const SketchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.2 6.2l-10-5c-.3-.1-.5-.1-.8 0l-10 5c-.3.1-.4.4-.4.7v11c0 .3.2.6.4.7l10 5c.1 0 .3.1.4.1s.3 0 .4-.1l10-5c.3-.1.4-.4.4-.7v-11c0-.3-.2-.6-.4-.7zM12 10.1L4.8 6.5l7.2-3.6 7.2 3.6-7.2 3.6zm-8 1.6l8 4v7.1l-8-4V11.7zm16 0V18.8l-8 4V15.7l8-4z" />
  </svg>
);

export default SketchIcon;