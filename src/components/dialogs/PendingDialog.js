import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function PendingDialog({
  showModal,
  setShowModal,
  response,
  setResponse,
  error,
  setError,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startCounting = () => {
      setLoading(true);
      if (showModal) {
        setTimeout(() => {
          setLoading(false);
        }, 10000); // 10 giây
      }

      if (response) {
        setLoading(false);
      }
      if (error) {
        setLoading(false);
      }
    };

    startCounting();
  }, [showModal, response, error]);

  const handleCloseModal = () => {
    setShowModal(false);
    setResponse("");
    setError("");
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header>
          <Modal.Title>Đang xử lý...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div style={{ textAlign: "center" }}>
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div>
              {response && <p>Thành công!</p>}
              {error ? <p>Thất bại!</p> : <p>Time Out!</p>}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PendingDialog;
