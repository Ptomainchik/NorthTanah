import classes from "../../Styles/BattlefieldsStyles.module.css";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const DwarvesBattlefieldLvl3 = () => {
    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonDwarvesBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
                <div className={classes.unitsFlex}>
                    <div className={classes.unitsBlock}>
                        <div className={classes.dwarfLvl3}>
                        
                        </div>
                    </div>
                    <div className={classes.unitsBlock}>
                        <div className={classes.orcLvl3}>
                          
                        </div>   
                                   
                    </div>
                    <div className={classes.unitsBlock}>
                        <div className={classes.orcLvl4}>
             
                        </div>  
                    </div>
                    
            </div>
        </div>)
    }