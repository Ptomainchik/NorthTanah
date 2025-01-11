import Modal from 'react-modal';
import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcsVictory from "../../../../images/Battlefields/OrcsBattlefield/OrcsVictory.webp"
import { HomeButtonVictory } from "../../../Button/HomeButtonVictory/HomeButtonVictory";

export const ModalOrcsVictory = () =>{

    return (
        <div>
           <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(4, 27, 1, 0.7)'}, content: {border: '2px solid black' }}}
               className={classes.orcsVictory} isOpen={true}>
                <div className={classes.blockModalOrcsVictory}>
                    <h2>Victory</h2>
                    <p>Эта победа принесёт мир и порядок в Чёрный лес. Королевство Медвежьих вершин, заплатило кровью за свою вероломность. Поверженные гномы ещё долго не смогут представлять угрозы!</p>
                    <HomeButtonVictory/>
                    <h5>Home</h5>
                </div>
                <img className={classes.blockModalOrcsVictory} src={OrcsVictory} alt="Victory" />
            </Modal>
       </div>
    )
}

