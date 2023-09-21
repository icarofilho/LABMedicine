import PropTypes from "prop-types";

import { Modal } from "@mui/material";
// import { useEffect, useState } from "react";

// import Box from "@mui/material/Box";
// import Patients from "../../../database/models/patients";
// import Vaccine from "../../../database/models/vaccine";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalPatientVaccineComponent({ isModalOpen, handleCloseModal }) {
  // console.log("props", props);
  // useEffect(() => {
  //   console.log("MODAL");
  // }, []);
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <div style={style}>
        <h2>Ola Mundo</h2>
      </div>

      <div></div>
    </Modal>
  );
}

ModalPatientVaccineComponent.propTypes = {
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  props: PropTypes.object,
};

export default ModalPatientVaccineComponent;
