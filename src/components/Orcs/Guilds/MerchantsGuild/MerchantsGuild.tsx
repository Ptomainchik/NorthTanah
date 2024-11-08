import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../../Styles/Styles.module.css'
import OrcShaman from '../../../../images/Orcs/OrcsPage/OrcShaman.jpg'

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
    <button onClick={openModal} className={classes.giltor} title="Guilds"></button>
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
            <img title="Name" className={classes.t} src={OrcShaman} alt="fgdf"/>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab ad recusandae repellat ea error, nesciunt eaque accusantium eos. Est tempore deleniti pariatur vero eveniet voluptatibus reiciendis nemo dolorum incidunt?</span>
        </div>
        <div className={classes.dtt}>
                <img title="Name" className={classes.tt} src={OrcShaman} alt="fgdf"/>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo a harum itaque in error maiores perferendis eum. Incidunt at eligendi minima, molestiae neque voluptatum soluta atque pariatur mollitia, sapiente veritatis.</span>
                </div>
    </div>
  
    )

