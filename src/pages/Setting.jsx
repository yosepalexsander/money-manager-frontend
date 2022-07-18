import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";

import { LayoutUser } from "../components/LayoutUser";
import { DeleteData } from "../components/modal/DeleteData";
import { ModalNewAccount } from "../components/modal/ModalNewAccount";
import { ModalNewCategory } from "../components/modal/ModalNewCategory";

export const Setting = () => {
  document.title = "Money Manager | Setting";

  const [, setIdDelete] = useState(null);

  const [isModalNewAccountShow, setIsModalNewAccountShow] = useState(false);
  const [isDialogDeleteAccountShow, setIsDialogDeleteAccountShow] = useState(false);
  const [isModalNewCategoryShow, setIsModalNewCategoryShow] = useState(false);
  const [isDialogDeleteCategoryShow, setIsDialogDeleteCategoryShow] = useState(false);

  const handleCloseDialogDeleteAccount = () => setIsModalNewAccountShow(false);
  const handleCloseModalNewAccount = () => setIsModalNewAccountShow(false);
  const handleShowModalNewAccount = () => setIsModalNewAccountShow(true);

  const handleCloseDialogDeleteCategory = () => setIsDialogDeleteCategoryShow(false);
  const handleCloseModalNewCategory = () => setIsModalNewCategoryShow(false);
  const handleShowModalNewCategory = () => setIsModalNewCategoryShow(true);

  const handleShowDialogDeleteAccount = (id) => {
    setIdDelete(id);
    setIsDialogDeleteCategoryShow(true);
  };

  const handleShowDialogDeleteCategory = (id) => {
    setIdDelete(id);
    setIsDialogDeleteCategoryShow(true);
  };

  const handleDeleteAccount = () => {
    console.log("delete account");
    setIsDialogDeleteAccountShow(false);
  };

  const handleDeleteCategory = () => {
    console.log("delete");
    setIsDialogDeleteCategoryShow(false);
  };

  return (
    <div className="user-container">
      <LayoutUser />
      <main className="border-Setting">
        <div className="container py-5">
          <div className="d-flex flex-column gap-4 h-100">
            <div className="pt-0">
              <Card>
                <h4 className="p-3">Accounts</h4>
                <hr style={{ backgroundColor: "#6D6D6D" }} />
                <Card.Body>
                  <Button className="d-flex gap-2 align-items-center" onClick={handleShowModalNewAccount}>
                    <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: "20px" }} />
                    <p>Create account</p>
                  </Button>
                </Card.Body>
                <Card.Body>
                  <Table bordered style={{ maxWidth: "50rem" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "15%" }}>
                          No
                        </th>
                        <th scope="col" style={{ width: "55%" }}>
                          Name
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Cash</td>
                        <td>
                          <Button className="button-table" onClick={handleShowModalNewAccount}>
                            Update
                          </Button>
                          <Button
                            variant="outline-danger"
                            className="ms-2 button-table"
                            onClick={handleShowDialogDeleteAccount}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
            <div className="pt-0">
              <Card>
                <h4 className="p-3">Categories</h4>
                <hr style={{ backgroundColor: "#6D6D6D" }} />
                <Card.Body>
                  <Button className="d-flex gap-2 align-items-center" onClick={handleShowModalNewCategory}>
                    <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: "20px" }} />
                    <p>Create category</p>
                  </Button>
                </Card.Body>
                <Card.Body>
                  <h6>Income Categories</h6>
                  <Table bordered style={{ maxWidth: "50rem" }}>
                    <thead className="">
                      <tr>
                        <th scope="col" style={{ width: "15%" }}>
                          No
                        </th>
                        <th scope="col" style={{ width: "55%" }}>
                          Name
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key="">
                        <td>1</td>
                        <td>Salary</td>
                        <td>
                          <Button className="button-table" onClick={handleShowModalNewCategory}>
                            Update
                          </Button>
                          <Button
                            variant="outline-danger"
                            className="ms-2 button-table"
                            onClick={handleShowDialogDeleteCategory}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <h6>Expenses Categories</h6>
                  <Table bordered style={{ maxWidth: "50rem" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "15%" }}>
                          No
                        </th>
                        <th scope="col" style={{ width: "55%" }}>
                          Name
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key="">
                        <td>1</td>
                        <td>Card</td>
                        <td>
                          <Button className="button-table" onClick={handleShowModalNewCategory}>
                            Update
                          </Button>
                          <Button
                            variant="outline-danger"
                            className="ms-2 button-table"
                            onClick={handleShowDialogDeleteCategory}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <ModalNewAccount show={isModalNewAccountShow} onClose={handleCloseModalNewAccount} />
      <ModalNewCategory show={isModalNewCategoryShow} onClose={handleCloseModalNewCategory} />
      <DeleteData
        show={isDialogDeleteAccountShow}
        onClose={handleCloseDialogDeleteAccount}
        onDelete={handleDeleteAccount}
      />
      <DeleteData
        show={isDialogDeleteCategoryShow}
        onClose={handleCloseDialogDeleteCategory}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
};
