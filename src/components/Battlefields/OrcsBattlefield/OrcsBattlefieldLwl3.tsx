import classes from "../../Styles/BattlefieldsStyles.module.css";
import { DwarvesUnitLwl4 } from "../Units/DwarvesUnits/DwarvesUnitLwl4";
import { DwarvesBattlefieldLwl3 } from "../DwarvesBattlefield/DwarvesBattlefieldLwl3";
import { OrcsUnitLwl3 } from "../Units/OrcsUnits/OrcsUnitLwl3";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const OrcsBattlefieldLwl3 = () => {
    return (
    <div className={classes.orcsBattlefield}>
        <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
        <div>
            <DwarvesUnitLwl4/>
        </div>
        <div className={classes.unitsFlex}>
            <DwarvesBattlefieldLwl3/>
            <DwarvesBattlefieldLwl3/>
            <DwarvesBattlefieldLwl3/>
            <DwarvesBattlefieldLwl3/>
            <DwarvesBattlefieldLwl3/>
        </div>
        <div className={classes.unitsFlex}>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
        </div>
    </div>)
}