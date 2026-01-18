// outputNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const config = {
    title: 'Output',
    fields: [
      {
        name: 'outputName',
        label: 'Name',
        type: 'text',
        defaultValue: id.replace('customOutput-', 'output_'),
      },
      {
        name: 'outputType',
        label: 'Type',
        type: 'select',
        options: ['Text', 'Image'],
        defaultValue: 'Text',
      },
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: 'value',
      },
    ],
    style: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
