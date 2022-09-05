/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { formstyle } from "../styles";

const FormPage = () => {
  const [forms, setforms] = useState({
    first_name: "",
    last_name: "",
    phones: [
      {
        number: 0,
      },
    ],
  });
  const handleForm = (e: any) => {
    e.preventDefault();
    console.log(forms);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setforms({
      ...forms,
      [name]: value,
    });
  };
  const handleNumber = (e: any) => {
    const { name, value } = e.target;

    // setforms({
    //   ...forms,
    //   [name]: value,
    // });
  };
  useEffect(() => {
    console.log(forms);
  }, [forms]);

  return (
    <div css={formstyle}>
      <div className="form-container">
        <h1>Contact</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            id="fname"
            value={forms.first_name}
            name="first_name"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            id="lname"
            value={forms.last_name}
            name="last_name"
            placeholder="Your name.."
          />

          <label htmlFor="lnumber">Your Number</label>
          {forms.phones.map((v, i) => (
            <input
              key={i}
              type="number"
              id="number"
              name={`${i}`}
              value={v.number}
              placeholder="number.."
            />
          ))}
          <button
            className="btn btn-add"
            onClick={() =>
              setforms({ ...forms, phones: [...forms.phones, { number: 0 }] })
            }
          >
            Add More Number
          </button>
          <button
            className="btn btn-add"
            disabled={forms.phones.length <= 1}
            onClick={() => {
              let newData = forms.phones;
              newData.pop();
              setforms({ ...forms, phones: newData });
            }}
          >
            Delete More Number
          </button>
          <input type="submit" className="btn btn-edit" value="submit" />
          <button className="btn btn-delete">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
