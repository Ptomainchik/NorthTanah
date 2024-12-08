import classes from "../../Styles/BattlefieldsStyles.module.css";
import { OrcsUnitLwl2 } from "../Units/OrcsUnits/OrcsUnitLwl2";
import { DwarvesUnitLwl2 } from "../Units/DwarvesUnits/DwarvesUnitLwl2";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const DwarvesBattlefieldLwl2 = () => {
    return (
        <div className={classes.dwarvesBattlefield}>
        <div className={classes.buttonDwarvesBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                <DwarvesUnitLwl2/>
                <DwarvesUnitLwl2/>
                <DwarvesUnitLwl2/>
                <DwarvesUnitLwl2/>
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
