import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import Brigadier from '../../../../images/Orcs/OrcsOrganizations/Brigadier.jpg'

export const Workers = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);

const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};

return (
  <div>
    <button onClick={openModal} className={classes.iconsWorkersModalOrganization} title="Рабочие"></button>
    <Modal style={{ overlay: {backgroundColor: 'rgba(255, 193, 21, 0.7)'}, content: {border: '2px solid black' }}}
    className={classes.workersModal} isOpen={modalIsOpen}>
      {WorkersDescription}
      <button className={classes.buttonCloseWorkersModal} onClick={closeModal}>Закрыть</button>
    </Modal>
  </div>
)}

const WorkersDescription = 
   (
    <div>
        <div className={classes.contentModal}>
            <img title="Вакшиг" className={classes.imageHeadOrganizations} src={Brigadier} alt="Orc Head Brigadier"/>
                <span>Вакшиг - главный бригадир.</span>
        </div>
    </div>
  
    )

