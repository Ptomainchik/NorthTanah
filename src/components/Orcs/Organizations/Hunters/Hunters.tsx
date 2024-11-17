import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/OrcsKingdom.module.css'
import OrcShaman from '../../../../images/Orcs/OrcsPage/OrcShaman.jpg'


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
        <Modal  style={{ overlay: {backgroundColor: 'rgba(84, 230, 55, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.huntersModal} isOpen={modalIsOpen}>
          {HuntersDescription}
          <button className={classes.buttonCloseHuntersModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const HuntersDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Малгар" className={classes.imageHeadOrganizations} src={OrcShaman} alt="Orc elder hunter"/>
                <span>Малгар - старший охотник.</span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Бурзаг" className={classes.imageMemberOrganizations} src={OrcShaman} alt="Orc trap master"/>
                <span>Бурзаг - мастер ловушек.</span>
            </div>    
        </div>
      
    )
    