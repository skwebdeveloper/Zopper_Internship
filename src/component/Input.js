import React from "react";
import { useForm } from "react-hook-form";

const Input = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        placeholder={props.placeholder}
        ref={register({
          required: true,
          minLength: 4,
          maxLength: 30
        })}
      />
    </>
  );
};

export default Input;
