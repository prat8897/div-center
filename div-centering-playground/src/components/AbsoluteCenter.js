// components/AbsoluteCenter.js
import React from 'react';

const AbsoluteCenter = () => {
  const code = `
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -75px;  /* Half of the height */
  margin-left: -75px; /* Half of the width */
}
`;

  return (
    <div className="demo-wrapper">
      <div className="centering-demo">
        <h2 className="demo-title">Absolute Positioning Centering</h2>
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
              marginTop: '-75px',
              marginLeft: '-75px'
            }}
          >
            Absolute + Margin
          </div>
        </div>
      </div>
      <div className="code-display">
        <pre>{code}</pre>
      </div>
      <div className="description">
        <h3>How it works</h3>
        <p>This traditional method uses absolute positioning and negative margins:</p>
        <ul>
          <li><code>position: absolute</code> removes the element from the normal document flow</li>
          <li><code>top: 50%</code> and <code>left: 50%</code> position the top-left corner at the center of the parent</li>
          <li>Negative margins of half the element's width and height pull it back to truly center it</li>
        </ul>
        <p><strong>Important:</strong> This method requires knowing the exact dimensions of the element being centered.</p>
        <h3>Browser Support</h3>
        <p>Excellent in all browsers, including legacy ones.</p>
      </div>
    </div>
  );
};

export default AbsoluteCenter;