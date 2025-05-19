import classes from "../../../Styles/BattlefieldsStyles.module.css";
import DwarvesWin from "../../../../images/Battlefields/DwarvesBattlefield/DwarvesWin.webp"
import { NextDwarvesLevelButton } from "../../../Button/NextDwarvesLevelButton/NextDwarvesLevelButton";

export const ModalDwarvesWin123Lvl = () =>{

    return (
        <div className={classes.dwarvesOverlay}>
           <div className={classes.dwarvesWin123Lvl}>
                <div className={classes.blockModalWinDwarves123Lvl}>
                    <h2>Победа</h2>
                    <NextDwarvesLevelButton/>
                    <h5>Следующий уровень</h5>
                </div>
                <img className={classes.blockModalWinDwarves123Lvl} src={DwarvesWin} alt="Win" draggable="false"/>
            </div>
       </div>
    )
}

