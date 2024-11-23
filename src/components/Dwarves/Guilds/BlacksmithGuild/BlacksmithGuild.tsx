import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BearPeaks.module.css'
import HeadDwarfBlacksmithMorei from '../../../../images/Dwarves/Guilds/HeadDwarfBlacksmithMorei.jpg'
import DwarfBlacksmithSalgon from '../../../../images/Dwarves/Guilds/DwarfBlacksmithSalgon.jpg'
import DwarfBlacksmithGarkan from '../../../../images/Dwarves/Guilds/DwarfBlacksmithGarkan.jpg'

export const BlacksmithGuild = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.anvilBlacksmith} title="Гильдия Кузнецов"/>
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(233, 121, 56, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.blacksmithModal} isOpen={modalIsOpen}>
          {BlacksmithGuildDescription}
          <button className={classes.buttonCloseBlacksmithModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const BlacksmithGuildDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Морей Хранитель" className={classes.imageHeadBlacksmith} src={HeadDwarfBlacksmithMorei} alt="Гном кузнец сидит в деревяном кресле в кузнице"/>
                <span>Морей Хранитель - самый опытный мастер и глава гильдии кузнецов. Сколько ему лет не знает он и сам, но знания накопившиеся за всю жизнь в кузнечном ремесле он хранит до сих пор.
                Стараясь не выдавать их своим же ученикам. Делая это порционно и лишь избранным. За что его и прозвали Хранителем.
                </span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Салгон" className={classes.imageMemberBlacksmith} src={DwarfBlacksmithSalgon} alt="Гном кузнец стоит посреди кузницы"/>
                <span>Салгон - отвечает в гильдии за обучение кузнечному делу. 
                Он тот к кому в первую очередь попадают новенькие не опалённые жаром кузнечного горна храбрецы решившие связать свою жизнь с наковальней.</span>
            </div>    
            <div className={classes.contentModal}>
                <img title="Гаркан" className={classes.imageMemberBlacksmith} src={DwarfBlacksmithGarkan} alt="Гном кузнец стоит посреди кузницы"/>
                <span>Гаркан - отвечает за поставку сырья. Он днём и ночью приглядывает за кузнями, чтобы металл был всегда в достатке. Хотя его мастерству в ремесле ковки,
                 могут позавидовать многие.
                </span>
            </div>
        </div>
      
    )
    