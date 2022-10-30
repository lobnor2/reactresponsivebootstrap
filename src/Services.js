import { getByTitle } from "@testing-library/react";
import React, { useState } from "react";
import serviceApi from "./API/serviceApi";

const Services = () => {
  const [serviceData, setServiceDate] = useState(serviceApi);
  //   const { id, title, logo, info } = serviceData;

  return (
    <section className="service-main-container">
      <div className="container service-container">
        <h1 className="main-heading text-center">How to send money</h1>
        <div className="row">
          {serviceData.map((currentelement) => {
            return (
              <>
                <div
                  className="col-11 col-lg-4 col-xxl-4 work-container-subdiv1 "
                  key={currentelement.id}
                >
                  <i className={`fontawesome-style ${currentelement.logo}`}></i>
                  <h2 className="sub-heading">{currentelement.title}</h2>
                  <p>{currentelement.info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
