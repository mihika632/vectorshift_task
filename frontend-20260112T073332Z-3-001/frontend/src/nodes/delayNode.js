// delayNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const config = {
    title: 'Delay',
    fields: [
      {
        name: 'duration',
        label: 'Duration (ms)',
        type: 'number',
        defaultValue: 1000,
        min: 0,
        max: 10000,
        step: 100,
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
    content: 'Add delay to pipeline',
    style: {
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
