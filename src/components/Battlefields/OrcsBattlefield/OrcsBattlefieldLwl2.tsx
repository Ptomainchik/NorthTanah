import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { DwarvesUnitLwl3 } from "../Units/DwarvesUnits/DwarvesUnitLwl3";
import { OrcsUnitLwl2 } from "../Units/OrcsUnits/OrcsUnitLwl2";


export const OrcsBattlefieldLwl2 = () => {
    return (
    <div className={classes.orcsBattlefield}>
        <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
        <div className={classes.unitsFlex}>
        <div className={classes.unitsBlock}>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
        </div>
        <div className={classes.unitsBlock}>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
        </div>
        </div>
    </div>)
}