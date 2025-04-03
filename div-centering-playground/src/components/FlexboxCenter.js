// components/FlexboxCenter.js
import React from 'react';

const FlexboxCenter = () => {
  const code = `
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

  return (
    <div className="demo-wrapper">
      <div className="centering-demo">
        <h2 className="demo-title">Flexbox Centering</h2>
        <div 
          className="container" 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="box">Centered with Flexbox</div>
        </div>
      </div>
      <div className="code-display">
        <pre>{code}</pre>
      </div>
      <div className="description">
        <h3>How it works</h3>
        <p>Flexbox is a modern CSS layout mode that makes it easy to center items both horizontally and vertically:</p>
        <ul>
          <li><code>display: flex</code> creates a flex container</li>
          <li><code>justify-content: center</code> centers items horizontally</li>
          <li><code>align-items: center</code> centers items vertically</li>
        </ul>
        <p>This is the most straightforward approach for modern browsers and works well for most centering needs.</p>
        <h3>Browser Support</h3>
        <p>Excellent in all modern browsers. Limited support in IE11 (with some bugs).</p>
      </div>
    </div>
  );
};

export default FlexboxCenter;