import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.scss';

import './app/assets/scss/app.scss';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className={styles.div}></div>
  </StrictMode>
);
