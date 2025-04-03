// components/MarginAutoCenter.js
import React from 'react';

const MarginAutoCenter = () => {
  const code = `
/* Horizontal centering only */
.box {
  margin: 0 auto;
  width: 150px; /* Width must be defined */
}

/* For vertical centering, use padding or other methods */
.container {
  padding-top: 75px; /* Half of container height minus half of box height */
}
`;

  return (
    <div className="demo-wrapper">
      <div className="centering-demo">
        <h2 className="demo-title">Margin Auto Centering</h2>
        <div className="container">
          <div 
            className="box" 
            style={{
              margin: '75px auto 0',
              width: '150px'
            }}
          >
            Margin: 0 auto
          </div>
        </div>
      </div>
      <div className="code-display">
        <pre>{code}</pre>
      </div>
      <div className="description">
        <h3>How it works</h3>
        <p>This classic method centers elements horizontally (but not vertically):</p>
        <ul>
          <li><code>margin: 0 auto</code> sets top/bottom margins to 0 and left/right margins to auto</li>
          <li>The auto value distributes available space equally on both sides</li>
          <li>Element must have a defined width that's less than its container</li>
        </ul>
        <p>For full centering (horizontal + vertical), this example adds margin-top to position vertically, but this isn't true centering.</p>
        <h3>Browser Support</h3>
        <p>Works in all browsers, including very old ones. This is one of the oldest and most reliable centering techniques.</p>
      </div>
    </div>
  );
};

export default MarginAutoCenter;