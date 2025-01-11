import Modal from 'react-modal';
import classes from "../../Styles/BattlefieldsStyles.module.css";
import Phial from "../../../images/Battlefields/DwarfSkils/Phial.jpg"
import AngryDwarf from "../../../images/Battlefields/DwarfSkils/AngryDwarf.jpg"
import FrozenGround from "../../../images/Battlefields/DwarfSkils/Boot.jpg"
import BearHug from "../../../images/Battlefields/DwarfSkils/BearHug.jpg"
import DwarvesBolts from "../../../images/Battlefields/DwarfSkils/Bolt.jpg"
import Poultice from "../../../images/Battlefields/OrcSkils/MedicinalMushroom.jpg"
import ContagiousBite from "../../../images/Battlefields/OrcSkils/OrcBite.jpg"
import Fetters from "../../../images/Battlefields/OrcSkils/Fetters.jpg"
import Ferocity from "../../../images/Battlefields/OrcSkils/OrcFerocity.jpg"
import Log from "../../../images/Battlefields/OrcSkils/Log.jpg"
import { useState } from 'react';

export const ModalRules = () =>{
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = () => {
        setModalIsOpen(true)
    };
      
    const closeModal = () => {
        setModalIsOpen(false)
    };
    return (
        <div>
        <button onClick={openModal} className={classes.buttonModalRules} title="Правила"/>
           <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(221, 221, 221, 0.7)'}, content: {border: '2px solid black' }}}
               className={classes.modalRules} isOpen={modalIsOpen}>
               {Rules}
               <button className={classes.buttonCloseModalRules} onClick={closeModal}>Закрыть</button>
           </Modal>
       </div>
    )
}

const Rules = (
    <div className={classes.modalRule}>
      <div className={classes.rulesDwarves}>
        <div className={classes.ruleDwarves}>
            <img className={classes.imgRules} src={Phial} alt="Фиал с горной водой"/>
            <p>Фиал с горной водой - восстанавливает здоровье.</p>
        </div>
        <div className={classes.ruleDwarves}>
            <img className={classes.imgRules} src={AngryDwarf} alt="Гнев гнома"/>
            <p>Гнев гнома - увеличивает урон от обычных атак.</p>
        </div>
        <div className={classes.ruleDwarves}>
            <img className={classes.imgRules} src={FrozenGround} alt="Мёрзлая земля"/>
            <p>Мёрзлая земля - даёт постоянную неуязвимость к обычным атакам если находится в снегах, иначе даёт её на 3 раунда.</p>
        </div>
        <div className={classes.ruleDwarves}>
        <img className={classes.imgRules} src={BearHug} alt="Объятия севера"/>
            <p>Объятия севера - наносит слабый урон противнику в течение 5 секунд.</p>
        </div>
        <div className={classes.ruleDwarves}> 
            <img className={classes.imgRules} src={DwarvesBolts} alt="Арбалетные болты"/>
            <p>Арбалетные болты - наносят слабый урон противнику, а затем малый урон в течение некоторого времени.</p>
        </div>
      </div>
      <div className={classes.rulesOrcs}>
        <div className={classes.ruleOrcs}>
            <img className={classes.imgRules} src={Poultice} alt="Лечебный гриб"/>
            <p>Лечебный гриб - восстанавливает здоровье.</p>
        </div>
        <div className={classes.ruleOrcs}>
            <img className={classes.imgRules} src={ContagiousBite} alt="Заразный укус" />
            <p>Заразный укус - наносит средний урон противнику.</p>
        </div>
        <div className={classes.ruleOrcs}>
        <img className={classes.imgRules} src={Fetters} alt="Охотничьи путы"/>
            <p>Охотничьи путы - наносит слабый урон противнику в течение 5 секунд.</p>
        </div>
        <div className={classes.ruleOrcs}> 
            <img className={classes.imgRules} src={Ferocity} alt="Свирепость орка"/>
            <p>Свирепость орка - увеличивает урон от обычных атак на три раунда.</p>
        </div>
        <div className={classes.ruleOrcs}> 
            <img className={classes.imgRules} src={Log} alt="Орочьи колья"/>
            <p>Орочьи колья - наносит слабый урон противнику, а затем малый урон в течение некоторого времени.</p>
        </div>
      </div>
    </div>
)