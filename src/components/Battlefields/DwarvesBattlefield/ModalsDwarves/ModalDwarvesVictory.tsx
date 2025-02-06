import classes from "../../../Styles/BattlefieldsStyles.module.css";
import DwarvesVictory from "../../../../images/Battlefields/DwarvesBattlefield/DwarvesVictory.webp"
import { HomeButtonVictory } from '../../../Button/HomeButtonVictory/HomeButtonVictory';

export const ModalDwarvesVictory = () =>{

    return (
        <div className={classes.dwarvesOverlay}>
           <div className={classes.dwarvesVictory}>
                <div className={classes.blockModalDwarvesVictory}>
                    <h2>Victory</h2>
                    <p>Королевство Медвежьих вершин, всегда будет помнить эту победу! Разгром мерзких орков, остудит алчность королей Чёрного леса и надолго отвратит любые нападки с их стороны.</p>
                    <HomeButtonVictory/>
                    <h5>Home</h5>
                </div>
                <img className={classes.blockModalDwarvesVictory} src={DwarvesVictory} alt="Victory" draggable="false"/>
            </div>
       </div>
    )
}

