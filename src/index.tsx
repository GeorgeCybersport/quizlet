import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.scss';
import { FlashCards } from './shared/ui/FlashCards/FlashCards';

import './app/assets/scss/app.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className={styles.div}>
      <FlashCards text='fdasfs'/>
    </div>
  </StrictMode>
);
