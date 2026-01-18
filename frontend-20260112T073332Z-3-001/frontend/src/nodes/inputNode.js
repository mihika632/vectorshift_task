// inputNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const config = {
    title: 'Input',
    fields: [
      {
        name: 'inputName',
        label: 'Name',
        type: 'text',
        defaultValue: id.replace('customInput-', 'input_'),
      },
      {
        name: 'inputType',
        label: 'Type',
        type: 'select',
        options: ['Text', 'File'],
        defaultValue: 'Text',
      },
    ],
    handles: [
      {
        type: 'source',
        position: Position.Right,
        id: 'value',
      },
    ],
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
