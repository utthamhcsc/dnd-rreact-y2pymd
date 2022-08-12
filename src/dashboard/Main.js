import React from 'react';
import Screens from './Screens';
import transform from 'css-to-react-native';
export default ({ screens, removeScreens }) => {
  const show = (i) => {
    const ele = document.getElementById('screen' + i);
    let obj = {
      name: 'View',
      styles: '{flex:1}',
      isDefaultExport: false,
      isInBuilt: true,
      children: getNodeChildrenDetails(ele),
    };
    console.log(JSON.stringify(obj));
  };

  const getElementDetails = (ele) => {
    let obj = null;
    if (ele.nodeType == Node.ELEMENT_NODE) {
      obj = {
        name: ele.getAttribute('data-component'),
        styles: ele.getAttribute('style')
          ? JSON.stringify(
              transform(
                ele
                  .getAttribute('style')
                  .split(';')
                  .map((item) => item.split(':').map((s) => s.trim()))
                  .filter((item) => item.length == 2)
              )
            )
          : null,
        isDefaultExport: false,
        isInBuilt: true,
        children: getNodeChildrenDetails(ele),
      };
    }
    if (ele.nodeType == Node.TEXT_NODE) {
      obj = {
        name: 'Text',
        isDefaultExport: false,
        isInBuilt: true,
        children: ele.nodeValue,
      };
    }
    //console.log(obj);
    return obj;
  };
  const getNodeChildrenDetails = (ele) => {
    let arr = [];
    for (let child = ele.firstChild; child != null; child = child.nextSibling) {
      arr.push(getElementDetails(child));
    }
    //console.log(arr);
    return arr;
  };
  return (
    <div style={styles.main}>
      {screens.map((item, i) => (
        <Screens
          id={'screen' + i}
          key={'screen' + i}
          screenName={item.screenName}
          handleRemove={() => removeScreens(i)}
          show={() => show(i)}
        />
      ))}
    </div>
  );
};
const styles = {
  main: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
  },
};
