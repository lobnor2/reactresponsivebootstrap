import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="containerform">
          <form method="post">
            <h1 className="h1heading">Contact Us</h1>
            <div className="row">
              <div className="col-12 col-lg-6 contactt">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  className="form-control inputone
                "
                />
              </div>
              <div className="col-12 col-lg-6 contactt">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="last Name"
                  className="form-control
               "
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 contactt">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone number"
                  className="form-control
                "
                />
              </div>
              <div className="col-12 col-lg-6 contactt">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="form-control
               "
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Add Address"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your message"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-style w-100">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
