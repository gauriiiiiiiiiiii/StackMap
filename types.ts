import React from 'react';

export interface NodeData {
  id: string;
  name: string;
  type: 'category' | 'tool';
  color: string;
}

export interface Tool extends NodeData {
  type: 'tool';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  details: {
    whatIsIt: string;
    pros?: string[];
    cons?: string[];
  };
}

export interface Category extends NodeData {
  type: 'category';
  tools: Tool[];
}

// FIX: Redefined PositionedNode as a more specific type alias. It is now a
// union type that includes all properties from either a Category or a Tool,
// plus the x and y coordinates. This preserves type information after
// the D3 simulation calculates node positions.
export type PositionedNode = (Category | Tool) & {
  x: number;
  y: number;
};

export interface LifecycleStage {
  id: string;
  name: string;
  description: string;
  color: string;
  tools: string[]; // List of tool names
}
