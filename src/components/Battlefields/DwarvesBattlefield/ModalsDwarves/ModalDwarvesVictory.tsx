import Modal from 'react-modal';
import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcsVictory from "../../../../images/Battlefields/OrcsBattlefield/OrcsVictory.webp"
import { HomeButtonVictory } from '../../../Button/HomeButtonVictory/HomeButtonVictory';

export const ModalDwarvesVictory = () =>{

    return (
        <div>
           <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(30, 46, 70, 0.7)'}, content: {border: '2px solid black' }}}
               className={classes.dwarvesVictory} isOpen={true}>
                <div className={classes.blockModalDwarvesVictory}>
                    <h2>Victory</h2>
                    <p>Эта победа принесёт мир и порядок в Чёрный Лес. Королевство Медвежьих вершин, заплатило кровью за свою вероломность. Поверженные гномы ещё долго не смогут представлять угрозы!</p>
                    <HomeButtonVictory/>
                    <h5>Home</h5>
                </div>
                <img className={classes.blockModalDwarvesVictory} src={OrcsVictory} alt="Victory" />
            </Modal>
       </div>
    )
}

