// apiNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const config = {
    title: 'API Call',
    fields: [
      {
        name: 'url',
        label: 'URL',
        type: 'text',
        defaultValue: 'https://api.example.com',
      },
      {
        name: 'method',
        label: 'Method',
        type: 'select',
        options: ['GET', 'POST', 'PUT', 'DELETE'],
        defaultValue: 'GET',
      },
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: 'body',
        style: { top: '40%' },
      },
      {
        type: 'target',
        position: Position.Left,
        id: 'headers',
        style: { top: '60%' },
      },
      {
        type: 'source',
        position: Position.Right,
        id: 'response',
      },
    ],
    content: 'Make HTTP API calls',
    style: {
      background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
