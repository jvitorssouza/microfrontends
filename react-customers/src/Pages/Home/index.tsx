import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table, Spinner } from "reactstrap";

import { Container } from "./styles";
import { ICustomer } from "../../types/customers";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [customersState, setCustomersState] = useState<ICustomer[]>([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:3000/customers?_limit=10&_page=${page}`)
      .then(({ data }) => {
        setCustomersState(data);
        setLoading(false);
      });
  }, [page]);

  return (
    <Container>
      <Row>
        <Col md={24}>
          <Link to="/create">
            <Button className="mb-4" style={{ float: "right" }}>
              New Customer
            </Button>
          </Link>
        </Col>
      </Row>

      {loading ? (
        <Spinner color="primary" />
      ) : (
        <>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {customersState.map((item: ICustomer) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.address} - {item.city}{" "}
                    {item.state ? ` - ${item.state}` : ""}
                  </td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <Button className="page-link" onClick={() => setPage(page - 1)}>
                  Previous
                </Button>
              </li>
              <li className="page-item disabled">
                <span className="page-link">Page {page}</span>
              </li>
              <li className="page-item">
                <Button className="page-link" onClick={() => setPage(page + 1)}>
                  Next
                </Button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </Container>
  );
};

export default Home;
