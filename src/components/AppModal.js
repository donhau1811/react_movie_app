import * as React from "react";
import Modal from "@mui/material/Modal";
import ModalContent from "./ModalContent";

const AppModal = ({ children, id }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent id={id}/>
      </Modal>
    </div>
  );
};

export default AppModal;
