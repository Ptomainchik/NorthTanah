import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import SeniorHunter from '../../../../images/Orcs/OrcCommunities/SeniorHunter.jpg'
import TrapMaster from '../../../../images/Orcs/OrcCommunities/TrapMaster.jpg'

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
        <button onClick={openModal} className={classes.iconsHuntersModalCommunity} title="Охотники"/>
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
                <img title="Малгар" className={classes.imageHeadCommunities} src={SeniorHunter} alt="Orc elder hunter"/>
                <span>
                  Малгар - старший охотник. Каждый думал только о себе и своих ближних. Добыча просто-напросто не доходила до всех сородичей.
                  Тогда ещё молодой Малгар, собрал группу охотников, которая стала разрастаться стремительными темпами и приносить пропитания вдоволь для всех.   
                </span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Бурзаг" className={classes.imageMemberCommunities } src={TrapMaster} alt="Orc trap master"/>
                <span>
                  Бурзаг - мастер ловушек. Всё своё время он тратил на то, чтобы улучшить способы охоты. Все силки, капканы, разнообразные ловушки для дичи и не только,
                  всё это придумал именно он.
                </span>
            </div>    
        </div>
      
    )
    