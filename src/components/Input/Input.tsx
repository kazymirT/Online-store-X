import classNames from 'classnames';
import React from 'react';

import styles from './Input.module.scss';
import type { InputProps } from './Input.types.ts';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, size, color, error, ...rest }, ref) => {
    const inputClassName = classNames(
      styles.input,
      {
        [styles[`size-${size}`]]: size,
        [styles[`color-${color}`]]: color,
        [styles.error]: error,
      },
      className
    );

    return <input ref={ref} type={type} className={inputClassName} {...rest} />;
  }
);

Input.displayName = 'Input';

export default Input;
