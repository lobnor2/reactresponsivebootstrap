import React from "react";
const header = () => {
  return (
    <header>
      <section className="container main-hero-container">
        <div className="row">
          {/* left side header  */}
          <div className="col-12 col-lg-6 header-left-side">
            <h1 className="display-3">
              Online Payment Made <br /> Easy For You
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              obcaecati iusto suscipit enim numquam nostrum fuga, assumenda
              provident tempora.
            </p>
            <h4 class="getearly">Get early access for you</h4>
            <div className="input-group mt-3">
              <input
                type="text"
                id="emailinput"
                placeholder="Email"
                className="w-50 me-3 p-2 form-control-text"
              />
              <div className="input-group-button subscribe">Subscribe</div>
            </div>
          </div>
          {/* header right side */}
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
            <img
              src="./logo512.png"
              alt="heroimg"
              className="image-fluid imgreact"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default header;
