import "../style/Setting.css";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";

import { LayoutUser } from "../components/LayoutUser";
import { AddAccount } from "../components/modal/AddAccount";
import { AddCategory } from "../components/modal/AddCategory";
import { DeleteData } from "../components/modal/DeleteData";

export const Setting = () => {
  const navigate = useNavigate();

  const title = "Setting";
  document.title = "Hacketon | " + title;

  const [, setIdDelete] = useState(null);
  const [, setConfirmDelete] = useState(null);

  const [, setConfirmAddAccount] = useState(null);

  const [, setConfirmAddCategory] = useState(null);

  const [showAddAccount, setShowAddAccount] = useState(false);
  const handleCloseAddAccount = () => setShowAddAccount(false);
  const handleShowAddAccount = () => setShowAddAccount(true);

  const [showAddCategory, setShowAddCategory] = useState(false);
  const handleCloseAddCategory = () => setShowAddCategory(false);
  const handleShowAddCategory = () => setShowAddCategory(true);

  const [showDeleteData, setShowDeleteData] = useState(false);
  const handleCloseDeleteData = () => setShowDeleteData(false);
  const handleShowDeleteData = () => setShowDeleteData(true);

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleDeleteData = (id) => {
    setIdDelete(id);
    handleShowDeleteData();
  };

  const handleAddAccount = () => {
    handleShowAddAccount();
  };

  const handleAddCategory = () => {
    handleShowAddCategory();
  };

  return (
    <div className="user-container">
      <LayoutUser />
      <body className="border-Setting">
        <div className="container h-100">
          <div className="container h-100">
            <div className="row alin-items-center h-100">
              <form className="wow fadeInUp border-0 bg-transparent pt-4" data-wow-delay="0.2s">
                <div className="card border-0 bg-transparent">
                  <div className="card mb-5 border-0" style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}>
                    <div className="row g-0">
                      <div className="col pt-0">
                        <div className="card-body">
                          <h1 className="pb-3" style={{ color: "#000000", fontSize: "30px", borderBottom: "solid" }}>
                            <b>Accounts</b>
                          </h1>
                          <div className="col-md-12 d-flex">
                            <div className="col-md-9">
                              <Table className="mt-5" style={{ border: "solid" }}>
                                <thead className="">
                                  <tr>
                                    <th>No&emsp;&emsp;&emsp;&emsp;</th>
                                    <th>Name</th>
                                    <th style={{ width: "30%" }}>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr key="">
                                    <td className="pt-4">1</td>
                                    <td className="pt-4">Cash</td>
                                    <td>
                                      <Button
                                        variant="warning ps-4 pe-4 mt-2 me-2 w-40"
                                        onClick={() => {
                                          handleEdit();
                                        }}
                                        className="button-table">
                                        Update
                                      </Button>
                                      <Button
                                        variant="outline-danger ps-4 pe-4 mt-2 w-40"
                                        onClick={() => {
                                          handleDeleteData();
                                        }}
                                        className="ms-2 button-table">
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                          <div className="mb-4 me-5 float-end">
                            <Button
                              variant=""
                              onClick={() => {
                                handleAddAccount();
                              }}>
                              <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#EB786B", fontSize: "45px" }} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <form className="wow fadeInUp border-0 bg-transparent pt-4" data-wow-delay="0.2s">
                <div className="card border-0 bg-transparent">
                  <div className="card mb-5 border-0" style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}>
                    <div className="row g-0">
                      <div className="col pt-0">
                        <div className="card-body">
                          <h1 className="pb-3" style={{ color: "#000000", fontSize: "30px", borderBottom: "solid" }}>
                            <b>Categories</b>
                          </h1>
                          <h1 className="mt-5" style={{ color: "#000000", fontSize: "30px" }}>
                            Income Categories
                          </h1>
                          <div className="col-md-12 d-flex">
                            <div className="col-md-9">
                              <Table style={{ border: "solid" }}>
                                <thead className="">
                                  <tr>
                                    <th>No&emsp;&emsp;&emsp;&emsp;</th>
                                    <th>Name</th>
                                    <th style={{ width: "30%" }}>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr key="">
                                    <td className="pt-4">1</td>
                                    <td className="pt-4">Salary</td>
                                    <td>
                                      <Button
                                        variant="warning ps-4 pe-4 mt-2 me-2 w-40"
                                        onClick={() => {
                                          handleEdit();
                                        }}
                                        className="button-table">
                                        Update
                                      </Button>
                                      <Button
                                        variant="outline-danger ps-4 pe-4 mt-2 w-40"
                                        onClick={() => {
                                          handleDeleteData();
                                        }}
                                        className="ms-2 button-table">
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>

                              <h1 style={{ color: "#000000", fontSize: "30px" }}>Expenses Categories</h1>
                              <Table style={{ border: "solid" }}>
                                <thead className="">
                                  <tr>
                                    <th>No&emsp;&emsp;&emsp;&emsp;</th>
                                    <th>Name</th>
                                    <th style={{ width: "30%" }}>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr key="">
                                    <td className="pt-4">1</td>
                                    <td className="pt-4">Card</td>
                                    <td>
                                      <Button
                                        variant="warning ps-4 pe-4 mt-2 me-2 w-40"
                                        onClick={() => {
                                          handleEdit();
                                        }}
                                        className="button-table">
                                        Update
                                      </Button>
                                      <Button
                                        variant="outline-danger ps-4 pe-4 mt-2 w-40"
                                        onClick={() => {
                                          handleDeleteData();
                                        }}
                                        className="ms-2 button-table">
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                          <div className="mb-4 me-5 float-end">
                            <Button
                              variant=""
                              onClick={() => {
                                handleAddCategory();
                              }}>
                              <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#EB786B", fontSize: "45px" }} />
                            </Button>
                          </div>
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
      <AddAccount
        setConfirmAddAccount={setConfirmAddAccount}
        show={showAddAccount}
        handleClose={handleCloseAddAccount}
      />
      <AddCategory
        setConfirmAddCategory={setConfirmAddCategory}
        show={showAddCategory}
        handleClose={handleCloseAddCategory}
      />
      <DeleteData setConfirmDelete={setConfirmDelete} show={showDeleteData} handleClose={handleCloseDeleteData} />
    </div>
  );
};
