import { classNames } from '../../lib/classNames';
import React, { FC, useRef } from 'react';
import cls from './styles.module.scss';
import { Button } from '../Button/Button';
interface Props {
  text?: string
};

export const FlashCards: FC <Props> = ({ text }) => {
  console.log(text);
  const starRef = useRef();

  return (
    <div className={cls.card}>
      <div className={cls.card__header}>
        <div>Термин</div>
        <div className={cls.card__progress}>3 / 37</div>
        <div className={cls.card__star}>

          <button type='button' >
            <span
              className={ classNames('material-symbols-outlined', {}, [cls.icons])}
            >
              star
            </span>
          </button>
        </div>
      </div>

      <div className={cls.card__content}>
        <span className={cls.card__word}>hire</span>
      </div>

      <div className={cls.card__footer}>
        <div className={classNames(cls.card__arrow, {}, [cls.card__arrowLeft])}>
          <button type='button'>
            <span className={ classNames('material-symbols-outlined', {}, [cls.icons])}>
              arrow_back_ios
            </span>
          </button>
        </div>

        <div className={classNames(cls.card__arrow, {}, [cls.card__arrowRight])}>
          <button type='button'>
            <span className={ classNames('material-symbols-outlined', {}, [cls.icons])}>
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
