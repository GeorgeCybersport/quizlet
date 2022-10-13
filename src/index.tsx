import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.scss';
import TextField from './shared/ui/TextField/TextField';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TextField label="textField"/>
  </StrictMode>
);
