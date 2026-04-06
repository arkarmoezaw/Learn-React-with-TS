import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Alert from './Alert.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Alert heading="Success" onClose={() => console.log('close')} closable>
      Everything is really good!
    </Alert>
  </StrictMode>,
);
