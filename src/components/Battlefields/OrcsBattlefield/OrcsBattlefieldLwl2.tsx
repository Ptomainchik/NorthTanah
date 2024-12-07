import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { DwarvesBattlefieldLwl2 } from "../DwarvesBattlefield/DwarvesBattlefieldLwl2";
import { OrcsUnitLwl2 } from "../Units/OrcsUnits/OrcsUnitLwl2";


export const OrcsBattlefieldLwl2 = () => {
    return (
    <div className={classes.orcsBattlefield}>
        <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
        <div className={classes.unitsFlex}>
            <DwarvesBattlefieldLwl2/>
            <DwarvesBattlefieldLwl2/>
            <DwarvesBattlefieldLwl2/>
            <DwarvesBattlefieldLwl2/>
            <DwarvesBattlefieldLwl2/>
        </div>
        <div className={classes.unitsFlex}>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
            <OrcsUnitLwl2/>
        </div>
    </div>)
}