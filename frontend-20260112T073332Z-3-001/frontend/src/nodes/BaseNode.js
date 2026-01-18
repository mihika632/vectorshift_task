// BaseNode.js
// Abstraction for creating nodes with shared functionality

import { useState, useEffect, useMemo } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, config }) => {
  const {
    title,
    fields = [],
    handles = [],
    content,
    style = {},
    dynamicHandles = false,
  } = config;

  // Initialize state for all fields
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    fields.forEach(field => {
      initialState[field.name] = data?.[field.name] || field.defaultValue || '';
    });
    return initialState;
  });

  // For text nodes with variable detection
  const [dynamicHandlesList, setDynamicHandlesList] = useState([]);

  // Extract variables from text (for Part 3)
  useEffect(() => {
    if (dynamicHandles) {
      const textField = fields.find(f => f.type === 'textarea' || f.type === 'text');
      if (textField) {
        const text = fieldValues[textField.name] || '';
        const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
        const matches = [...text.matchAll(variableRegex)];
        const variables = [...new Set(matches.map(match => match[1]))];
        setDynamicHandlesList(variables);
      }
    }
  }, [fieldValues, dynamicHandles, fields]);

  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Calculate dynamic height for textarea
  const textareaHeight = useMemo(() => {
    const textField = fields.find(f => f.type === 'textarea');
    if (textField) {
      const text = fieldValues[textField.name] || '';
      const lines = text.split('\n').length;
      const charLength = text.length;
      return Math.max(60, Math.min(300, lines * 20 + Math.floor(charLength / 30) * 10));
    }
    return 60;
  }, [fieldValues, fields]);

  // Calculate dynamic width for textarea
  const textareaWidth = useMemo(() => {
    const textField = fields.find(f => f.type === 'textarea');
    if (textField) {
      const text = fieldValues[textField.name] || '';
      const maxLineLength = Math.max(...text.split('\n').map(line => line.length), 0);
      return Math.max(200, Math.min(500, maxLineLength * 8 + 50));
    }
    return 200;
  }, [fieldValues, fields]);

  const nodeWidth = dynamicHandles ? textareaWidth : (style.width || 200);
  const nodeHeight = dynamicHandles ? textareaHeight + 60 : (style.height || 'auto');

  const defaultStyle = {
    width: nodeWidth,
    minHeight: nodeHeight,
    border: '2px solid #4A90E2',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <div style={mergedStyle}>
      {/* Render static handles */}
      {handles.map((handle, index) => (
        <Handle
          key={`${handle.type}-${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id || index}`}
          style={handle.style || {}}
        />
      ))}

      {/* Render dynamic handles for variables */}
      {dynamicHandles && dynamicHandlesList.map((variable, index) => (
        <Handle
          key={`dynamic-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) * 100) / (dynamicHandlesList.length + 1)}%`,
            background: '#FFD700',
            width: '10px',
            height: '10px',
          }}
        />
      ))}

      {/* Title */}
      <div style={{
        fontWeight: 'bold',
        fontSize: '14px',
        marginBottom: '8px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        paddingBottom: '6px',
      }}>
        {title}
      </div>

      {/* Custom content */}
      {content && (
        <div style={{ marginBottom: '8px', fontSize: '12px', opacity: 0.9 }}>
          {content}
        </div>
      )}

      {/* Render fields */}
      {fields.map((field, index) => (
        <div key={field.name} style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', fontSize: '11px', marginBottom: '4px', fontWeight: '500' }}>
            {field.label}:
          </label>
          {field.type === 'text' && (
            <input
              type="text"
              value={fieldValues[field.name]}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              style={{
                width: '100%',
                padding: '6px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                fontSize: '12px',
              }}
            />
          )}
          {field.type === 'textarea' && (
            <textarea
              value={fieldValues[field.name]}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              style={{
                width: '100%',
                minHeight: '60px',
                padding: '6px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                fontSize: '12px',
                resize: 'none',
                fontFamily: 'monospace',
              }}
            />
          )}
          {field.type === 'select' && (
            <select
              value={fieldValues[field.name]}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              style={{
                width: '100%',
                padding: '6px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                fontSize: '12px',
              }}
            >
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          )}
          {field.type === 'number' && (
            <input
              type="number"
              value={fieldValues[field.name]}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              min={field.min}
              max={field.max}
              step={field.step}
              style={{
                width: '100%',
                padding: '6px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                fontSize: '12px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
