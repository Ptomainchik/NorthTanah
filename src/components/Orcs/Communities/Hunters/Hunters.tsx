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
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(84, 230, 55, 0.7)'}, content: {border: '0.2vw solid black' }}}
        className={classes.huntersModal} isOpen={modalIsOpen}>
          {HuntersDescription}
          <button className={classes.closeModal} onClick={closeModal} style={{background: "rgb(84, 230, 55)"}}>Закрыть</button>
        </Modal>
      </div>
    )}


    const HuntersDescription =  (
        <div>
            <div className={classes.contentModal1}>
                <img title="Малгар" className={classes.imageHeadCommunities} src={SeniorHunter} alt="Orc elder hunter" draggable="false" style={{border: "solid rgb(84, 230, 55) 0.3vw"}}/>
                <h3 style={{color: "rgb(84, 230, 55)"}}>Малгар - старший охотник.</h3>
                <span>
                  Каждый думал только о себе и своих ближних. Добыча попросту не доходила до всех сородичей.
                  Тогда ещё молодой Малгар применил и начал внедрять использование ловушек и капканов в охоте, что стало приносить пропитания вдоволь для всех.
                  Став старшим охотником.
                </span>
            </div>
            <div className={classes.contentModal2}>  
                <img title="Бурзаг" className={classes.imageMemberCommunities1} src={TrapMaster} alt="Orc trap master" draggable="false" style={{border: "solid rgb(84, 230, 55) 0.3vw"}}/>
                <h3 style={{color: "rgb(84, 230, 55)"}}>Бурзаг - мастер ловушек.</h3>
                <span>
                  Всё своё время он тратил на то, чтобы улучшить способы охоты. 
                  Все силки, капканы, разнообразные ловушки для дичи и не только - всё это придумал именно он.
                </span>
            </div>    
        </div>
      
    )
    