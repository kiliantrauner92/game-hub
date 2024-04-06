import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* create this with:  div.mb-3>label.form+input.form-control*/}
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      {/* create this with:  div.mb-3>label.form+input[type=number].form-control*/}
      <div className="mb-3">
        <label htmlFor="age" className="form">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      {/* create this with: button.btn.btn-primary */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
