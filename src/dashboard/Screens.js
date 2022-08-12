import React, { useEffect, useRef } from 'react';
import { context } from '../App.js';
export default ({ screenName, handleRemove, id, show }) => {
  const ref = useRef(null);
  const { handleToggle } = React.useContext(context);
  useEffect(() => {
    let current = ref.current;
    if (current) {
      current.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        ev.target.style.border = '3px dotted blue';
        //console.log('drag over')
      });
      current.addEventListener('dragenter', (e) => {
        e.preventDefault();
        console.log('drag enter');
      });
      current.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.target.style.border = 'none';
      });
      current.addEventListener('drop', (ev) => {
        ev.preventDefault();
        ev.target.style.border = 'none';
        if (ev.target.getAttribute('data-component') == 'View') {
          let data = ev.dataTransfer.getData('text/html');
          let child = new DOMParser();
          let nod = child.parseFromString(data, 'text/html').body.firstChild;
          // let button = document.createElement('button');
          // button.textContent = 'Add Styles';
          nod.addEventListener('click', (e) => {
            handleToggle(e);
          });
          //nod.appendChild(button);
          nod.addEventListener('dragstart', (ev) => {
            //console.log('drag started');
            // console.log(ev.target);
            ev.dataTransfer.dropEffect = 'move';
            ev.dataTransfer.setData('text/html', ev.target.outerHTML);
          });
          nod.addEventListener('dragend', () => {
            //console.log('drag ended');
          });
          ev.target.appendChild(nod);
        }
      });
    }
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '300px',
          width: '230px',
        }}
      >
        <div>{screenName || 'Screen Name'}</div>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={show}>Show</button>
      </div>
      <div id={id} style={styles.screens} ref={ref} data-component="View"></div>
    </div>
  );
};
const styles = {
  screens: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    width: '230px',
    margin: '5px',
    backgroundColor: 'white',
    height: '500px',
  },
};
