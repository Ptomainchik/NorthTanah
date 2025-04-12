import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcsVictory from "../../../../images/Battlefields/OrcsBattlefield/OrcsVictory.webp"
import { HomeButtonVictory } from "../../../Button/HomeButtonVictory/HomeButtonVictory";

export const ModalOrcsVictory = () =>{

    return (
        <div className={classes.orcsOverlay}>
           <div className={classes.orcsVictory}>
                <div className={classes.blockModalOrcsVictory}>
                    <h2>Victory</h2>
                    <p>Эта победа принесёт мир и порядок в Чёрный Лес. Королевство Медвежьих Вершин, заплатило кровью за свою вероломность. Поверженные гномы ещё долго не смогут представлять угрозы!</p>
                    <HomeButtonVictory/>
                    <h5>Home</h5>
                </div>
                <img className={classes.blockModalOrcsVictory} src={OrcsVictory} alt="Victory" draggable="false"/>
            </div>
       </div>
    )
}

