import React from "react";
const header = () => {
  return (
    <header>
      <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side">
            <h1 className="display-3">
              Online Payment Made <br /> Easy For You
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              obcaecati iusto suscipit enim numquam nostrum fuga, assumenda
              provident tempora.
            </p>
            <h3>Get early access for you</h3>
            <div className="input-group mt-3">
              <input
                type="text"
                placeholder="Email"
                className="rounded-pill w-75 me-3 p-2"
              />
              <div className="input-group-text">Get it now</div>
            </div>
          </div>
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
            <img src="../images/12.webp" alt="heroimg" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default header;
