import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { DwarvesUnitLwl2 } from "../Units/DwarvesUnits/DwarvesUnitLwl2";
import { OrcsUnitLwl2 } from "../Units/OrcsUnits/OrcsUnitLwl2";


export const OrcsBattlefieldLwl2 = () => {
    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl12}>
                        <DwarvesUnitLwl2/>
                        <DwarvesUnitLwl2/>
                        <DwarvesUnitLwl2/>
                        <DwarvesUnitLwl2/>
                    </div>
                </div>
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl12}>
                        <OrcsUnitLwl2/>
                        <OrcsUnitLwl2/>
                        <OrcsUnitLwl2/>
                        <OrcsUnitLwl2/>
                    </div>
                </div>
            </div>
        </div>)
}