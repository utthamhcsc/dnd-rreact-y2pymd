import React from 'react';

export default function Item({ componentName }) {
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
  const [styles, setStyles] = React.useState({});

  return (
    <>
      <li
        style={styles}
        draggable={true}
        ref={ref}
        data-component={componentName}
      >
        {componentName}
      </li>
    </>
  );
}
