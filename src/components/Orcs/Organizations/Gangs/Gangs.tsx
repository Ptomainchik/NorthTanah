import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/OrcsKingdom.module.css'
import OrcShaman from '../../../../images/Orcs/OrcsPage/OrcShaman.jpg'


export const Gangs = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.iconsGangsModalOrganization} title="Банды"/>
        <Modal  style={{ overlay: {backgroundColor: 'rgba(158, 4, 4, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.gangsModal} isOpen={modalIsOpen}>
          {GangsDescription}
          <button className={classes.buttonCloseGangsModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const GangsDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Родзарик" className={classes.imageHeadOrganizations} src={OrcShaman} alt="Orc leader of the bandits"/>
                <span>Родзарик - вождь разбойников и всех банд.</span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Фругеш" className={classes.imageMemberOrganizations} src={OrcShaman} alt="Orc master of marauders"/>
                <span>Фругеш - хозяин мародёров.</span>
            </div>    
            <div className={classes.contentModal}>
                <img title="Хармук" className={classes.imageMemberOrganizations} src={OrcShaman} alt="Orc chief of thieves"/>
                <span>Хармук - глава воров.</span>
            </div>
        </div>
      
    )
    