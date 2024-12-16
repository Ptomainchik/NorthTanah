import { useState } from "react";
import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";


const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLwl1 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(1000);
    const [orcHealth, setOrcHealth] = useState(1000);
    const [diceRoll, setDiceRoll] = useState(0);
    const [orcPoultice, setOrcPoultice] = useState(1)
    const [contagiousBite, setContagiousBite] = useState(1)

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } else {
            setOrcPoultice( -1);
            setOrcHealth(orcHealth + 100);
            return
        }
    };

    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1);
            setDwarfHealth(dwarfHealth - 50);
            return
        }
    };

    const rollDice = () => {
        setDiceRoll(randomIntegerFromInterval(1, 2));
    };

    const handleOrcAttack = () => {
        rollDice();
        if (dwarfHealth > 0 && diceRoll !== null) {
            setDwarfHealth(dwarfHealth - diceRoll * 10);
            setTimeout(() => {
                setOrcHealth(orcHealth - 10);
            }, 100);   
        }
        if (dwarfHealth < 200 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 35)
            }, 100) 
        }
        if (dwarfHealth === 200 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 40)
            }, 100) 
        }
        else if (dwarfHealth === 190 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 40)
            }, 100) 
        }
        else if (dwarfHealth === 180 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 40)
            }, 100) 
            alert("Я уничтожу тебя!")
        }
        if (dwarfHealth === 500 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
        }
        else if (dwarfHealth === 490 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
        }
        else if (dwarfHealth === 480 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            alert("Ты конченный!")
        }
        if (dwarfHealth < 10){
            window.location.href = "battlefieldorlwl2";
        }
        if (orcHealth < 10){
            window.location.href = "*";
        }   
    };

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl123}>
                    <progress className={classes.healthIndicatorDwarf} max="1000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLwl1} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl123}>
                        <progress className={classes.healthIndicatorOrc} max="1000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLwl1}></button>
                        <div className={classes.flexSkils}>
                            <div className={classes.blockSkils}>
                                <button className={classes.orcPoultice} onClick={handlePoultice} title="Лечебный гриб - востанавливает 100 едениц здоровья.">{orcPoultice}</button>
                                <div className={classes.titleSkils}>Лечебный гриб</div>
                            </div>
                                <div className={classes.blockSkils}>{diceRoll}
                                <div className={classes.titleSkils}>Множитель урона</div> 
                            </div>
                            <div className={classes.blockSkils}>
                                <button className={classes.contagiousBite} onClick={handleContagiousBite} title="Заразный укус - наносит слабый урон противнику.">{contagiousBite}</button>
                                <div className={classes.titleSkils}>Заразный укус</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

