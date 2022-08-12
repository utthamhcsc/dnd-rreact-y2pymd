import React from 'react';

export default function Item() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let current = ref.current;
    if (current) {
      current.addEventListener('dragstart', (ev) => {
        //console.log('drag started');
        console.log(ev.target);
        ev.dataTransfer.dropEffect = 'move';
        ev.dataTransfer.setData('text/html', ev.target.outerHTML);
      });
      current.addEventListener('dragend', () => {
        //console.log('drag ended');
      });
    }
  }, []);

  return (
    <div
      style={{
        margin: '2px',
        padding: '10px',
        border: '1px solid black',
        width: '25%',
      }}
      draggable={true}
      ref={ref}
    >
      Item
    </div>
  );
}
