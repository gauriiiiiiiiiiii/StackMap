import React, { useState, useMemo } from 'react';
import Canvas from './components/Canvas';
import ProjectModal from './components/ProjectModal';
import LifecycleModal from './components/LifecycleModal';
import { techData } from './data/techData';
import { lifecycleData } from './data/lifecycleData';
import type { NodeData, Category, Tool } from './types';
import ArrowLeftIcon from './components/icons/ArrowLeftIcon';

function App() {
  const [history, setHistory] = useState<NodeData[][]>([techData]);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isLifecycleModalOpen, setLifecycleModalOpen] = useState(false);

  const currentNodes = history[history.length - 1];
  const isRootView = history.length === 1;

  const currentCategoryName = useMemo(() => {
    if (isRootView) return "Tech Stack Categories";
    const parentNodeList = history[history.length - 2];
    const parentCategory = parentNodeList.find(node => node.type === 'category' && (node as Category).tools === currentNodes) as Category;
    return parentCategory ? parentCategory.name : "Tools";
  }, [history, isRootView, currentNodes]);

  const handleNodeClick = (node: NodeData) => {
    if (node.type === 'category') {
      const category = node as Category;
      setHistory([...history, category.tools]);
    } else if (node.type === 'tool') {
      setSelectedTool(node as Tool);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  return (
    <div className="w-screen h-screen bg-gray-900 text-white font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas nodes={currentNodes} onNodeClick={handleNodeClick} isRootView={isRootView} />
      </div>

      {/* Animated Header/Title Block */}
      <div className={`absolute z-10 transition-all duration-700 ease-in-out ${isRootView ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center' : 'top-6 left-6'}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className={`p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 ${!isRootView ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
            aria-label="Go back"
          >
            <ArrowLeftIcon />
          </button>
          <h1 className={`font-bold tracking-tight transition-all duration-700 ${isRootView ? 'text-5xl' : 'text-2xl'}`}>
            {isRootView ? 'Tech Stack Visualizer' : currentCategoryName}
          </h1>
        </div>
        <p className={`text-gray-400 mt-2 transition-opacity duration-300 ${isRootView ? 'opacity-100' : 'opacity-0'}`}>
          Click a category to explore
        </p>
      </div>

      {/* Top-Right Buttons */}
      <div className={`absolute top-6 right-6 z-10 transition-opacity duration-500 ${!isRootView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLifecycleModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold"
          >
            SDLC
          </button>
        </div>
      </div>
      
      {selectedTool && (
        <ProjectModal tool={selectedTool} onClose={handleCloseModal} />
      )}

      {isLifecycleModalOpen && (
        <LifecycleModal stages={lifecycleData} onClose={() => setLifecycleModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
