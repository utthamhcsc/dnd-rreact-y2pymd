import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
export default () => {
  const [screens, setScreens] = React.useState([]);
  const addScreens = (name) => {
    setScreens((s) => [...s, { screenName: name }]);
  };
  const removeScreens = (i) =>
    setScreens((s) => s.filter((_, index) => i != index));
  return (
    <div style={styles.container}>
      <Header addScreens={addScreens} />
      <div style={styles.main}>
        <Sidebar />
        <Main screens={screens} removeScreens={removeScreens} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    flex: 1,
    backgroundColor: 'lightgray',
    display: 'flex',
  },
};
