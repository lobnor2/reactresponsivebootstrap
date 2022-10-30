import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section className="common-section our-services container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-sercise-lifeside-img">
              <img src="./logo512.png" alt="" />
            </div>

            {/* 1section right side data */}
            <div className="col-12 col-lg-7 out-services-list">
              <h3 className="mini-title">Available @ Google and IOS</h3>
              <h1>How to use the App?</h1>
              <div className="row our-services-info">
                <div className="col-1 our-services-number">1</div>
                <div className="col-10 our-services-data">
                  <h2>Sign in</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro provident pariatur expedita libero tempora non.
                  </p>
                </div>
              </div>
              <div className="row our-services-info">
                <div className="col-1 our-services-number">2</div>
                <div className="col-10 our-services-data">
                  <h2>Add your bank Account</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro provident pariatur expedita libero tempora non.
                  </p>
                </div>
              </div>
              <div className="row our-services-info">
                <div className="col-1 our-services-number">3</div>
                <div className="col-10 our-services-data">
                  <h2>Send payment request</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro provident pariatur expedita libero tempora non.
                  </p>
                  {/* <button>Learn more</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
