import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(errors);

  // send data to server in the future
  // only gets called if form is valid
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* create this with:  div.mb-3>label.form+input.form-control*/}
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3, maxLength: 20 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
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
