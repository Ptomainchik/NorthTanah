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

export const DwarvesBattlefieldLvl3 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(4000);
    const [orcHealth, setOrcHealth] = useState(4000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [dwarvesPoultice, setDwarvesPoultice] = useState(1);
    const [angryDwarf, setAngryDwarf] = useState(1);
    const [frozenGround, setFrozenGround] = useState(1);
    const [frozenGroundCount, setFrozenGroundCount] = useState(0);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [bearHug, setBearHug] = useState(1);
    const [showSkilDwarvesPoulticeImg, setShowSkilDwarvesPoulticeImg] = useState(true);
    const [showSkilAndryDwarfImg, setShowSkilAngryDwarfImg] = useState(true);
    const [showSkilFrozenGroundImg, setShowSkilFrozenGroundImg] = useState(true)
    const [showSkilBearHugImg, setShowSkilBearHugImg] = useState(true)
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(false);
    const [showSkilFettersImg, setShowSkilFettersImg] = useState(false);
    const [ferocityActive, setFerocityActive] = useState(false);
    const [showSkilOrcFerocityImg, setShowSkilOrcFerocityImg] = useState(false);
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
            setOrcHealth(orcHealth - 110);
            setShowSkilAngryDwarfImg(false);
            setFerocityActive(false)
            setShowSkilOrcFerocityImg(false)
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

    const handleBearHug = () => {
        if (bearHug === -1) { 
        } else {
            setBearHug( -1)
            setFerocityActive(false)
            setShowSkilOrcFerocityImg(false)
        const intervalId = setInterval(() => {
            setOrcHealth(prevHealth => prevHealth - 40)
        }, 1000)
        setTimeout(() => {
            clearInterval(intervalId)
        }, 5000)
        setShowSkilBearHugImg(false)
    }
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleDwarfAttack = () => {
        multiplier();
        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setOrcHealth(orcHealth - damageMultiplier * 40)
            setFrozenGroundCount(frozenGroundCount + 1)
        }
        else if (orcHealth > 0 && damageMultiplier !== null && ferocityActive === true) {
            setDwarfHealth(dwarfHealth - 40)
        }

        if (frozenGroundCount >= 2) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        }

        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === false && ferocityActive === false) {
            setOrcHealth(orcHealth - damageMultiplier * 40)
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 40)
            }, 100);
        }

        if (orcHealth < 800 && damageMultiplier !== null && frozenGroundActive === true) { 
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth < 800 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 100)
            }, 100) 
            setShowSkilContagiousBiteImg(true)
        }

        if (orcHealth <= 1200 && orcHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true);
        }    

        if (orcHealth <= 1400 && orcHealth >= 1230 && damageMultiplier !== null) {
            setTimeout(() => {
                setFerocityActive(true)
                setShowSkilOrcFerocityImg(true)
            },100)
        }
        else if (orcHealth <= 1230 && orcHealth >= 230 && damageMultiplier !== null) {
            setShowSkilOrcFerocityImg(false)
            setFerocityActive(false)
        } 
        
        if (orcHealth <= 1600 && orcHealth >= 1440 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFettersImg(true)
        }
        else if (orcHealth <= 1600 && orcHealth >= 1440 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFettersImg(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 20)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFettersImg(false)
            }, 5000);
        }
        
        if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 80)
            }, 100) 
            
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 1840 && orcHealth >= 840 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
        } 

        if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (orcHealth <= 2600 && orcHealth >= 2430 && damageMultiplier !== null) {
            setTimeout(() => {
                setFerocityActive(true)
                setShowSkilOrcFerocityImg(true)
            },100)
        }
        else if (orcHealth <= 2430 && orcHealth >= 1430 && damageMultiplier !== null) {
            setShowSkilOrcFerocityImg(false)
            setFerocityActive(false)
        } 

        if (orcHealth <= 3000 && orcHealth >= 2840 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFettersImg(true)
        }
        if (orcHealth <= 3000 && orcHealth >= 2840 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFettersImg(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 20)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFettersImg(false)
            }, 5000);
        }
       
        if (orcHealth <= 3600 && orcHealth >= 3440 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        if (orcHealth <= 3600 && orcHealth >= 3440 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 60)
            }, 100) 
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 3440 && orcHealth >= 2440 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
        } 
        if (orcHealth <= 3600 && orcHealth >= 3440 && damageMultiplier !== null) {
            setShowMessage(true)
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
            <div className={classes.buttonsDwarvesBattlefield}><HomeButton/><p>Поле боя</p><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="4000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl3}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Бегите!</p></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Горное стадо!</p></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Мы вас раздавим!</p></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="4000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl3} onClick={handleDwarfAttack}></button>
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
                <div className={classes.blockSkilOrcFerocity}>
                    {showSkilOrcFerocityImg && <button title="Свирепость орка"></button>}
                </div>
            </div>

            <div className={classes.encyclopedia}>
                <ModalRules/>
                <p>Навыки</p>
            </div>

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
                <div className={classes.blockSkilBearHug}>
                    {showSkilBearHugImg && <button onClick={handleBearHug} title="Объятия севера"></button>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x <p>Множитель урона</p>
            </div>
        </div>
    );
};
