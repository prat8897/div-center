// components/GridCenter.js
import React from 'react';

const GridCenter = () => {
  const code = `
.container {
  display: grid;
  place-items: center;
}
`;

  return (
    <div className="demo-wrapper">
      <div className="centering-demo">
        <h2 className="demo-title">CSS Grid Centering</h2>
        <div 
          className="container" 
          style={{
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <div className="box">Centered with Grid</div>
        </div>
      </div>
      <div className="code-display">
        <pre>{code}</pre>
      </div>
      <div className="description">
        <h3>How it works</h3>
        <p>CSS Grid offers perhaps the most concise way to center an element:</p>
        <ul>
          <li><code>display: grid</code> creates a grid container</li>
          <li><code>place-items: center</code> is a shorthand that combines <code>align-items: center</code> and <code>justify-items: center</code></li>
        </ul>
        <p>This one-line solution (after setting up the grid) is incredibly elegant and works for both horizontal and vertical centering.</p>
        <h3>Browser Support</h3>
        <p>Very good in all modern browsers. No support in IE11.</p>
      </div>
    </div>
  );
};

export default GridCenter;