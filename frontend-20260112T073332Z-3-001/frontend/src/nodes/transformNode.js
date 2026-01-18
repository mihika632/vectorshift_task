// transformNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const config = {
    title: 'Transform',
    fields: [
      {
        name: 'operation',
        label: 'Operation',
        type: 'select',
        options: ['Uppercase', 'Lowercase', 'Trim', 'Reverse'],
        defaultValue: 'Uppercase',
      },
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: 'input',
      },
      {
        type: 'source',
        position: Position.Right,
        id: 'output',
      },
    ],
    content: 'Transform text data',
    style: {
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
