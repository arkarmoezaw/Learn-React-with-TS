import { useState } from 'react';

export default function Alert({ type = 'information', heading, closable, onClose, children }) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div>
        <span role="img" aria-label={`${type === 'warning' ? 'Warning' : 'Information'}`}>
          {type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span>{heading}</span>
        {closable && <button onClick={handleCloseClick}>Close</button>}
      </div>
      <div>{children}</div>
    </div>
  );
}
