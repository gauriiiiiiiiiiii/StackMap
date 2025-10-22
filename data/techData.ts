import { Category } from '../types';
import D3Icon from '../components/icons/D3Icon';
import DockerIcon from '../components/icons/DockerIcon';
import FigmaIcon from '../components/icons/FigmaIcon';
import GitHubActionsIcon from '../components/icons/GitHubActionsIcon';
import GoIcon from '../components/icons/GoIcon';
import KubernetesIcon from '../components/icons/KubernetesIcon';
import NodejsIcon from '../components/icons/NodejsIcon';
import PythonIcon from '../components/icons/PythonIcon';
import ReactIcon from '../components/icons/ReactIcon';
import TailwindIcon from '../components/icons/TailwindIcon';
import VueIcon from '../components/icons/VueIcon';
import GraphQLIcon from '../components/icons/GraphQLIcon';
import JestIcon from '../components/icons/JestIcon';
import NextjsIcon from '../components/icons/NextjsIcon';
import ReduxIcon from '../components/icons/ReduxIcon';
import StyledComponentsIcon from '../components/icons/StyledComponentsIcon';
import SvelteIcon from '../components/icons/SvelteIcon';
import TypeScriptIcon from '../components/icons/TypeScriptIcon';
import ViteIcon from '../components/icons/ViteIcon';
import GrpcIcon from '../components/icons/GrpcIcon';
import JavaIcon from '../components/icons/JavaIcon';
import MongoDbIcon from '../components/icons/MongoDbIcon';
import PHPIcon from '../components/icons/PHPIcon';
import PostgresqlIcon from '../components/icons/PostgresqlIcon';
import RedisIcon from '../components/icons/RedisIcon';
import RestApiIcon from '../components/icons/RestApiIcon';
import RubyIcon from '../components/icons/RubyIcon';
import RustIcon from '../components/icons/RustIcon';
import AdobeXdIcon from '../components/icons/AdobeXdIcon';
import AnsibleIcon from '../components/icons/AnsibleIcon';
import SketchIcon from '../components/icons/SketchIcon';
import StorybookIcon from '../components/icons/StorybookIcon';
import TerraformIcon from '../components/icons/TerraformIcon';
import MysqlIcon from '../components/icons/MysqlIcon';
import SqliteIcon from '../components/icons/SqliteIcon';
import JenkinsIcon from '../components/icons/JenkinsIcon';
import GitlabIcon from '../components/icons/GitlabIcon';
import PrometheusIcon from '../components/icons/PrometheusIcon';
import GrafanaIcon from '../components/icons/GrafanaIcon';
import InvisionIcon from '../components/icons/InvisionIcon';
import FramerIcon from '../components/icons/FramerIcon';
import CypressIcon from '../components/icons/CypressIcon';
import PlaywrightIcon from '../components/icons/PlaywrightIcon';
import TestingLibraryIcon from '../components/icons/TestingLibraryIcon';

export const techData: Category[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    type: 'category',
    color: '#61DAFB',
    tools: [
      { id: 'react', name: 'React', type: 'tool', color: '#61DAFB', icon: ReactIcon, details: { whatIsIt: 'React is a declarative JavaScript library for building complex, stateful user interfaces in a component-based way. You would use it as the foundation of a single-page application (SPA), creating reusable UI pieces (components) that manage their own state and efficiently update the browser when data changes.' } },
      { id: 'vue', name: 'Vue.js', type: 'tool', color: '#4FC08D', icon: VueIcon, details: { whatIsIt: 'Vue is an approachable, progressive JavaScript framework for building user interfaces. You would use it for its gentle learning curve and flexible architecture, allowing you to create anything from small interactive widgets to sophisticated single-page applications with ease.' } },
      { id: 'svelte', name: 'Svelte', type: 'tool', color: '#FF3E00', icon: SvelteIcon, details: { whatIsIt: 'Svelte is a radical new approach to building user interfaces. Unlike traditional frameworks, Svelte is a compiler that converts your components into highly efficient, imperative JavaScript that surgically updates the DOM, resulting in faster and smaller applications.' } },
      { id: 'nextjs', name: 'Next.js', type: 'tool', color: '#FFFFFF', icon: NextjsIcon, details: { whatIsIt: 'Next.js is a production-ready React framework that provides a suite of features like server-side rendering (SSR) and static site generation (SSG). You would use it to build fast, SEO-friendly React applications without having to configure tools like Webpack or Babel yourself.' } },
      { id: 'redux', name: 'Redux', type: 'tool', color: '#764ABC', icon: ReduxIcon, details: { whatIsIt: 'Redux is a predictable state container for JavaScript applications, most commonly used with React. You would use it to manage the entire state of your application in a single, centralized object, making state changes more predictable and traceable, especially in large, complex apps.' } },
      { id: 'tailwind', name: 'Tailwind CSS', type: 'tool', color: '#38B2AC', icon: TailwindIcon, details: { whatIsIt: 'Tailwind is a utility-first CSS framework for rapidly building custom user interfaces. Instead of writing custom CSS, you apply pre-existing utility classes directly in your HTML, allowing for quick prototyping and development without leaving your markup.' } },
      { id: 'styled-components', name: 'Styled Components', type: 'tool', color: '#DB7093', icon: StyledComponentsIcon, details: { whatIsIt: 'Styled Components is a CSS-in-JS library that allows you to write actual CSS code to style your components. You would use it to create encapsulated styles that are tied to a specific component, avoiding class name collisions and keeping your styles colocated with your logic.' } },
      { id: 'vite', name: 'Vite', type: 'tool', color: '#646CFF', icon: ViteIcon, details: { whatIsIt: 'Vite is a next-generation frontend build tool that provides an extremely fast development experience. You would use it to bundle your application for production and to serve your code during development with near-instant Hot Module Replacement (HMR).' } },
      { id: 'typescript', name: 'TypeScript', type: 'tool', color: '#3178C6', icon: TypeScriptIcon, details: { whatIsIt: 'TypeScript is a superset of JavaScript that adds static types. You would use it in your project to catch errors early during development, improve code quality and maintainability, and provide better autocompletion and developer tooling.' } },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    type: 'category',
    color: '#8CC84B',
    tools: [
      { id: 'nodejs', name: 'Node.js', type: 'tool', color: '#8CC84B', icon: NodejsIcon, details: { whatIsIt: 'Node.js is a JavaScript runtime that allows you to run JavaScript on the server. You would use it to build fast, scalable, and data-intensive backend services and APIs, leveraging JavaScript for both frontend and backend development.' } },
      { id: 'python', name: 'Python', type: 'tool', color: '#3776AB', icon: PythonIcon, details: { whatIsIt: 'Python is a versatile, high-level programming language known for its readability. You would use it on the backend with frameworks like Django or Flask to build web applications, APIs, data science models, and automation scripts.' } },
      { id: 'go', name: 'Go', type: 'tool', color: '#00ADD8', icon: GoIcon, details: { whatIsIt: 'Go (Golang) is a statically typed, compiled language designed at Google for building simple, reliable, and efficient software. You would use it for high-performance backend services, microservices, and command-line tools where concurrency and speed are critical.' } },
      { id: 'java', name: 'Java', type: 'tool', color: '#007396', icon: JavaIcon, details: { whatIsIt: 'Java is a robust, class-based, object-oriented programming language. You would use it with frameworks like Spring to build large-scale, enterprise-level backend applications, Android apps, and systems where performance and stability are paramount.' } },
      { id: 'ruby', name: 'Ruby', type: 'tool', color: '#CC342D', icon: RubyIcon, details: { whatIsIt: 'Ruby is a dynamic programming language with a focus on simplicity and productivity. You would typically use it with the Ruby on Rails framework to rapidly develop full-featured web applications, following convention-over-configuration principles.' } },
      { id: 'rust', name: 'Rust', type: 'tool', color: '#DE3423', icon: RustIcon, details: { whatIsIt: 'Rust is a systems programming language focused on safety, speed, and concurrency. You would use it to build highly performant and memory-safe backend services, embedded systems, or to create WebAssembly modules for web applications.' } },
      { id: 'php', name: 'PHP', type: 'tool', color: '#777BB4', icon: PHPIcon, details: { whatIsIt: 'PHP is a popular server-side scripting language especially suited for web development. You would use it to build dynamic websites and web applications, often in conjunction with popular content management systems like WordPress or frameworks like Laravel.' } },
      { id: 'rest', name: 'REST API', type: 'tool', color: '#B0B0B0', icon: RestApiIcon, details: { whatIsIt: 'REST (Representational State Transfer) is an architectural style for designing networked applications. You would use its principles (like using standard HTTP methods) to design and build APIs that are simple, scalable, and easy for clients to consume.' } },
      { id: 'graphql', name: 'GraphQL', type: 'tool', color: '#E10098', icon: GraphQLIcon, details: { whatIsIt: 'GraphQL is a query language for your API that allows clients to request exactly the data they need. You would use it on your backend to provide a flexible and efficient alternative to REST, reducing over-fetching and under-fetching of data.' } },
      { id: 'grpc', name: 'gRPC', type: 'tool', color: '#4285F4', icon: GrpcIcon, details: { whatIsIt: 'gRPC is a high-performance, open-source universal RPC (Remote Procedure Call) framework. You would use it for efficient communication between microservices, where low latency and high throughput are critical, often in multilingual environments.' } },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    type: 'category',
    color: '#4DB33D',
    tools: [
      { id: 'mongodb', name: 'MongoDB', type: 'tool', color: '#4DB33D', icon: MongoDbIcon, details: { whatIsIt: 'MongoDB is a popular NoSQL, document-oriented database. You would use it to store flexible, JSON-like data, making it ideal for applications with evolving schemas, content management systems, and real-time analytics.' } },
      { id: 'postgresql', name: 'PostgreSQL', type: 'tool', color: '#336791', icon: PostgresqlIcon, details: { whatIsIt: 'PostgreSQL is a powerful, open-source object-relational database system known for its reliability and feature robustness. You would use it for applications requiring complex queries, data integrity, and support for structured data, such as e-commerce or financial systems.' } },
      { id: 'redis', name: 'Redis', type: 'tool', color: '#DC382D', icon: RedisIcon, details: { whatIsIt: 'Redis is an in-memory data structure store, used as a database, cache, and message broker. You would use it for extremely fast data access, making it perfect for caching, session management, real-time leaderboards, and pub/sub messaging.' } },
      { id: 'mysql', name: 'MySQL', type: 'tool', color: '#4479A1', icon: MysqlIcon, details: { whatIsIt: 'MySQL is one of the world\'s most popular open-source relational databases. You would use it as a reliable, straightforward, and performant database for a wide variety of applications, from small websites to large enterprise systems, especially within the LAMP (Linux, Apache, MySQL, PHP) stack.' } },
      { id: 'sqlite', name: 'SQLite', type: 'tool', color: '#003B57', icon: SqliteIcon, details: { whatIsIt: 'SQLite is a C-language library that implements a small, fast, self-contained, serverless SQL database engine. You would use it for mobile applications, desktop software, or as an embedded database where you need a simple, file-based database without a separate server process.' } },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    type: 'category',
    color: '#2496ED',
    tools: [
      { id: 'docker', name: 'Docker', type: 'tool', color: '#2496ED', icon: DockerIcon, details: { whatIsIt: 'Docker is a platform for developing, shipping, and running applications in isolated environments called containers. You would use it to package your application and its dependencies together, ensuring it runs consistently across different environments from development to production.' } },
      { id: 'kubernetes', name: 'Kubernetes', type: 'tool', color: '#326CE5', icon: KubernetesIcon, details: { whatIsIt: 'Kubernetes (K8s) is an open-source system for automating the deployment, scaling, and management of containerized applications. You would use it to orchestrate and manage your Docker containers at scale, handling things like service discovery, load balancing, and self-healing.' } },
      { id: 'github-actions', name: 'GitHub Actions', type: 'tool', color: '#2088FF', icon: GitHubActionsIcon, details: { whatIsIt: 'GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) platform integrated into your GitHub repository. You would use it to automate your software workflows, such as running tests, building your application, and deploying it to a server every time you push code.' } },
      { id: 'terraform', name: 'Terraform', type: 'tool', color: '#623CE4', icon: TerraformIcon, details: { whatIsIt: 'Terraform is an Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure safely and efficiently. You would use it to define your cloud infrastructure (like servers, databases, and networks) in configuration files, which you can then apply to providers like AWS, Azure, or Google Cloud.' } },
      { id: 'ansible', name: 'Ansible', type: 'tool', color: '#EE0000', icon: AnsibleIcon, details: { whatIsIt: 'Ansible is an open-source tool for software provisioning, configuration management, and application deployment. You would use it to automate the setup and configuration of your servers, pushing updates and ensuring all your machines are in a consistent, desired state.' } },
      { id: 'jenkins', name: 'Jenkins', type: 'tool', color: '#D24939', icon: JenkinsIcon, details: { whatIsIt: 'Jenkins is a highly extensible, open-source automation server used for CI/CD. You would use it to create complex build pipelines that automatically compile, test, package, and deploy your software, integrating with a vast ecosystem of plugins.' } },
      { id: 'gitlab-ci', name: 'GitLab CI/CD', type: 'tool', color: '#FCA121', icon: GitlabIcon, details: { whatIsIt: 'GitLab CI/CD is a powerful CI/CD tool built directly into the GitLab platform. You would use it for its tight integration with your source code, issue tracking, and merge requests, allowing you to build, test, and deploy code from a single application.' } },
      { id: 'prometheus', name: 'Prometheus', type: 'tool', color: '#E6522C', icon: PrometheusIcon, details: { whatIsIt: 'Prometheus is an open-source monitoring and alerting toolkit. You would use it to collect and store time-series data (metrics) from your applications and infrastructure, allowing you to query this data and set up alerts for when things go wrong.' } },
      { id: 'grafana', name: 'Grafana', type: 'tool', color: '#F46800', icon: GrafanaIcon, details: { whatIsIt: 'Grafana is an open-source platform for monitoring and observability that allows you to query, visualize, and alert on metrics. You would use it to create beautiful, informative dashboards by connecting it to data sources like Prometheus, making it easy to understand the state of your systems at a glance.' } },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    type: 'category',
    color: '#F24E1E',
    tools: [
      { id: 'figma', name: 'Figma', type: 'tool', color: '#F24E1E', icon: FigmaIcon, details: { whatIsIt: 'Figma is a collaborative, web-based interface design tool. You would use it to create high-fidelity mockups, interactive prototypes, and design systems for your web and mobile applications, allowing designers and developers to work together in real-time.' } },
      { id: 'sketch', name: 'Sketch', type: 'tool', color: '#F7B500', icon: SketchIcon, details: { whatIsIt: 'Sketch is a vector graphics editor for macOS used for UI and UX design. You would use it for its powerful vector editing tools and vast plugin ecosystem to design interfaces, create icons, and hand off assets to developers.' } },
      { id: 'adobexd', name: 'Adobe XD', type: 'tool', color: '#FF61F6', icon: AdobeXdIcon, details: { whatIsIt: 'Adobe XD is a vector-based design tool for web and mobile apps. You would use it to design, prototype, and share user experiences, with strong integration into the Adobe Creative Cloud ecosystem for a seamless design workflow.' } },
      { id: 'storybook', name: 'Storybook', type: 'tool', color: '#FF4785', icon: StorybookIcon, details: { whatIsIt: 'Storybook is a tool for building and documenting UI components in isolation. You would use it to develop, view, and test your React, Vue, or Angular components independently from your main application, creating a living style guide and component library.' } },
      { id: 'd3', name: 'D3.js', type: 'tool', color: '#F9A03C', icon: D3Icon, details: { whatIsIt: 'D3.js is a powerful JavaScript library for creating custom, dynamic data visualizations in the browser. You would use it when you need to create unique charts, graphs, or maps that go beyond standard charting libraries, by binding arbitrary data to a Document Object Model (DOM).' } },
      { id: 'invision', name: 'InVision', type: 'tool', color: '#FF3366', icon: InvisionIcon, details: { whatIsIt: 'InVision is a digital product design platform that helps you create rich, interactive prototypes. You would use it by uploading static design screens from tools like Figma or Sketch and then adding hotspots to create clickable, shareable prototypes for user testing and stakeholder feedback.' } },
      { id: 'framer', name: 'Framer', type: 'tool', color: '#0055FF', icon: FramerIcon, details: { whatIsIt: 'Framer is an interactive design tool for creating realistic prototypes and shipping production-ready websites. You would use it to go beyond static mockups by adding complex animations, interactions, and even integrating real data, blurring the line between design and development.' } },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    type: 'category',
    color: '#C21325',
    tools: [
      { id: 'jest', name: 'Jest', type: 'tool', color: '#C21325', icon: JestIcon, details: { whatIsIt: 'Jest is a popular JavaScript testing framework with a focus on simplicity. You would use it to write unit and integration tests for your JavaScript code, especially for React applications, as it comes with features like mocking and code coverage built-in.' } },
      { id: 'cypress', name: 'Cypress', type: 'tool', color: '#17202C', icon: CypressIcon, details: { whatIsIt: 'Cypress is a next-generation front-end testing tool built for the modern web. You would use it to write and run end-to-end tests directly in the browser, allowing you to test your application from a user\'s perspective by clicking buttons, filling forms, and verifying content.' } },
      { id: 'playwright', name: 'Playwright', type: 'tool', color: '#2EAD33', icon: PlaywrightIcon, details: { whatIsIt: 'Playwright is a modern end-to-end testing framework from Microsoft that enables reliable testing across all modern browsers. You would use it to automate browser interactions, test user flows, and ensure your web application works consistently on Chromium, Firefox, and WebKit.' } },
      { id: 'testing-library', name: 'Testing Library', type: 'tool', color: '#E33332', icon: TestingLibraryIcon, details: { whatIsIt: 'Testing Library is a family of packages that encourages good testing practices by helping you write tests that resemble how your users interact with your software. You would use it with Jest to test your React components by querying for elements in a user-centric way, such as by text content or accessibility roles.' } },
    ],
  },
];