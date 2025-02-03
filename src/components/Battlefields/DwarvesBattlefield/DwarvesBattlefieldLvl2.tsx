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

export const DwarvesBattlefieldLvl2 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(2000);
    const [orcHealth, setOrcHealth] = useState(2000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [dwarvesPoultice, setDwarvesPoultice] = useState(1);
    const [angryDwarf, setAngryDwarf] = useState(1);
    const [frozenGround, setFrozenGround] = useState(1);
    const [frozenGroundCount, setFrozenGroundCount] = useState(0);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [showSkilDwarvesPoulticeImg, setShowSkilDwarvesPoulticeImg] = useState(true);
    const [showSkilAndryDwarfImg, setShowSkilAngryDwarfImg] = useState(true);
    const [showSkilFrozenGroundImg, setShowSkilFrozenGroundImg] = useState(true)
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(false);
    const [showSkilFettersImg, setShowSkilFettersImg] = useState(false);
    const [showLoseDwarvesMessage, setShowLoseDwarvesMessage] = useState(false);
    const [showWinDwarves123LvlMessage, setShowWinDwarves123LvlMessage] = useState(false);

    const handlePoultice = () => {
        if (dwarvesPoultice === -1) { 
        } 
        else {
            setDwarvesPoultice( -1);
            setDwarfHealth(dwarfHealth + 100);
            setShowSkilDwarvesPoulticeImg(false);
            return
        }
    };

    const handleAngryDwarf = () => {
        if (angryDwarf === -1) { 
        } else {
            setAngryDwarf( -1);
            setOrcHealth(orcHealth - 50);
            setShowSkilAngryDwarfImg(false);
            return
        }
    };

    const handleFrozenGround = () => {
        if (frozenGround === -1) {
            return
        }else{
            setFrozenGround(-1);
            setFrozenGroundActive(true);
            setFrozenGroundCount(0)
        }
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleDwarfAttack = () => {
        multiplier();
        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setOrcHealth(orcHealth - damageMultiplier * 20)
            setFrozenGroundCount(frozenGroundCount + 1)
        }
        if (frozenGroundCount >= 2) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        }
        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setOrcHealth(orcHealth - damageMultiplier * 20)
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 20)
            }, 100);
        }

        if (orcHealth < 400 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth < 400 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowSkilContagiousBiteImg(true)
        }

        if (orcHealth <= 400 && orcHealth >= 360 && damageMultiplier !== null) {
            setShowMessage3(true);
        }   

        if (orcHealth <= 800 && orcHealth >= 720 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFettersImg(true)
        }
        if (orcHealth <= 800 && orcHealth >= 720 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFettersImg(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 15)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFettersImg(false)
            }, 5000);
        }

        if (orcHealth <= 1000 && orcHealth >= 920 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 1000 && orcHealth >= 920 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 920 && orcHealth >= 420 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
        } 

        if (orcHealth <= 1500 && orcHealth >= 1420 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFettersImg(true)
        }
        else if (orcHealth <= 1500 && orcHealth >= 1420 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFettersImg(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 15)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFettersImg(false)
            }, 5000);
        }
       
        if (orcHealth <= 1800 && orcHealth >= 1720 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 1800 && orcHealth >= 1720 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 60)
            }, 100) 
            setShowMessage(true)
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 1720 && orcHealth >= 1120 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
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
            <div className={classes.buttonsDwarvesBattlefield}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="2000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl2}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Вам конец.</p></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Гномье отродье.</p></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Выродки!</p></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="2000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl2} onClick={handleDwarfAttack}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBiteImg && <button title="Заразный укус"></button>}
                </div>
                <div className={classes.blockSkilFetters}>
                    {showSkilFettersImg && <button title="Охотничьи путы"></button>}
                </div>
            </div>
            <ModalRules/>
            <div className={classes.flexSkilsDwarves}>
            <div className={classes.blockSkilDwarfPoultice}>
                    {showSkilDwarvesPoulticeImg && <button  onClick={handlePoultice} title="Лечебный гриб"></button>}
                </div>
                <div className={classes.blockSkilAngryDwarf}>
                    {showSkilAndryDwarfImg && <button onClick={handleAngryDwarf} title="Гнев гнома"></button>}
                </div>
                <div className={classes.blockSkilFrozenGround}>
                    {showSkilFrozenGroundImg && <button onClick={handleFrozenGround} disabled={frozenGround === -1 || frozenGroundActive} title="Мёрзлая земля"></button>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x <p>Множитель урона</p>
            </div>
        </div>
    );
};
