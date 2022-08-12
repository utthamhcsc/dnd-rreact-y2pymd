import React, { useRef, useEffect } from 'react';

export default function Container({ title }) {
  const ref = useRef(null);
  useEffect(() => {
    let current = ref.current;
    if (current) {
      current.addEventListener('dragover', (e) => {
        e.preventDefault();
        //console.log('drag over')
      });
      current.addEventListener('dragenter', (e) => {
        e.preventDefault();
        console.log('drag enter');
      });
      current.addEventListener('dragleave', (e) => {
        e.preventDefault();
        console.log('drag leave');
      });
      current.addEventListener('drop', (ev) => {
        // e.preventDefault();
        let data = ev.dataTransfer.getData('text/html');
        let child = new DOMParser();
        let nod = child.parseFromString(data, 'text/html').body.firstChild;
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
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: '2px',
        padding: '10px',
        minHeight: '40px',
        border: '1px solid black',
      }}
    ></div>
  );
}
