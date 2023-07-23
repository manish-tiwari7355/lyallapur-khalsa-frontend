import React from "react";

import style from "./index.module.css";
import styles from "./index.module.css";

// import { FormErrorMessage } from '@/components/FormErrorMessage';

const Input = (
  {
    type,
    className,
    wrapperStyle,
    placeholder,
    onChange,
    name,
    id,
    value,
    inputContainerClassName,
    error,
  },
  props
) => {
  return (
    <div
      className={`${styles?.inputContainer} ${inputContainerClassName}`}
      aria-live="polite"
    >
      <input
        type={type}
        className={`${
          wrapperStyle === "full"
            ? style?.inputWrapperFullBorder
            : style.inputWrapper
        } ${className} focus:ring-transparent`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}
        value={value}
        {...props}
        // style={{ borderBottom: '1px solid black' }}
      />
      {/* {error ? 
        <FormErrorMessage className={`${styles?.error_msg}`}>
          {error}
        </FormErrorMessage>
      ) : (
        ''
      )} */}
    </div>
  );
};

export default Input;
