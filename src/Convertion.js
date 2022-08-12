import React from 'react';
import './style.css';

export default function App() {
  const ref = React.useRef(null);
  const load = () => {
    let e = ref.current;
    loadCollection(e.childNodes);
  };
  const loadCollection = (arr = []) => {
    let data = {};
    for (let ele of arr) {
      console.log(ele.childNodes[0].dataset['element']);
    }
  };
  return (
    <div>
      <button height="1" onClick={load}>
        getRnContent
      </button>
      <div ref={ref} className="screen">
        <div data-element="View" height="1">
          Hi
          <div>h12</div>
        </div>
        <div>h12</div>
      </div>
    </div>
  );
}
