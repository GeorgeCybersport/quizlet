
import { classNames } from '../../lib/classNames';
import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

export const Button: FC <ButtonProps> = ({ children, className, colors, variants, size, ...otherProps }) => {
  return (
    <button
      className={classNames(styles.base, {}, [styles[colors], styles[variants], styles[size]])}
      {...otherProps}
    >
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  colors: 'inherit',
  variants: 'outlined',
  size: 'medium'
};
