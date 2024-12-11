import classes from "../../Styles/BattlefieldsStyles.module.css";
import { DwarvesUnitLwl4 } from "../Units/DwarvesUnits/DwarvesUnitLwl4";
import { OrcsUnitLwl3 } from "../Units/OrcsUnits/OrcsUnitLwl3";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";
import { DwarvesUnitLwl3 } from "../Units/DwarvesUnits/DwarvesUnitLwl3";


export const OrcsBattlefieldLwl3 = () => {
    return (
    <div className={classes.orcsBattlefield}>
        <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl4}>
                        <DwarvesUnitLwl4/>
                    </div>
                </div>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl123}>
                        <DwarvesUnitLwl3/>
                        <DwarvesUnitLwl3/>
                        <DwarvesUnitLwl3/>
                        <DwarvesUnitLwl3/>
                    </div>
                </div>
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl123}>
                        <OrcsUnitLwl3/>
                        <OrcsUnitLwl3/>
                        <OrcsUnitLwl3/>
                        <OrcsUnitLwl3/>
                    </div>
                </div>
            </div>
    </div>)
}