// components/TransformCenter.js
import React from 'react';

const TransformCenter = () => {
  const code = `
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;

  return (
    <div className="demo-wrapper">
      <div className="centering-demo">
        <h2 className="demo-title">Transform Centering</h2>
        <div 
          className="container" 
          style={{
            position: 'relative'
          }}
        >
          <div 
            className="box" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            Transform
          </div>
        </div>
      </div>
      <div className="code-display">
        <pre>{code}</pre>
      </div>
      <div className="description">
        <h3>How it works</h3>
        <p>This method improves on absolute positioning by using transforms:</p>
        <ul>
          <li><code>position: absolute</code> with <code>top: 50%</code> and <code>left: 50%</code> positions the element with its top-left corner at the center</li>
          <li><code>transform: translate(-50%, -50%)</code> shifts the element back by half its width and height</li>
        </ul>
        <p>The key advantage over the negative margin approach is that you don't need to know the element's dimensions. It works automatically regardless of the element's size.</p>
        <h3>Browser Support</h3>
        <p>Good in modern browsers. May require vendor prefixes for older browsers. No support in very old browsers.</p>
      </div>
    </div>
  );
};

export default TransformCenter;