import { classNames } from '../../lib/classNames';
import React, { FC } from 'react';
import cls from './styles.module.scss';

interface Props {};

export const FlashCards: FC <Props> = () => {
  return (
    <div className={cls.card}>
      <div className={cls.card__header}>
        <p>Термин</p>
        <p className={cls.card__progress}>3 / 37</p>
        <p className={cls.card__star}>
          <button type='button'>
            <span
              className={ classNames('material-symbols-outlined', {}, [cls.icons])}
            >star</span>
          </button>
        </p>
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
