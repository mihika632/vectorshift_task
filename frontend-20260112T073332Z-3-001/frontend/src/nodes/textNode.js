// textNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const config = {
    title: 'Text',
    fields: [
      {
        name: 'text',
        label: 'Text',
        type: 'textarea',
        defaultValue: '{{input}}',
      },
    ],
    handles: [
      {
        type: 'source',
        position: Position.Right,
        id: 'output',
      },
    ],
    dynamicHandles: true, // Enable dynamic handle creation based on variables
    style: {
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
