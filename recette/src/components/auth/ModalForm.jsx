import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const ModalForm = (props) => {
  return createPortal(
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        {props.children}
        <button className="btn btn-primary ms-auto" onClick={props.closeModal}>
          Fermer
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ModalForm;

// import React from 'react';
// import {Modal} from 'react-bootstrap'; // Ou importe le modal de React Bootstrap

// const ModalForm = ({ isOpen, closeModal }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       contentLabel="Formulaire"
//     >
//       <h3>{authMode}</h3>
//       <form onSubmit={submitForm}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" ref={emailRef} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" ref={passwordRef} />
//         </div>
//         <button>{authMode}</button>
//         </form>
//       <h2>Mon Formulaire</h2>
//       <button onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
//         {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
//       </button>
//       <button onClick={closeModal}>Fermer</button>
//     </Modal>
//   );
// };

// export default ModalForm;
