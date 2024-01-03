import React from 'react';

const ScopeSelector = ({ onScopeChange }) => {
  return (
    <div>
      <button onClick={() => onScopeChange('global')}>Global</button>
      <button onClick={() => onScopeChange('national')}>National</button>
      <button onClick={() => onScopeChange('local')}>Local</button>
    </div>
  );
};

export default ScopeSelector;
