import { classNames } from '../../lib/classNames';
import { v4 as uuidv4 } from 'uuid';
import { InputHTMLAttributes } from 'react';
import styles from './textField.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({label, className, ...otherProps}) => {
  const id = uuidv4();
  return (
    <div className={classNames(styles.textField, {}, [className])} >
      <input type="text" id={id} {...otherProps} />
      <span className={styles.textFieldBorder}></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default TextField;