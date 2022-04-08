import React from "react";
import { Container, Modal, Row } from "react-bootstrap";

 function Child({
  show = false,
  onHide = () => {},
  inData = "",
  image_path = "",
}) {
  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{inData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <img src={`${image_path}${inData.poster_path}`} alt="Not Found" />
            </Row>
            <Row>
              <p>{inData.overview}</p>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Child;