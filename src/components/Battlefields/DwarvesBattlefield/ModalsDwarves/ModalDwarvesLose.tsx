import classes from "../../../Styles/BattlefieldsStyles.module.css";
import DwarfSkull from "../../../../images/Battlefields/DwarvesBattlefield/DwarfSkull.webp"
import { RestartLevelButton } from '../../../Button/RestartLevelButton/RestartLevelButton';

export const ModalDwarvesLose = () =>{

    return (
        <div className={classes.dwarvesOverlay}>
           <div className={classes.dwarvesLose}>
            <h2>Поражение</h2>
            <img src={DwarfSkull} alt="Lose" draggable="false"/>
            <h5>Заново</h5>
            <RestartLevelButton/>
           </div>
       </div>
    )
}

