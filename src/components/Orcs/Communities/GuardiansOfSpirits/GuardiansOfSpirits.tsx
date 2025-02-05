import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import FirstGuardianOfSpirits from '../../../../images/Orcs/OrcCommunities/FirstGuardianOfSpirits.jpg'


export const GuardiansOfSpirits = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.iconsGuardiansOfSpiritsModalCommunity} title="Хранители духов"/>
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(50, 88, 255, 0.7)'}, content: {border: '0.2vw solid black' }}}
        className={classes.guardiansOfSpiritsModal} isOpen={modalIsOpen}>
          {SpiritCathersDescription}
          <button className={classes.closeModal} onClick={closeModal} style={{background: "rgb(50, 88, 255)"}}>Закрыть</button>
        </Modal>
      </div>
    )}


    const SpiritCathersDescription =  (
        <div>
            <div className={classes.contentModal1}>
                <img title="Норзуг" className={classes.imageHeadCommunities} src={FirstGuardianOfSpirits} alt="Orc guardian of spirits" style={{border: "solid rgb(50, 88, 255) 0.3vw"}}/>
                <h3 style={{color: "rgb(50, 88, 255)"}}>Норзуг - первый хранитель духов.</h3> 
                <span>
                  Очнувшись от тысячелетнего анабиоза, он вернул своих соплеменников к жизни, 
                  вселив в них духов предков. После чего вывел зеленокожий народ на поверхность, в Чёрный Лес, где они и обосновались. 
                  Став после этого для них своего рода великим отцом. 
                </span>
            </div>
        </div>
      
    )
    