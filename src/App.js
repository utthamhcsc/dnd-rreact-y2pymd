import React from 'react';
import './style.css';
import Convertion from './dashboard/index';
import { Popup } from './modal/Popup';
export const context = React.createContext();
export default function App() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const handleToggle = (e, styles, textContent) => {
    if (open) {
      setOpen(false);
      if (ref.current)
        if (styles) {
          styles.forEach(({ key, value }) => {
            if (key && value) ref.current.style[key] = value;
            if (textContent) {
              ref.current.textContent = textContent;
            }
          });
        }
    } else {
      ref.current = e.target;
      setOpen(true);
    }
  };
  return (
    <context.Provider value={{ handleToggle }}>
      <Convertion />

      <Popup toggle={open} handleToggle={handleToggle} />
    </context.Provider>
  );
}
