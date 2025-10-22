import React, { useEffect, useState } from 'react';
import type { LifecycleStage } from '../types';
import CloseIcon from './icons/CloseIcon';

interface LifecycleModalProps {
  stages: LifecycleStage[];
  onClose: () => void;
}

const LifecycleModal: React.FC<LifecycleModalProps> = ({ stages, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
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
        className={`relative bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto p-8 transform transition-all duration-300 ease-in-out border border-gray-700 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close lifecycle details"
        >
          <CloseIcon />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-white tracking-tight">
          Software Development Lifecycle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map(stage => (
            <div key={stage.id} className="p-4 rounded-lg border" style={{ borderColor: stage.color, background: `${stage.color}1A`}}>
              <h3 className="text-xl font-bold mb-2" style={{ color: stage.color }}>{stage.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{stage.description}</p>
              <h4 className="font-semibold text-gray-200 mb-2">Tools:</h4>
              <div className="flex flex-wrap gap-2">
                {stage.tools.map(tool => (
                  <span key={tool} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifecycleModal;
