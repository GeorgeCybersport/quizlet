import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.scss';
import image from './news_Quizlet.png';

import './app/assets/scss/app.scss';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className={styles.div}>
      <img src={image}></img>
      <span className={styles.text}>Скоро запуск!</span>
    </div>
  </StrictMode>
);
