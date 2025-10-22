import { LifecycleStage } from '../types';

export const lifecycleData: LifecycleStage[] = [
    {
        id: 'plan',
        name: 'Plan',
        description: 'Gather requirements, define project scope, and create a roadmap. Tools like Figma and Storybook help visualize the product early on.',
        color: '#3498db',
        tools: ['Figma', 'Storybook'],
    },
    {
        id: 'code',
        name: 'Code',
        description: 'The development phase where engineers write code. This involves a wide range of languages, frameworks, and tools to build the application.',
        color: '#2ecc71',
        tools: ['React', 'Node.js', 'TypeScript', 'Python', 'Go', 'Docker'],
    },
    {
        id: 'build',
        name: 'Build',
        description: 'Compile source code and package it into a runnable format. Build tools like Vite and automation servers are key here.',
        color: '#f1c40f',
        tools: ['Vite', 'GitHub Actions', 'Docker'],
    },
    {
        id: 'test',
        name: 'Test',
        description: 'Ensure the software meets quality standards through various testing methods. Automated testing frameworks are crucial for this stage.',
        color: '#e67e22',
        tools: ['Jest', 'GitHub Actions'],
    },
    {
        id: 'release',
        name: 'Release',
        description: 'Prepare the application for deployment. This includes versioning and creating release artifacts.',
        color: '#9b59b6',
        tools: ['GitHub Actions'],
    },
    {
        id: 'deploy',
        name: 'Deploy',
        description: 'Push the application to production environments. Infrastructure as Code and container orchestration tools are widely used.',
        color: '#e74c3c',
        tools: ['Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    },
    {
        id: 'operate',
        name: 'Operate',
        description: 'Maintain the application in production, including monitoring, logging, and performance management.',
        color: '#1abc9c',
        tools: ['Kubernetes', 'Docker'],
    },
];
