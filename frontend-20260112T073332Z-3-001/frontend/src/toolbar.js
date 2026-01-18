// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '16px', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderBottom: '2px solid #4A90E2',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{ 
                color: '#fff', 
                margin: '0 0 16px 0', 
                fontSize: '20px',
                fontWeight: 'bold',
            }}>
                Pipeline Nodes
            </h2>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px',
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='aggregator' label='Aggregator' />
                <DraggableNode type='api' label='API Call' />
            </div>
        </div>
    );
};
