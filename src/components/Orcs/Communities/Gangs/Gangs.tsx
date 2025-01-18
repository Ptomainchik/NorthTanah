import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import LeaderOfTheBandits from '../../../../images/Orcs/OrcCommunities/LeaderOfTheBandits.jpg'
import MasterOfTheMarauders from '../../../../images/Orcs/OrcCommunities/MasterOfTheMarauders.jpg'
import ChiefOfThieves from '../../../../images/Orcs/OrcCommunities/ChiefOfThieves.jpg'

export const Gangs = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.iconsGangsModalCommunity} title="Банды"/>
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(158, 4, 4, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.gangsModal} isOpen={modalIsOpen}>
          {GangsDescription}
          <button className={classes.buttonCloseGangsModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const GangsDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Родзарик" className={classes.imageHeadCommunities} src={LeaderOfTheBandits} alt="Orc leader of the bandits"/>
                <span>
                  <span>Родзарик - вождь разбойников и всех банд.</span> Разбойники грабили и убивали десятками, а то и сотнями, тех у кого можно было хоть чем нибудь поживится.
                  Но самым опасным и непредсказуемым из них был Родзарик, за что и стал вождём. А позже был провозглашён первым королём Чёрного леса.
                </span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Фругеш" className={classes.imageMemberCommunities} src={MasterOfTheMarauders} alt="Orc master of marauders"/>
                <span>
                  <span>Фругеш - хозяин мародёров.</span> Места, где полыхали сражения, проходили стихийные бедствия, оставленные жилища и брошенное впопыхах имущество. Именно там появлялись
                  банды мародёров, которыми заправлял жадный и ненасытный к чужому добру Фругеш.
                </span>
            </div>    
            <div className={classes.contentModal}>
                <img title="Хармук" className={classes.imageMemberCommunities} src={ChiefOfThieves} alt="Orc chief of thieves"/>
                <span>
                  <span>Хармук - глава воров.</span> Ловкости и скрытности у Хармука было в достатке, а ещё проницательный ум. Он проворачивал дела,
                  как заправский стратег, а не просто щупал карманы. Созданию казны в Чернолесье и объединению банд, все должны быть обязаны ему.   
                </span>
            </div>
        </div>
      
    )
    