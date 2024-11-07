import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../../Styles/Styles.module.css'
import HeadDwarfMerchantBarton from '../../../../images/Osnova/HeadDwarfMerchantBarton.jpg'
import DwarfMerchantGarbert from '../../../../images/Osnova/DwarfMerchantGarbert.jpg'

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
    <button onClick={openModal} className={classes.giltor} title="Гильдия Торговцев"></button>
    <Modal style={{ overlay: {backgroundColor: 'rgba(245, 231, 44, 0.7)'}, content: {border: '2px solid black' }}}
    className={classes.diator} isOpen={modalIsOpen}>
      {MerchantsGuildDescription}
      <button className={classes.btnclt} onClick={closeModal}>Закрыть</button>
    </Modal>
  </div>
)}

const MerchantsGuildDescription = 
   (
    <div>
        <div className={classes.dt}>
            <img title="Бартон Златопалый" className={classes.t} src={HeadDwarfMerchantBarton} alt="fgdf"/>
                <span>Бартон Златопалый - глава гильдии торговцев. Во времена создания гильдии,
                именно он поднял вопрос за отделение от кузнецов. Когда же
                всё было решено, Златопалого выбрали главой новой гильдии. Ему подчиняются
                все торговцы гильдии и он решает какой процент с продаж пойдёт в казну.</span>
        </div>
        <div className={classes.dtt}>
                <img title="Гарберт" className={classes.tt} src={DwarfMerchantGarbert} alt="fgdf"/>
                <span>Гарберт - отвечает за наполнение складов товаром. Он договаривается о цене
                с гильдиями производителями и помогает торговцам заполнить их лавки.
                Его подчинённые путешествует в поисках нового ассортимента.</span>
                </div>
    </div>
  
    )

