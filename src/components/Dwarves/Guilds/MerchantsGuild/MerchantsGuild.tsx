import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BearPeaks.module.css'
import HeadDwarfMerchantBarton from '../../../../images/Dwarves/Guilds/HeadDwarfMerchantBarton.jpg'
import DwarfMerchantGarbert from '../../../../images/Dwarves/Guilds/DwarfMerchantGarbert.jpg'

export const MerchantsGuild = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);

const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};

return (
  <div>
    <button onClick={openModal} className={classes.scalesMerchants} title="Гильдия Торговцев"></button>
    <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(245, 231, 44, 0.7)'}, content: {border: '2px solid black' }}}
    className={classes.merchantsModal} isOpen={modalIsOpen}>
      {MerchantsGuildDescription}
      <button className={classes.closeModal} onClick={closeModal} style={{background: "rgb(245, 231, 44)"}}>Закрыть</button>
    </Modal>
  </div>
)}

const MerchantsGuildDescription = 
   (
    <div>
        <div className={classes.contentModal1}>
            <img title="Бартон Златопалый" className={classes.imageHeadGuilds} src={HeadDwarfMerchantBarton} alt="Бартон Златопалый" draggable="false" style={{border: "solid rgb(245, 231, 44) 0.3vw"}}/>
                <h3 style={{color: "rgb(245, 231, 44)"}}>Бартон Златопалый - глава гильдии торговцев.</h3>
                <span>
                  Именно он поднял вопрос об отделении от кузнецов во время создания гильдии. Когда всё было решено, Златопалого выбрали главой торговцев. 
                  Ему подчиняются все члены гильдии, и он решает, какой процент с продаж пойдет в казну.
                </span>
        </div>
        <div className={classes.contentModal2}>
                <img title="Гарберт" className={classes.imageMemberGuilds1} src={DwarfMerchantGarbert} alt="Гарберт" draggable="false" style={{border: "solid rgb(245, 231, 44) 0.3vw"}}/>
                <h3 style={{color: "rgb(245, 231, 44)"}}>Гарберт - старший закупщик.</h3>
                <span>
                  Он договаривается о цене с гильдиями производителей и помогает торговцам заполнить их лавки. 
                  Его подчиненные путешествуют в поисках нового ассортимента.
                </span>
        </div>
    </div>
  
)

