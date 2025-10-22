import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import type { NodeData, PositionedNode } from '../types';
import Node from './Node';

interface CanvasProps {
  nodes: NodeData[];
  onNodeClick: (node: NodeData) => void;
  isRootView: boolean;
}

const Canvas: React.FC<CanvasProps> = ({ nodes, onNodeClick, isRootView }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const [positionedNodes, setPositionedNodes] = useState<PositionedNode[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
        if (!entries || entries.length === 0) {
            return;
        }
        const { width, height } = entries[0].contentRect;
        setDimensions({ width, height });
    });

    if (svgRef.current) {
        resizeObserver.observe(svgRef.current);
    }

    return () => {
        if (svgRef.current) {
            resizeObserver.unobserve(svgRef.current);
        }
    };
  }, []);

  useEffect(() => {
    if (!nodes.length || dimensions.width === 0) return;

    const simulationNodes: (NodeData & d3.SimulationNodeDatum)[] = nodes.map(node => ({ ...node }));
    
    const chargeStrength = isRootView ? -1000 : -500;
    const collisionRadius = isRootView ? 105 : 90;

    const simulation = d3.forceSimulation(simulationNodes)
      .force('charge', d3.forceManyBody().strength(chargeStrength))
      .force('x', d3.forceX(dimensions.width / 2).strength(0.05))
      .force('y', d3.forceY(dimensions.height / 2).strength(0.05))
      .force('collision', d3.forceCollide().radius(collisionRadius));
    
    if (isRootView) {
        const radialForce = Math.min(dimensions.width, dimensions.height) / 3;
        simulation.force('radial', d3.forceRadial(radialForce, dimensions.width / 2, dimensions.height / 2).strength(0.3));
    }
      
    simulation.on('tick', () => {
         setPositionedNodes([...simulationNodes].map(n => ({
            ...n,
            x: n.x ?? 0,
            y: n.y ?? 0
         })));
      })
      .on('end', () => {
        setPositionedNodes(simulationNodes.map(n => ({
          ...n,
          x: n.x ?? 0,
          y: n.y ?? 0
        })));
      });

    return () => {
      simulation.stop();
    };
  }, [nodes, dimensions, isRootView]);
  
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
      });

    svg.call(zoom);

    // Center on load
    const initialTransform = d3.zoomIdentity.translate(0, 0).scale(1);
    svg.call(zoom.transform, initialTransform);

    return () => {
      svg.on('.zoom', null);
    };
  }, []);

  return (
    <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing">
      <g ref={gRef}>
        {positionedNodes.map((node) => (
          <Node key={node.id} node={node} onClick={() => onNodeClick(node)} />
        ))}
      </g>
    </svg>
  );
};

export default Canvas;