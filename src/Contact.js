import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus-section" style={{ marginTop: "5rem" }}>
        <div className="containerform">
          <form method="post">
            <h1 className="h1heading">Contact Us</h1>
            <div className="row">
              <div className="col-12 col-lg-6 contactt">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="form-control inputone
                "
                />
              </div>
              <div className="col-12 col-lg-6 contactt">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Message"
                  className="form-control
               "
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
