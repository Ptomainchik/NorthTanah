import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import SeniorHunter from '../../../../images/Orcs/OrcsOrganizations/SeniorHunter.jpg'
import TrapMaster from '../../../../images/Orcs/OrcsOrganizations/TrapMaster.jpg'

export const Hunters = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.iconsHuntersModalOrganization} title="Охотники"/>
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(84, 230, 55, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.huntersModal} isOpen={modalIsOpen}>
          {HuntersDescription}
          <button className={classes.buttonCloseHuntersModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const HuntersDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Малгар" className={classes.imageHeadOrganizations} src={SeniorHunter} alt="Orc elder hunter"/>
                <span>Малгар - старший охотник.</span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Бурзаг" className={classes.imageMemberOrganizations} src={TrapMaster} alt="Orc trap master"/>
                <span>Бурзаг - мастер ловушек.</span>
            </div>    
        </div>
      
    )
    