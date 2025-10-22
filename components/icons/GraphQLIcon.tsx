import React from 'react';

const GraphQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 400 400" fill="currentColor" {...props}>
    <path d="M200.9 292.4l-89 51.4v-103l89 51.6zm-1.8-193.3L23 150.5v103l87-50.2V99.1zm1.8-18.1l89-51.4v103l-89-51.6zm87.2 69.5l86-50.2v103l-87 50.2V150.5zm-88.1 123.6l-89-51.3v-51.4l89 51.5v51.2zM200 400l-175-101V101L200 0l175 101v198L200 400zm-143.4-115.4l142.5 82.3 142.5-82.3V115.4L200.9 33.1 57.5 115.4v169.2zM289 100.9l-88 51V255l88-51.2V100.9z" />
    <circle cx="200" cy="42.3" r="31.4" />
    <circle cx="343.8" cy="121" r="31.4" />
    <circle cx="343.8" cy="279" r="31.4" />
    <circle cx="200" cy="357.7" r="31.4" />
    <circle cx="56.2" cy="279" r="31.4" />
    <circle cx="56.2" cy="121" r="31.4" />
  </svg>
);

export default GraphQLIcon;