import { useEffect, useState } from "react";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { RestartButton } from "../../Button/RestartButton/RestartButton";
import { ModalRules } from "../OverallBattlefield/ModalRules";
import { ModalDwarvesLose } from "./ModalsDwarves/ModalDwarvesLose";
import { ModalDwarvesWin123Lvl } from "./ModalsDwarves/ModalDwarvesWin123Lvl";

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const DwarvesBattlefieldLvl1 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(1000);
    const [orcHealth, setOrcHealth] = useState(1000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [dwarvesPoultice, setDwarvesPoultice] = useState(1);
    const [angryDwarf, setAngryDwarf] = useState(1);
    const [dwarvesPoulticeImg, setDwarvesPoulticeImg] = useState(true);
    const [skilAndryDwarfImg, setSkilAngryDwarfImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilsContagiousBite, setShowSkilsContagiousBite] = useState(false);
    const [showLoseDwarvesMessage, setShowLoseDwarvesMessage] = useState(false);
    const [showWinDwarves123LvlMessage, setShowWinDwarves123LvlMessage] = useState(false);

    const handlePoultice = () => {
        if (dwarvesPoultice === -1) { 
        } 
        else {
            setDwarvesPoultice( -1);
            setDwarfHealth(dwarfHealth + 100);
            setDwarvesPoulticeImg(false);
            return
        }
    };

    const handleAngryDwarf = () => {
        if (angryDwarf === -1) { 
        } else {
            setAngryDwarf( -1);
            setOrcHealth(orcHealth - 50);
            setSkilAngryDwarfImg(false)
            return
        }
    };

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleDwarfAttack = () => {
        multiplier();
        if (orcHealth > 0 && damageMultiplier !== null) {
            setOrcHealth(orcHealth - damageMultiplier * 10);
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 10);
            }, 100);   
        }
        if (orcHealth < 200 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 35)
            }, 100) 
            setShowSkilsContagiousBite(true)
        }
        if (orcHealth <= 200 && orcHealth >= 180 && damageMultiplier !== null) {
            setShowMessage3(true);
        }       
        if (orcHealth <= 500 && orcHealth >= 480 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilsContagiousBite(true)
        }
        else if (orcHealth <= 480 && orcHealth >= 410 && damageMultiplier !== null) {
            setShowSkilsContagiousBite(false)
        } 
       
        if (orcHealth <= 800 && orcHealth >= 780 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowMessage(true)
            setShowSkilsContagiousBite(true)
        }
        else if (orcHealth <= 780 && orcHealth >= 720 && damageMultiplier !== null) {
            setShowSkilsContagiousBite(false)
        } 
        if (orcHealth < 10){
            setShowWinDwarves123LvlMessage(true)
        }
        if (dwarfHealth < 10){
            setShowLoseDwarvesMessage(true)
        }   
    };

    useEffect(() => {
        if (showMessage) {
            const timeoutId = setTimeout(() => {
                setShowMessage(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [showMessage]);

    useEffect(() => {
        if (showMessage2) {
            const timeoutId = setTimeout(() => {
                setShowMessage2(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [showMessage2]);
   
    useEffect(() => {
        if (showMessage3) {
            const timeoutId = setTimeout(() => {
                setShowMessage3(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [showMessage3]);

    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonsBattlefields} style={{backgroundColor: "rgb(30, 46, 70)", border: "solid rgb(247,189,0) 2px"}}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="1000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl1}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageOrcs}><span>Жалкие орки.</span></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><span>Это было больно.</span></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><span>Мы вас уничтожим!</span></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="1000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl1} onClick={handleDwarfAttack}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilsContagiousBite && <button title="Заразный укус - наносит средний урон противнику."></button>}
                    {showSkilsContagiousBite && <p>Заразный укус</p>} 
                </div>
            </div>
            <ModalRules/>
            <div className={classes.flexSkilsDwarves}>
            <div className={classes.blockSkilDwarfPoultice}>
                    {dwarvesPoulticeImg && <button  onClick={handlePoultice} title="Лечебный гриб - восстанавливает здоровье."></button>}
                    {dwarvesPoulticeImg && <p>Фиал с водой</p>}
                </div>
                <div className={classes.blockSkilAngryDwarf}>
                    {skilAndryDwarfImg && <button onClick={handleAngryDwarf} title="Гнев гнома - увеличивает урон от обычных атак."></button>}
                    {skilAndryDwarfImg && <p>Гнев гнома</p>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};
