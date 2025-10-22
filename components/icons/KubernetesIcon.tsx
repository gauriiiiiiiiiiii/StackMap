import React from 'react';

const KubernetesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l9 4.9V17l-9 5-9-5V6.9L12 2zm0 2.31L4.9 8.2v7.6l7.1 3.89 7.1-3.89V8.2L12 4.31z" />
    <path d="M12 6.5l6.5 3.5v3l-6.5 3.5-6.5-3.5v-3L12 6.5zm0 1.95L7.25 10.5v1l4.75 2.55 4.75-2.55v-1L12 8.45z" />
  </svg>
);

export default KubernetesIcon;
