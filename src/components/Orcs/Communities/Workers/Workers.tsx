import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import Brigadier from '../../../../images/Orcs/OrcCommunities/Brigadier.jpg'

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
    <button onClick={openModal} className={classes.iconsWorkersModalCommunity} title="Рабочие"></button>
    <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(255, 193, 21, 0.7)'}, content: {border: '0.2vw solid black' }}}
    className={classes.workersModal} isOpen={modalIsOpen}>
      {WorkersDescription}
      <button className={classes.closeModal} onClick={closeModal} style={{background: "rgb(255, 193, 21)"}}>Закрыть</button>
    </Modal>
  </div>
)}

const WorkersDescription = 
   (
    <div>
        <div className={classes.contentModal1}>
            <img title="Вакшиг" className={classes.imageHeadCommunities} src={Brigadier} alt="Orc Head Brigadier" style={{border: "solid rgb(255, 193, 21) 0.3vw"}}/>
                <h3 style={{color: "rgb(255, 193, 21)"}}>Вакшиг - главный бригадир.</h3>
                <span>
                  В новом доме орков, требовались рабочие руки, способные обустроить быт и хозяйство. Таким мастером, умеющим не только создавать,
                  но и организовывать работу других, стал Вакшиг. Под его опытным началом, строительство и ремёсла развивались стремительно.
                </span>
        </div>
    </div>
  
    )

