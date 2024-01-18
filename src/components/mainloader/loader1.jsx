// Loader1.jsx

import React from 'react';
import styles from './loader1.module.css'; // Import the CSS module

function Loader1() {
  return (
    <div className='hibro'>
      <div className={styles.waviy}>
        <span style={{ '--i': 1 }}>T</span>
        <span style={{ '--i': 2 }}>h</span>
        <span style={{ '--i': 3 }}>a</span>
        <span style={{ '--i': 4 }}>n</span>
        <span style={{ '--i': 5 }}>k</span>
        <span style={{ '--i': 6 }}>  </span>
        <span style={{ '--i': 6 }}>  </span> {/* Add a space */}
        <span style={{ '--i': 6 }}>  </span>
        <span style={{ '--i': 6 }}>  </span>
        <span style={{ '--i': 7 }}>Y</span>
        <span style={{ '--i': 8 }}>o</span>
        <span style={{ '--i': 9 }}>u</span>
      </div>
    </div>
  );
}

export default Loader1;
