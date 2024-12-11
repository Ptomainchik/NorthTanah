import classes from "../../Styles/BattlefieldsStyles.module.css";
import { OrcsUnitLwl3 } from "../Units/OrcsUnits/OrcsUnitLwl3";
import { DwarvesUnitLwl3 } from "../Units/DwarvesUnits/DwarvesUnitLwl3";
import { OrcsUnitLwl4 } from "../Units/OrcsUnits/OrcsUnitLwl4";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const DwarvesBattlefieldLwl3 = () => {
    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonDwarvesBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
                <div className={classes.unitsFlex}>
                    <div className={classes.unitsBlock}>
                        <div className={classes.dwarfLwl3}>
                            <DwarvesUnitLwl3/>
                            <DwarvesUnitLwl3/>
                            <DwarvesUnitLwl3/>
                            <DwarvesUnitLwl3/>
                        </div>
                    </div>
                    <div className={classes.unitsBlock}>
                        <div className={classes.orcLwl3}>
                            <OrcsUnitLwl3/>
                            <OrcsUnitLwl3/>
                            <OrcsUnitLwl3/>
                            <OrcsUnitLwl3/>
                        </div>   
                                   
                    </div>
                    <div className={classes.unitsBlock}>
                        <div className={classes.orcLwl4}>
                            <OrcsUnitLwl4/>
                        </div>  
                    </div>
                    
            </div>
        </div>)
    }