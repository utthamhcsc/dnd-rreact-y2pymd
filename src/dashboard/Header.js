import React from 'react';

export default ({ addScreens }) => {
  return (
    <div style={styles.header}>
      <h4>Screens</h4>
      <button onClick={() => addScreens(prompt('Enter Screen Name'))}>
        add screen
      </button>
    </div>
  );
};
const styles = {
  header: {
    backgroundColor: 'Green',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
