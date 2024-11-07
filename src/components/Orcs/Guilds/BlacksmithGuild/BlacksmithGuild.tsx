import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../../Styles/Styles.module.css'
import HeadDwarfBlacksmithMorei from '../../../../images/Osnova/HeadDwarfBlacksmithMorei.jpg'
import DwarfBlacksmithSalgon from '../../../../images/Osnova/DwarfBlacksmithSalgon.jpg'
import DwarfBlacksmithGarkan from '../../../../images/Osnova/DwarfBlacksmithGarkan.jpg'

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
        <button onClick={openModal} className={classes.gilkuz} title="Guilds"/>
        <Modal  style={{ overlay: {backgroundColor: 'rgba(233, 121, 56, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.diakuz} isOpen={modalIsOpen}>
          {BlacksmithGuildDescription}
          <button className={classes.btnclk} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const BlacksmithGuildDescription =  (
        <div>
            <div className={classes.dk}>
                <img title="Name" className={classes.k} src={HeadDwarfBlacksmithMorei} alt="???"/>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam eum inventore fugiat excepturi voluptatibus eligendi tempore ex quo repudiandae tenetur soluta beatae adipisci impedit quia, repellat, quasi assumenda obcaecati.
                </span>
            </div>
            <div className={classes.dkk}>  
                <img title="Name" className={classes.kk} src={DwarfBlacksmithSalgon} alt="???"/>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quam voluptatibus in ad, repellat qui nihil eum sequi eos et aperiam obcaecati dolor hic maxime, perspiciatis nesciunt deserunt. Tempore, repudiandae?</span>
            </div>    
            <div className={classes.dkkk}>
                <img title="Name" className={classes.kkk} src={DwarfBlacksmithGarkan} alt="???"/>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, dolorem fuga quo, eligendi et exercitationem labore laudantium deserunt quaerat animi necessitatibus magnam consectetur. Sit quis est animi nisi, temporibus illum?
                </span>
            </div>
        </div>
      
    )
    