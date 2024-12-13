import { useState } from "react";
import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";


const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLwl1 = () => {
    const [dwarfHealth1, setDwarfHealth1] = useState(1000);
    const [orcHealth1, setOrcHealth1] = useState(1000);
    const [diceRoll, setDiceRoll] = useState(0);

    const rollDice = () => {
        setDiceRoll(randomIntegerFromInterval(1, 2));
    };

    const handleOrcAttack = () => {
        rollDice();
        if (dwarfHealth1 > 0 && diceRoll !== null) {
            setDwarfHealth1(dwarfHealth1 - diceRoll * 10);
            setTimeout(() => {
                setOrcHealth1(orcHealth1 - 10);
            }, 100);
        }
    };

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl12}>
                        {dwarfHealth1}<button className={classes.buttonDwarfLwl1} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                <div>{diceRoll}</div>
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl12}>
                        {orcHealth1}<button className={classes.buttonOrcLwl1}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrcsBattlefieldLwl1;