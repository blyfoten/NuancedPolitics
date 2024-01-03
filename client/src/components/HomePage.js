import React, { useState } from 'react';
import TopicList from './TopicList';
import ScopeSelector from './ScopeSelector';

function HomePage() {
  const [currentScope, setCurrentScope] = useState('global');

  const handleScopeChange = (scope) => {
    setCurrentScope(scope);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ScopeSelector onScopeChange={handleScopeChange} />
      <TopicList scope={currentScope} />
    </div>
  );
}

export default HomePage;
