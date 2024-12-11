import classes from "../../Styles/BattlefieldsStyles.module.css";
import { OrcsUnitLwl1 } from "../Units/OrcsUnits/OrcsUnitLwl1";
import { DwarvesUnitLwl1 } from "../Units/DwarvesUnits/DwarvesUnitLwl1";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const DwarvesBattlefieldLwl1 = () => {
    return (
    <div className={classes.dwarvesBattlefield}>
        <div className={classes.buttonDwarvesBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl123}>
                        <DwarvesUnitLwl1/>
                        <DwarvesUnitLwl1/>
                        <DwarvesUnitLwl1/>
                        <DwarvesUnitLwl1/>
                    </div>
                </div>
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl123}>
                        <OrcsUnitLwl1/>
                        <OrcsUnitLwl1/>
                        <OrcsUnitLwl1/>
                        <OrcsUnitLwl1/>
                    </div>                
                </div>
        </div>
    </div>)
}