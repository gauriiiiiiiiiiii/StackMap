import React, { useEffect, useState } from 'react';
// FIX: Changed import from obsolete `Project` type to `Tool` to resolve the type error and align with the current data model.
import type { Tool } from '../types';
import CloseIcon from './icons/CloseIcon';

interface ProjectModalProps {
  // FIX: Updated the prop to use the `Tool` type and renamed it from `project` to `tool` for clarity.
  tool: Tool;
  onClose: () => void;
}

// FIX: Updated component signature to accept a `tool` prop instead of `project`.
const ProjectModal: React.FC<ProjectModalProps> = ({ tool, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mount animation
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    // Unmount after animation
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${show ? 'opacity-70' : 'opacity-0'}`}
        aria-hidden="true"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg mx-auto p-8 transform transition-all duration-300 ease-in-out border border-gray-700 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{
            background: `radial-gradient(circle, ${tool.color}33 0%, #1f2937 70%)`
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close project details"
        >
          <CloseIcon />
        </button>
        <h2 
          className="text-3xl font-bold mb-2 tracking-tight" 
          style={{ color: tool.color }}
        >
          {tool.name}
        </h2>
        <p className="text-gray-300 text-base leading-relaxed">
          {/* FIX: Changed from `project.description` to `tool.details.whatIsIt` to match the `Tool` type. */}
          {tool.details.whatIsIt}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
