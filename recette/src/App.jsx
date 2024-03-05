import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalForm from './components/auth/ModalForm'; // Chemin vers ton composant ModalForm

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  

  return (
    
      <div>
      
      <button onClick={openModal}>Ouvrir le formulaire</button>
      <ModalForm isOpen={modalIsOpen} closeModal={closeModal} >tEST</ModalForm>
    </div>
    
  );
};

export default App
