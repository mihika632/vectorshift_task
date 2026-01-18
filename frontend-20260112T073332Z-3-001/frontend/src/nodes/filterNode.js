// filterNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const config = {
    title: 'Filter',
    fields: [
      {
        name: 'condition',
        label: 'Condition',
        type: 'text',
        defaultValue: 'length > 10',
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
        id: 'passed',
        style: { top: '40%' },
      },
      {
        type: 'source',
        position: Position.Right,
        id: 'failed',
        style: { top: '60%' },
      },
    ],
    content: 'Filter data based on condition',
    style: {
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
