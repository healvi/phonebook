/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import useContact from "../context/ContactContext";
import { formstyle } from "../styles";
import { Contact } from "../context/interfaces";

const EditPage = () => {
  const { editData, EditContact } = useContact();
  const [rules, setRules] = useState({
    first_name: true,
    last_name: true,
    phones: true,
  });
  const [forms, setforms] = useState<Contact>({
    id: 0,
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
      EditContact(forms);
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
    let newData = {
      ...editData,
      phones: [...editData.phones],
    };
    setforms({
      ...newData,
    });
  }, []);

  useEffect(() => {
    checkrules();
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
          <input
            type="submit"
            className="btn btn-edit"
            value="Save"
            disabled={rules.first_name || rules.last_name || rules.phones}
          />
          <button className="btn btn-delete">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
