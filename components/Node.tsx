import React from 'react';
import type { PositionedNode, Category, Tool } from '../types';

interface NodeProps {
  node: PositionedNode;
  onClick: () => void;
}

const Node: React.FC<NodeProps> = ({ node, onClick }) => {
  // Layer 1: Category
  if (node.type === 'category') {
    // FIX: Removed the unsafe type assertion `as Category`. Due to the improved
    // `PositionedNode` type in `types.ts`, TypeScript's control flow analysis now
    // correctly narrows `node` to the `Category` type within this `if` block.
    const category = node;
    const radius = 80;
    return (
      <g transform={`translate(${node.x}, ${node.y})`} onClick={onClick} className="cursor-pointer group">
        <circle r={radius + 5} fill={node.color} opacity="0.2" className="transition-all duration-300 group-hover:opacity-40" />
        <circle r={radius} fill={node.color} stroke="#fff" strokeWidth="4" strokeOpacity="0.7" className="transition-transform duration-300 group-hover:scale-105" />
        <text textAnchor="middle" dy=".1em" fill="white" className="font-bold select-none transition-transform duration-300 group-hover:scale-105" style={{ fontSize: '20px' }}>
          {node.name}
        </text>
        <text textAnchor="middle" dy="1.4em" fill="white" opacity="0.8" className="font-semibold select-none transition-transform duration-300 group-hover:scale-105" style={{ fontSize: '12px' }}>
          {category.tools.length} tools
        </text>
      </g>
    );
  }

  // Layer 2: Tool
  if (node.type === 'tool') {
    // FIX: Removed the unsafe type assertion `as Tool`. Due to the improved
    // `PositionedNode` type in `types.ts`, TypeScript's control flow analysis now
    // correctly narrows `node` to the `Tool` type within this `if` block.
    const tool = node;
    const radius = 65;
    const IconComponent = tool.icon;
    return (
      <g transform={`translate(${node.x}, ${node.y})`} onClick={onClick} className="cursor-pointer group">
        <circle r={radius} fill={node.color} stroke="#fff" strokeWidth="3" strokeOpacity="0.6" className="transition-transform duration-300 group-hover:scale-110" />
        {IconComponent && (
            <g transform="translate(-32.5, -32.5)">
                <IconComponent 
                    width={65} 
                    height={65} 
                    className="text-white opacity-80 p-2"
                />
            </g>
        )}
        <text textAnchor="middle" dy={radius + 18} fill="white" className="font-semibold select-none" style={{ fontSize: '14px' }}>
          {node.name}
        </text>
      </g>
    );
  }

  return null; // Projects are no longer rendered as nodes on the canvas
};

export default Node;
