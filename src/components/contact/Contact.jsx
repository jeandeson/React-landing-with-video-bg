import React from "react";
import "./Styles.css";

const Contact = () => {
  return (
    <div className="formCotainer">
      <form className="formWrapper">
        <h1>Lets Work Together</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt
          eius atque dignissim
        </p>
        <div className="formItemWrapper">
          <div className="formItem">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" />
          </div>
          <div className="formItem">
            <label htmlFor="firstname">Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="formItemWrapper">
          <div className="formItem">
            <label htmlFor="firstname">Email</label>
            <input id="firstname" type="text" />
          </div>
        </div>
        <div className="formItemWrapper">
          <div className="formItem">
            <label htmlFor="firstname">Company</label>
            <input id="firstname" type="text" />
          </div>
        </div>
        <div className="formItemWrapper">
          <div className="formItem">
            <label htmlFor="firstname">Phone</label>
            <input id="firstname" type="text" />
          </div>
        </div>
        <div className="formItemWrapper">
          <div className="formItem">
            <label htmlFor="firstname">How can we help you?</label>
            <textarea id="help" rows="4" cols="33"></textarea>
          </div>
        </div>
        <div className="formItemWrapper">
          <div className="formItem">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
