import label from "../../assets/contactlabel.svg";
import name from "../../assets/Namelabel.svg";
import email from "../../assets/emaillabel.svg";
import subject from "../../assets/Messagelabel.svg";
import "./ContactForm.css";
import { useState } from "react";

export default function Contact() {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    subject: "",
  });
  function handleInputChange(identifier, value) {
    setEnteredValues((prevVal) => ({ ...prevVal, [identifier]: value }));
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }
  return (
    <div className="contactform">
      <div className="formlabelholder">
        <img src={label} alt="" />
        <br />
        <p>Have any suggestions ?</p>
        <p>just say me Hi.</p>
      </div>
      <form onSubmit={handlesubmit} className="formflex">
        <div className="inputss">
          <div className="inputval">
            <img src={name} alt="" />
            <input
              type="text"
              onChange={(event) =>
                handleInputChange("name", event.target.value)
              }
              value={enteredValues.name}
            />
          </div>
          <div className="inputval">
            <img src={email} alt="" />
            <input
              className="middle"
              type="text"
              onChange={(event) =>
                handleInputChange("email", event.target.value)
              }
              value={enteredValues.email}
            />
          </div>
          <div className="inputval">
            <img src={subject} alt="" />
            <input
              type="text"
              onChange={(event) =>
                handleInputChange("subject", event.target.value)
              }
              value={enteredValues.subject}
            />
          </div>
        </div>
        <div className="buttonflex">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
