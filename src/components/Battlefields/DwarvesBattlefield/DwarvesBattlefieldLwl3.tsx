import classes from "../../Styles/BattlefieldsStyles.module.css";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const DwarvesBattlefieldLwl3 = () => {
    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonDwarvesBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
                <div className={classes.unitsFlex}>
                    <div className={classes.unitsBlock}>
                        <div className={classes.dwarfLwl3}>
                        
                        </div>
                    </div>
                    <div className={classes.unitsBlock}>
                        <div className={classes.orcLwl3}>
                          
                        </div>   
                                   
                    </div>
                    <div className={classes.unitsBlock}>
                        <div className={classes.orcLwl4}>
             
                        </div>  
                    </div>
                    
            </div>
        </div>)
    }