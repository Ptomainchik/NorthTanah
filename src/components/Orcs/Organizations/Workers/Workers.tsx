import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/OrcsKingdom.module.css'
import OrcShaman from '../../../../images/Orcs/OrcsPage/OrcShaman.jpg'

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
    <Modal style={{ overlay: {backgroundColor: 'rgba(36, 50, 110, 0.7)'}, content: {border: '2px solid black' }}}
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
            <img title="Вакшиг" className={classes.imageHeadOrganizations} src={OrcShaman} alt="Orc Head Brigadier"/>
                <span>Вакшиг - главный бригадир.</span>
        </div>
    </div>
  
    )

