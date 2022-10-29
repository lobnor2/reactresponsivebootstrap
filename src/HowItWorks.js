import React, { useState } from "react";
import workApi from "./API/workApi";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workApi);
  return (
    <>
      {/* <section className="container howdoesitwork">
        <h3>How does it work</h3>
        <div>
          {workApi.map((work) => (
            <div className="worklist1">
              <div className="img">img</div>
              <div className="title">
                <h5>{work.title}</h5>
              </div>
              <div className="info">
                <p>{work.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section>
        <div className="work-container container">
          <h1 className="text-center howdoesitwork">How does it work?</h1>
          <div className="row">
            {workData.map((currentelement) => {
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i
                      className={`fontawesome-style ${currentelement.logo}`}
                    ></i>
                    <h3 className="subheading">{currentelement.title}</h3>
                    <p className="w-100">{currentelement.info}</p>
                  </div>
                </>
              );
            })}

            {/* <div className="col-12 col-lg-4 text-center work-container-subdiv">
              <i className="fas fa-download"></i>
              <h2 className="subheading">download app</h2>
              <p className="w-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
                ad.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-center work-container-subdiv">
              <i className="fas fa-download"></i>
              <h2 className="subheading">download app</h2>
              <p className="w-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
                ad.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
