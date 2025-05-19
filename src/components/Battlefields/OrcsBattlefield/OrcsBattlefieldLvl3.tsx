import { useEffect, useState } from "react";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { RestartButton } from "../../Button/RestartButton/RestartButton";
import { ModalRules } from "../OverallBattlefield/ModalRules";
import { ModalOrcsLose } from "./ModalsOrcs/ModalOrcsLose";
import { ModalOrcsWin123Lvl } from "./ModalsOrcs/ModalOrcsWin123Lvl";

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLvl3 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(4000);
    const [orcHealth, setOrcHealth] = useState(4000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [orcPoultice, setOrcPoultice] = useState(1);
    const [contagiousBite, setContagiousBite] = useState(1);
    const [fetters, setFetters] = useState(1);
    const [orcFerocity, setOrcFerocity] = useState(1);
    const [showSkilOrcPoulticeImg, setShowSkilOrcPoulticeImg] = useState(true);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(true);
    const [showSkilFettersImg, setShowSkilFettersImg] = useState(true);
    const [showSkilOrcFerocityImg, setShowSkilOrcFerocityImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showLoseOcrsMessage, setShowLoseOrcsMessage] = useState(false);
    const [showWinOcrs123LvlMessage, setShowWinOcrs123LvlMessage] = useState(false);
    const [showSkilAngryDwarfImg, setShowSkilAngryDwarfImg] = useState(false);
    const [showSkilFrozenGroundImg, setShowSkilFrozenGroundImg] = useState(false);
    const [showSkilBearHugImg, setShowSkilBearHugImg] = useState(false);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [ferocityActive, setFerocityActive] = useState(false);
    const [ferocityCount, setFerocityCount] = useState(0);

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice( -1)
            setOrcHealth(orcHealth + 120)
            setShowSkilOrcPoulticeImg(false)
            return
        }
    }

    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1)
            setDwarfHealth(dwarfHealth - 100)
            setShowSkilContagiousBiteImg(false)
            setFrozenGroundActive(false)
            setShowSkilFrozenGroundImg(false)
            return
        }
    }

   const handleOrcFerocity = () => {
        if (orcFerocity === -1 || ferocityActive) {
            return
        } else {
            setOrcFerocity(-1)
            setFerocityActive(true)
            setFerocityCount(0)
            setFrozenGroundActive(false)
            setShowSkilFrozenGroundImg(false)
        }
    }

    const handleFetters = () => {
        if (fetters === -1) { 
        } else {
            setFetters( -1)
            setFrozenGroundActive(false)
            setShowSkilFrozenGroundImg(false)
        const intervalId = setInterval(() => {
            setDwarfHealth(prevHealth => prevHealth - 40)
        }, 1000)
        setTimeout(() => {
            clearInterval(intervalId)
        }, 5000)
        setShowSkilFettersImg(false)
    }
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    }
    
    const handleOrcAttack = () => {
        multiplier()
        if (ferocityActive) {
            setDwarfHealth(dwarfHealth - damageMultiplier * 80);
            setFerocityCount(ferocityCount + 1)
        if (ferocityCount >= 3) {
            setFerocityActive(false)
            setShowSkilOrcFerocityImg(false)
        }
        } 
        else if (dwarfHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 40);
            }, 100);   
        }
        else if (dwarfHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setDwarfHealth(dwarfHealth - damageMultiplier * 40);
            setTimeout(() => {
                setOrcHealth(orcHealth - 40);
            }, 100);
        }

        if (dwarfHealth < 800 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }

        if (dwarfHealth <= 1200 && dwarfHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true)
        } 

        if (dwarfHealth <= 1200 && dwarfHealth >= 1030 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(true)
            setFrozenGroundActive(true)
        }
        else if (dwarfHealth <= 1030 && dwarfHealth >= 30 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(false)   
            setFrozenGroundActive(false) 
        }

        if (dwarfHealth <= 1600 && dwarfHealth >= 1440 && damageMultiplier !== null) {
            setShowSkilBearHugImg(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 30)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilBearHugImg(false)
            }, 5000);
        }
      
        if (dwarfHealth <= 2000 && dwarfHealth >= 1840 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 70)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 1840 && dwarfHealth >= 840 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        }

        if (dwarfHealth <= 2000 && dwarfHealth >= 1840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (dwarfHealth <= 2400 && dwarfHealth >= 2230 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(true)
            setFrozenGroundActive(true)
        } 
        else if (dwarfHealth <= 2230 && dwarfHealth >= 1230 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        } 

        if (dwarfHealth <= 3000 && dwarfHealth >= 2840 && damageMultiplier !== null) {
            setShowSkilBearHugImg(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 30)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilBearHugImg(false)
            }, 5000);
        }
       
        if (dwarfHealth <= 3600 && dwarfHealth >= 3440 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 100)
            }, 100)
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 3440 && dwarfHealth >= 2440 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        } 
        if (dwarfHealth <= 3600 && dwarfHealth >= 3440 && damageMultiplier !== null) {
            setShowMessage(true)
        }  
        if (dwarfHealth < 10){
            setShowWinOcrs123LvlMessage(true)
        }
        if (orcHealth < 10){
            setShowLoseOrcsMessage(true)
        }   
    };

    useEffect(() => {
        if (showMessage) {
            const timeoutId = setTimeout(() => {
                setShowMessage(false)
            }, 2000);
            return () => clearTimeout(timeoutId)
        }
    }, [showMessage])

    useEffect(() => {
        if (showMessage2) {
            const timeoutId = setTimeout(() => {
                setShowMessage2(false)
            }, 2000)
            return () => clearTimeout(timeoutId)
        }
    }, [showMessage2])
   
    useEffect(() => {
        if (showMessage3) {
            const timeoutId = setTimeout(() => {
                setShowMessage3(false)
            }, 2000)
            return () => clearTimeout(timeoutId)
        }
    }, [showMessage3])

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonsOrcsBattlefield}><HomeButton/><p>Поле боя</p><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="4000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl3} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>И это всё?</p></div>}
                {showMessage2 && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Мы вас истребим!</p></div>}
                {showMessage3 && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Ничтожества!</p></div>}
                {showLoseOcrsMessage && <ModalOrcsLose/>}
                {showWinOcrs123LvlMessage && <ModalOrcsWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="4000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl3}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilOrcPoultice}>
                    {showSkilOrcPoulticeImg && <button onClick={handlePoultice} title="Лечебный гриб"></button>}
                </div>
                <div className={classes.blockSkilFetters}>
                    {showSkilFettersImg && <button onClick={handleFetters} title="Охотничьи путы"></button>}
                </div>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBiteImg && <button onClick={handleContagiousBite} title="Заразный укус"></button>} 
                </div>
                <div className={classes.blockSkilOrcFerocity}>
                    {showSkilOrcFerocityImg && <button onClick={handleOrcFerocity} disabled={orcFerocity === -1 || ferocityActive} title="Свирепость орка"></button>} 
                </div>
            </div>

            <div className={classes.encyclopedia}>
                <ModalRules/>
                <p>Навыки</p>
            </div>

            <div className={classes.flexSkilsDwarves}>
                <div className={classes.blockSkilAngryDwarf}>
                    {showSkilAngryDwarfImg && <button title="Гнев гнома"></button>}
                </div>
                <div className={classes.blockSkilFrozenGround}>
                    {showSkilFrozenGroundImg && <button title="Мёрзлая земля"></button>}
                </div>
                <div className={classes.blockSkilBearHug}>
                    {showSkilBearHugImg && <button title="Объятия севера"></button>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x <p>Множитель урона</p>
            </div>
        </div>
    );
};