import "../style/Daily.css";

import React from "react";

import { Transaction } from "../components/auth/Transaction";
import { LayoutUser } from "../components/LayoutUser";

export const HomeDaily = () => {
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
                          <div
                            className="pb-1 ps-3 d-flex"
                            style={{ color: "#000000", fontSize: "20px", borderBottom: "solid" }}>
                            <h3 className="pe-5">
                              <b>18</b>
                            </h3>
                            <h5 className="ps-5  pe-5 mt-2">07.2022</h5>
                            <h5 className="ps-5 pe-5 mt-2" style={{ color: "#0889FF" }}>
                              Rp. 500,000
                            </h5>
                            <h5 className="ps-5 pe-5 mt-2" style={{ color: "#F06161" }}>
                              Rp. 30,000
                            </h5>
                          </div>
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
                                          Food &emsp;
                                        </h5>
                                        <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                                          Bonus &emsp;
                                        </h5>
                                        <h5 style={{ color: "#050505", fontSize: "20px" }}>Food &emsp;</h5>
                                      </div>
                                      <div className="pe-5">
                                        <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                                          Cash &emsp;
                                        </h5>
                                        <h5 className="pb-3" style={{ color: "#050505", fontSize: "20px" }}>
                                          Card &emsp;
                                        </h5>
                                        <h5 style={{ color: "#050505", fontSize: "20px" }}>Accounts &emsp;</h5>
                                      </div>
                                      <div style={{ paddingLeft: "32%" }}>
                                        <h5 className="pb-3" style={{ color: "#F06161", fontSize: "20px" }}>
                                          Rp. 5,000 &emsp;
                                        </h5>
                                        <h5 className="pb-3" style={{ color: "#0889FF", fontSize: "20px" }}>
                                          Rp. 500,000 &emsp;
                                        </h5>
                                        <h5 style={{ color: "#F06161", fontSize: "20px" }}>Rp. 25,000 &emsp;</h5>
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
