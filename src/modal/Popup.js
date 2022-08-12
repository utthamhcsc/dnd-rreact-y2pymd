import React from 'react';
import ReactDOM from 'react-dom';
export function Popup({ toggle, handleToggle, content }) {
  const [styles, setStyles] = React.useState([
    { key: 'backgroundColor', value: '', type: 'color' }
   
  ]);
  const [textContent,setTextContent]=React.useState('')
  const addStyle = () => {
    setStyles((s) => [...s, { key: '', value: '' }]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setStyles((s) =>
      s.map((v, ind) => {
        if (i == ind) {
          return { ...v, [name]: value };
        } else {
          return v;
        }
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleToggle(e, styles,textContent);
  };

  const modal = () => {
    return (
      <>
        <div className="modal" style={{ display: toggle ? 'block' : 'none' }}>
          <form onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 onClick={addStyle} className="close">
                  +
                </h3>
                <h2>Add Styles</h2>
              </div>
              <div className="modal-body">
                <table>
                  <thead>
                    <tr>
                      <th>key</th>
                      <th>value</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr key={}>
                          <th>
                            <input
                              name="textContent"
                              value={"textContent"}
                              
                            />
                          </th>
                          <th>
                            <input
                              
                              name="value"
                             value={textContent}
                              onChange={(e) => setTextContent(e.target.value)}
                            />
                          </th>
                        </tr>
                    {styles.map(({ key, value, type }, i) => {
                      return (
                        <tr key={i}>
                          <th>
                            <input
                              name="key"
                              value={key}
                              onChange={(e) => handleChange(e, i)}
                            />
                          </th>
                          <th>
                            <input
                              type={type || 'text'}
                              name="value"
                              value={value}
                              onChange={(e) => handleChange(e, i)}
                            />
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button>save and close</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };

  return ReactDOM.createPortal(modal(), document.getElementById('modal-root'));
}

const styles = {
  modalContainer: {
    top: '0',
    bottom: 0,
    position: 'absolute',
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden',
    background: 'rgba(0,0,0,.3)',
  },
};
