import React from 'react';
import { componentListData } from '../componentListData';
import Li from './Component';
export default () => {
  return (
    <div style={styles.sidebar}>
      <ul>
        {componentListData.map((component) => (
          <Li componentName={component.componentName}></Li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: { width: '238px', backgroundColor: 'white', padding: '10px' },
};
