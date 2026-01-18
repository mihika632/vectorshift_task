// aggregatorNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const AggregatorNode = ({ id, data }) => {
  const config = {
    title: 'Aggregator',
    fields: [
      {
        name: 'method',
        label: 'Method',
        type: 'select',
        options: ['Concatenate', 'Merge', 'Join'],
        defaultValue: 'Concatenate',
      },
      {
        name: 'separator',
        label: 'Separator',
        type: 'text',
        defaultValue: ', ',
      },
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: 'input1',
        style: { top: '33%' },
      },
      {
        type: 'target',
        position: Position.Left,
        id: 'input2',
        style: { top: '50%' },
      },
      {
        type: 'target',
        position: Position.Left,
        id: 'input3',
        style: { top: '67%' },
      },
      {
        type: 'source',
        position: Position.Right,
        id: 'output',
      },
    ],
    content: 'Combine multiple inputs',
    style: {
      background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
