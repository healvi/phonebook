/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import useContact from "../context/ContactContext";
import { formstyle } from "../styles";

const FormPage = () => {
  const { CreateContact } = useContact();
  const [rules, setRules] = useState({
    first_name: true,
    last_name: true,
    phones: true,
  });
  const [forms, setforms] = useState({
    first_name: "",
    last_name: "",
    phones: [
      {
        number: "",
      },
    ],
  });

  const checkrules = () => {
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    setRules({
      ...rules,
      first_name: !(
        !specialChars.test(forms.first_name) && forms.first_name.length !== 0
      ),
      last_name: !(
        !specialChars.test(forms.last_name) && forms.last_name.length !== 0
      ),
      phones: !(
        forms.phones.length !== 0 && forms.phones.every((v) => v.number !== "")
      ),
    });
    return rules.first_name && rules.last_name && rules.phones;
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    if (!checkrules()) {
      CreateContact(forms);
    }
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
    let newForm = forms;
    newForm.phones[Number(name)] = { number: String(value) };
    setforms({
      ...newForm,
    });
  };
  useEffect(() => {
    checkrules();
  }, [forms]);
  useEffect(() => {
    console.log(rules);
  }, [rules]);

  return (
    <div css={formstyle}>
      <div className="form-container" data-testid="forms">
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
            data-testid="input-firstname"
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            id="lname"
            value={forms.last_name}
            name="last_name"
            placeholder="Your name.."
            data-testid="input-lastname"
          />

          {forms.phones.map((v, i) => (
            <div key={i}>
              <label htmlFor="lnumber">Your Number {i + 1}</label>
              <div className="number-conatiner">
                <input
                  onChange={(e) => handleNumber(e)}
                  type="number"
                  id="number"
                  name={`${i}`}
                  placeholder="number.."
                  data-testid={`input-number${i + 1}`}
                />
                {i <= 0 ? (
                  <img
                    onClick={() =>
                      setforms({
                        ...forms,
                        phones: [...forms.phones, { number: "" }],
                      })
                    }
                    data-testid="plus-number"
                    src={require("../assets/icons/plus.svg").default}
                    className="icon addcontact-icon"
                    alt="addcontact-icon"
                  />
                ) : (
                  <img
                    onClick={() => {
                      let newData = forms.phones;
                      newData.splice(i, 1);
                      setforms({ ...forms, phones: newData });
                    }}
                    src={require("../assets/icons/minus.svg").default}
                    className="icon addcontact-icon"
                    alt="addcontact-icon"
                    data-testid="minus-number"
                  />
                )}
              </div>
            </div>
          ))}

          <input
            type="submit"
            className="btn btn-edit"
            value="Save"
            data-testid="save-number"
            disabled={rules.first_name || rules.last_name || rules.phones}
          />
          <button data-testid="cancel-number" className="btn btn-delete">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
