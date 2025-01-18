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
      <button className={classes.buttonCloseMerchantsModal} onClick={closeModal}>Закрыть</button>
    </Modal>
  </div>
)}

const MerchantsGuildDescription = 
   (
    <div>
        <div className={classes.contentModal}>
            <img title="Бартон Златопалый" className={classes.imageHeadMerchants} src={HeadDwarfMerchantBarton} alt="fgdf"/>
                <span>
                  <span>Бартон Златопалый - глава гильдии торговцев.</span> Именно он поднял вопрос за отделение от кузнецов, во время создания гильдии. Когда же
                    всё было решено, Златопалого выбрали главой торговцев. Ему подчиняются
                    все члены гильдии и он решает какой процент с продаж пойдёт в казну.
                </span>
        </div>
        <div className={classes.contentModal}>
                <img title="Гарберт" className={classes.imageMemberMerchants} src={DwarfMerchantGarbert} alt="fgdf"/>
                <span>
                  <span>Гарберт - старший закупщик.</span> Он договаривается о цене
                  с гильдиями производителями и помогает торговцам заполнить их лавки.
                  Его подчинённые путешествует в поисках нового ассортимента.
                </span>
        </div>
    </div>
  
    )

