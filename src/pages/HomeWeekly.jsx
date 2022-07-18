import "../style/Daily.css";

import React from "react";

import { Transaction } from "../components/auth/Transaction";
import { LayoutUser } from "../components/LayoutUser";

export const HomeWeekly = () => {
  const title = "Home";
  document.title = "Hacketon | " + title;

  return (
    <div className="user-container">
      <LayoutUser />
      <Transaction />
      <body className="border-daily">
        <div className="container h-100">
          <div className="container h-100">
            <div className="row alin-items-start h-100">
              <form className="col-md-8 wow fadeInUp border-0 bg-transparent" data-wow-delay="0.2s">
                <div className="card border-0 bg-transparent">
                  <div className="card mb-5 border-0" style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}>
                    <div className="row g-0">
                      <div className="col pt-0">
                        <div className="card-body">
                          <div className="">
                            <div className="">
                              <div className="">
                                <div>
                                  <div
                                    className="card-body border-0"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}>
                                    <div className="mb-1 mt-1 d-flex">
                                      <div className="pe-5">
                                        <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                                          Week 1
                                        </h5>
                                      </div>
                                      <div className="pe-5" style={{ paddingLeft: "32%" }}>
                                        <h5 className="pb-3" style={{ color: "#0889FF", fontSize: "20px" }}>
                                          Rp. 500,000 &emsp;
                                        </h5>
                                      </div>
                                      <div className="ps-4">
                                        <h5 className="pb-3" style={{ color: "#F06161", fontSize: "20px" }}>
                                          Rp. 50,000 &emsp;
                                        </h5>
                                        <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                                          Rp. 450,000 &emsp;
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <form className="col-md-4 border-0">
                <div className="">
                  <div>
                    <div className="card-body border-0" style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}>
                      <div className="mb-1 mt-1 d-flex">
                        <div className="pe-5">
                          <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                            Income &emsp;
                          </h5>
                          <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                            Expenses &emsp;
                          </h5>
                          <h5 style={{ color: "#050505", fontSize: "20px" }}>Totaal &emsp;</h5>
                        </div>
                        <div>
                          <h5 className="pb-3" style={{ color: "#0889FF", fontSize: "20px" }}>
                            Rp. 1,000,000 &emsp;
                          </h5>
                          <h5 className="pb-3" style={{ color: "#F06161", fontSize: "20px" }}>
                            Rp. 85,000 &emsp;
                          </h5>
                          <h5 style={{ color: "#050505", fontSize: "20px" }}>Rp. 915,000 &emsp;</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};
