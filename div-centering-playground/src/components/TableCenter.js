// components/TableCenter.js
import React from 'react';

const TableCenter = () => {
  const code = `
.container {
  display: table;
  width: 100%;
  height: 300px;
}

.box-wrapper {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.box {
  display: inline-block;
}
`;

  return (
    <div className="demo-wrapper">
      <div className="centering-demo">
        <h2 className="demo-title">Table Display Centering</h2>
        <div 
          className="container" 
          style={{
            display: 'table',
            width: '100%',
            height: '300px'
          }}
        >
          <div 
            style={{
              display: 'table-cell',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className="box" 
              style={{
                display: 'inline-block'
              }}
            >
              Table Display
            </div>
          </div>
        </div>
      </div>
      <div className="code-display">
        <pre>{code}</pre>
      </div>
      <div className="description">
        <h3>How it works</h3>
        <p>This method uses CSS table display properties to center content:</p>
        <ul>
          <li><code>display: table</code> on the container creates a table-like layout</li>
          <li><code>display: table-cell</code> on a child element enables table cell properties</li>
          <li><code>text-align: center</code> centers the content horizontally</li>
          <li><code>vertical-align: middle</code> centers the content vertically</li>
          <li>The centered element needs <code>display: inline-block</code></li>
        </ul>
        <p>This approach is particularly useful for vertical centering when you want to support older browsers.</p>
        <h3>Browser Support</h3>
        <p>Excellent in all browsers, including IE8+.</p>
      </div>
    </div>
  );
};

export default TableCenter;