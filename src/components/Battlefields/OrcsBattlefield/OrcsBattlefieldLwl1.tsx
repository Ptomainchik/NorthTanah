import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { DwarvesUnitLwl1 } from "../Units/DwarvesUnits/DwarvesUnitLwl1";
import { OrcsUnitLwl1 } from "../Units/OrcsUnits/OrcsUnitLwl1";


export const OrcsBattlefieldLwl1 = () => {
    return (
    <div className={classes.orcsBattlefield}>
        <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefieldss</span><BackButton/></div>
        <div className={classes.unitsFlex}>
            <div className={classes.unitsBlock}>
                <div className={classes.dwarfLwl12}>
                    <DwarvesUnitLwl1/>
                    <DwarvesUnitLwl1/>
                    <DwarvesUnitLwl1/>
                    <DwarvesUnitLwl1/>
                </div>
            </div>
            <div className={classes.unitsBlock}>
                <div className={classes.orcLwl12}>
                    <OrcsUnitLwl1/>
                    <OrcsUnitLwl1/>
                    <OrcsUnitLwl1/>
                    <OrcsUnitLwl1/>
                </div>
            </div>
        </div>
    </div>)
}