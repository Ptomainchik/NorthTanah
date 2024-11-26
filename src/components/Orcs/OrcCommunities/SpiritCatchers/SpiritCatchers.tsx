import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import FirstSpiritCatcher from '../../../../images/Orcs/OrcCommunities/FirstSpiritCatcher.jpg'


export const SpiritCatchers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.iconsSpiritCatchersModalOrganizations} title="Ловцы духов"/>
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(50, 88, 255, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.spiritCatchersModal} isOpen={modalIsOpen}>
          {SpiritCathersDescription}
          <button className={classes.buttonCloseSpiritCatchersModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const SpiritCathersDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Норзуг" className={classes.imageHeadOrganizations} src={FirstSpiritCatcher} alt="Orc spirit catcher"/>
                <span>Норзуг - первый ловец духов.</span>
            </div>
        </div>
      
    )
    