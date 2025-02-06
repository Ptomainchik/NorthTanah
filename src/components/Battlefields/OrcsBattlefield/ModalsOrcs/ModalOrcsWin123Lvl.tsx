import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcsWin from "../../../../images/Battlefields/OrcsBattlefield/OrcsWin.webp"
import { NextOrcsLevelButton } from "../../../Button/NextOrcsLevelButton/NextOrcsLevelButton"

export const ModalOrcsWin123Lvl = () =>{

    return (
        <div className={classes.orcsOverlay}>
           <div className={classes.orcsWin123Lvl}>
                <div className={classes.blockModalWinOrcs123Lvl}>
                    <h2>Victory</h2>
                    <NextOrcsLevelButton/>
                    <h5>Next Level</h5>
                </div>
                <img className={classes.blockModalWinOrcs123Lvl} src={OrcsWin} alt="Win" draggable="false"/>
            </div>
       </div>
    )
}

