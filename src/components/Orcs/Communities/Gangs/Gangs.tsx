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
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(158, 4, 4, 0.7)'}, content: {border: '0.2vw solid black' }}}
        className={classes.gangsModal} isOpen={modalIsOpen}>
          {GangsDescription}
          <button className={classes.closeModal} onClick={closeModal} style={{background: "rgb(158, 4, 4)"}}>Закрыть</button>
        </Modal>
      </div>
    )}


    const GangsDescription =  (
        <div>
            <div className={classes.contentModal1}>
                <img title="Родзарик" className={classes.imageHeadCommunities} src={LeaderOfTheBandits} alt="Orc leader of the bandits" style={{border: "solid rgb(158, 4, 4) 0.3vw"}}/>
                <h3 style={{color: "rgb(158, 4, 4)"}}>Родзарик - вождь разбойников и банд.</h3>
                <span>
                  Разбойники грабили и убивали десятками, а то и сотнями, тех у кого можно было хоть чем нибудь поживится.
                  Но самым опасным и непредсказуемым из них был Родзарик, за что и стал вождём. А позже был провозглашён первым королём Чёрного леса.
                </span>
            </div>
            <div className={classes.contentModal2}>  
                <img title="Фругеш" className={classes.imageMemberCommunities1} src={MasterOfTheMarauders} alt="Orc master of marauders" style={{border: "solid rgb(158, 4, 4) 0.3vw"}}/>
                <h3 style={{color: "rgb(158, 4, 4)"}}>Фругеш - хозяин мародёров.</h3>
                <span>
                  Места, где полыхали сражения, проходили стихийные бедствия, оставленные жилища и брошенное впопыхах имущество. Именно там появлялись
                  банды мародёров, которыми заправлял жадный и ненасытный к чужому добру Фругеш.
                </span>
            </div>    
            <div className={classes.contentModal3}>
                <img title="Хармук" className={classes.imageMemberCommunities2} src={ChiefOfThieves} alt="Orc chief of thieves" style={{border: "solid rgb(158, 4, 4) 0.3vw"}}/>
                <h3 style={{color: "rgb(158, 4, 4)"}}>Хармук - глава воров.</h3> 
                <span>
                  Ловкости и скрытности у Хармука было в достатке, а ещё проницательный ум. Он проворачивал дела,
                  как заправский стратег, а не просто щупал карманы. Созданию казны в Чернолесье и объединению банд, все должны быть обязаны ему.   
                </span>
            </div>
        </div>
      
    )
    