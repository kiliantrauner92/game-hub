import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data); // send data to server in the future
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* create this with:  div.mb-3>label.form+input.form-control*/}
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {/* create this with:  div.mb-3>label.form+input[type=number].form-control*/}
      <div className="mb-3">
        <label htmlFor="age" className="form">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {/* create this with: button.btn.btn-primary */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
