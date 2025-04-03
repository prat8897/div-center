// App.js
import React, { useState } from 'react';
import './App.css';

// Import components correctly
import FlexboxCenter from './components/FlexboxCenter';
import GridCenter from './components/GridCenter';
import AbsoluteCenter from './components/AbsoluteCenter';
import MarginAutoCenter from './components/MarginAutoCenter';
import TransformCenter from './components/TransformCenter';
import TableCenter from './components/TableCenter';

function App() {
  const [activeMethod, setActiveMethod] = useState('flexbox');

  // Create a mapping of method IDs to components
  const methodComponents = {
    flexbox: FlexboxCenter,
    grid: GridCenter,
    absolute: AbsoluteCenter,
    margin: MarginAutoCenter,
    transform: TransformCenter,
    table: TableCenter
  };

  // Define the list of methods for the buttons
  const centeringMethods = [
    { id: 'flexbox', name: 'Flexbox' },
    { id: 'grid', name: 'CSS Grid' },
    { id: 'absolute', name: 'Absolute Positioning' },
    { id: 'margin', name: 'Margin Auto' },
    { id: 'transform', name: 'Transform' },
    { id: 'table', name: 'Table Display' }
  ];

  // Get the component for the active method
  const ActiveComponent = methodComponents[activeMethod];

  return (
    <div className="app">
      <header>
        <h1>The Ultimate Div Centering Playground</h1>
        <p>Select a method to see how to center a div using different CSS techniques</p>
      </header>

      <div className="method-selector">
        {centeringMethods.map(method => (
          <button
            key={method.id}
            className={activeMethod === method.id ? 'active' : ''}
            onClick={() => setActiveMethod(method.id)}
          >
            {method.name}
          </button>
        ))}
      </div>

      <div className="demo-container">
        <ActiveComponent />
      </div>

      <footer>
        <p>Created as a helpful resource for web developers</p>
        <p>
          <a href="https://github.com/yourusername/div-centering-playground" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;