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
          <button className={classes.closeModal} onClick={closeModal} style={{background: "rgb(233, 121, 56)"}}>Закрыть</button>
        </Modal>
      </div>
    )}


    const BlacksmithGuildDescription =  (
        <div>
            <div className={classes.contentModal1}>
                <img title="Морей Хранитель" className={classes.imageHeadGuilds} src={HeadDwarfBlacksmithMorei} alt="Морей Хранитель" style={{border: "solid rgb(255, 130, 58) 0.3vw"}}/>
                <h3 style={{color: "rgb(255, 130, 58)"}}>Морей Хранитель глава гильдии кузнецов.</h3>
                <span>
                  Сколько ему лет не знает он и сам, но знания накопившиеся за всю жизнь в кузнечном ремесле он хранит до сих пор.
                  Стараясь не выдавать их своим же ученикам. Делая это порционно и лишь избранным. За что его и прозвали Хранителем.
                </span>
            </div>
            <div className={classes.contentModal2}>  
                <img title="Салгон" className={classes.imageMemberGuilds1} src={DwarfBlacksmithSalgon} alt="Салгон" style={{border: "solid rgb(255, 130, 58) 0.3vw"}}/>
                <h3 style={{color: "rgb(255, 130, 58)"}}>Салгон - старший мастер.</h3>
                <span>
                  Он тот к кому в первую очередь попадают новенькие не опалённые жаром кузнечного горна храбрецы решившие связать свою жизнь с наковальней.
                </span>
            </div>    
            <div className={classes.contentModal3}>
                <img title="Гаркан" className={classes.imageMemberGuilds2} src={DwarfBlacksmithGarkan} alt="Гаркан" style={{border: "solid rgb(255, 130, 58) 0.3vw"}}/>
                <h3 style={{color: "rgb(255, 130, 58)"}}>Гаркан - заведующий склада.</h3>
                <span>
                  Он днём и ночью приглядывает за кузнями, чтобы металл был всегда в достатке. Хотя его мастерству в ремесле ковки,
                  могут позавидовать многие.
                </span>
            </div>
        </div>
      
    )
    