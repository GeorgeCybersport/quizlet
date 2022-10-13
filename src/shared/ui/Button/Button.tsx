
import { classNames } from '../../lib/classNames';
import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonTypes';

export const Button: FC <ButtonProps> = ({ children, className, colors, variants, size, fullWidth, ...otherProps }) => {
  // const stylesBtn = `${styles.base} ${styles.large} ${styles.primary}  ${styles.outlined} ${styles.fullWidth}`;
  console.log(size);
  return (
    <button
      className={classNames(styles.base, { [styles.fullWidth]: fullWidth }, [styles[colors], styles[variants], styles[size]])}
      {...otherProps}
    >
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  colors: 'inherit',
  variants: 'outlined',
  size: 'medium',
  fullWidth: false
};
