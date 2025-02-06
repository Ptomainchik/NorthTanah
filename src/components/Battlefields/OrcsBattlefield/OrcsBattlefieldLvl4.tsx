import { useEffect, useState } from "react";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { RestartButton } from "../../Button/RestartButton/RestartButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { ModalRules } from "../OverallBattlefield/ModalRules";
import { ModalOrcsLose } from "./ModalsOrcs/ModalOrcsLose";
import { ModalOrcsVictory } from "./ModalsOrcs/ModalOrcsVictory";

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLvl4 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(8000);
    const [orcHealth, setOrcHealth] = useState(8000);
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
    const [showOrcsVictoryMessage, setShowOrcsVictoryMessage] = useState(false);
    const [showMessageSpearThrower, setShowMessageSpearThrower] = useState(true);
    const [showMessageSpearThrowerNoLog, setShowMessageSpearThrowerNoLog] = useState(false);
    const [showSkilAngryDwarfImg, setShowSkilAngryDwarfImg] = useState(false);
    const [showSkilFrozenGroundImg, setShowSkilFrozenGroundImg] = useState(false);
    const [showSkilBearHugImg, setShowSkilBearHugImg] = useState(false);
    const [showSkilDwarvesBoltsImg, setShowSkilDwarvesBoltsImg] = useState(false);
    const [ferocityActive, setFerocityActive] = useState(false);
    const [ferocityCount, setFerocityCount] = useState(0);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [spearThrower, setSpearThrower] = useState(3)

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice(-1)
            setOrcHealth(orcHealth + 100)
            setShowSkilOrcPoulticeImg(false)
            return
        }
    }
    
    const handleSpearThrower = () => {
        if (spearThrower > 0)  {
            setShowSkilDwarvesBoltsImg(true)
            setSpearThrower(spearThrower - 1)
            setDwarfHealth(dwarfHealth - 100)
            const intervalId1 = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 20)
            }, 1000)
            setTimeout(() => {
                clearInterval(intervalId1)
            }, 3000)
            setOrcHealth(orcHealth - 100)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 10)
            }, 1000)
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilDwarvesBoltsImg(false)
            }, 8000)
        }
        if (spearThrower === 0) {
            setShowMessageSpearThrowerNoLog(true)
            setTimeout(() => {
                setShowMessageSpearThrowerNoLog(false)
            }, 3000)
        }
    }

    let buttonClass 
        if (spearThrower === 3) {
            buttonClass = classes.buttonOrcLvlUnic3
        }
        else if (spearThrower === 2) {
            buttonClass = classes.buttonOrcLvlUnic2
        }
        else if (spearThrower === 1) {
            buttonClass = classes.buttonOrcLvlUnic1
        } 
        else if (spearThrower === 0) {
            buttonClass = classes.buttonOrcLvlUnic           
        }
    
    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1)
            setDwarfHealth(dwarfHealth - 160)
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
            setDwarfHealth(prevHealth => prevHealth - 80)
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
            setDwarfHealth(dwarfHealth - damageMultiplier * 160);
            setFerocityCount(ferocityCount + 1)
        if (ferocityCount >= 3) {
            setFerocityActive(false)
            setShowSkilOrcFerocityImg(false)
        }
        } 
        else if (dwarfHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 80);
            }, 100);   
        }
        else if (dwarfHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setDwarfHealth(dwarfHealth - damageMultiplier * 80);
            setTimeout(() => {
                setOrcHealth(orcHealth - 80);
            }, 100);
        }

        if (dwarfHealth < 1200 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 160)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }

        if (dwarfHealth <= 1200 && dwarfHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true)
        } 

        if (dwarfHealth <= 2000 && dwarfHealth >= 1670 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(true)
            setFrozenGroundActive(true)
        }
        else if (dwarfHealth <= 1670 && dwarfHealth >= 70 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(false)   
            setFrozenGroundActive(false) 
        }

        if (dwarfHealth <= 3000 && dwarfHealth >= 2680 && damageMultiplier !== null) {
            setShowSkilBearHugImg(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilBearHugImg(false)
            }, 5000);
        }

        if (dwarfHealth <= 4000 && dwarfHealth >= 3600 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 3600 && dwarfHealth >= 2000 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        }

        if (dwarfHealth <= 4000 && dwarfHealth >= 3840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (dwarfHealth <= 5000 && dwarfHealth >= 4670 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(true)
            setFrozenGroundActive(true)
        } 
        else if (dwarfHealth <= 4670 && dwarfHealth >= 3070 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        } 

        if (dwarfHealth <= 6000 && dwarfHealth >= 5680 && damageMultiplier !== null) {
            setShowSkilBearHugImg(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilBearHugImg(false)
            }, 5000);
        }
    
        if (dwarfHealth <= 7000 && dwarfHealth >= 6600 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 100)
            }, 100)
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 6600 && dwarfHealth >= 5000 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        } 
        if (dwarfHealth <= 7000 && dwarfHealth >= 6840 && damageMultiplier !== null) {
            setShowMessage(true)
        }  

        if (dwarfHealth > 0 && damageMultiplier !== null) {
          
        }
        if (dwarfHealth < 10){
            setShowOrcsVictoryMessage(true)
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

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowMessageSpearThrower(false)
        }, 3000);

        return () => clearTimeout(timeoutID)
    }, [showMessageSpearThrower])

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonsOrcsBattlefield}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div>
                <div>
                    <div className={classes.dwarfLvl4}>
                    <progress className={classes.healthIndicatorDwarf} max="8000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl4} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Зеленокожие тупицы.</p></div>}
                {showMessage2 && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Мерзкие твари!</p></div>}
                {showMessage3 && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Будьте прокляты!</p></div>}
                {showLoseOcrsMessage && <ModalOrcsLose/>}
                {showOrcsVictoryMessage && <ModalOrcsVictory/>}
                {showMessageSpearThrower && <div className={classes.textMessageSpearThrower}><h2>Метатель:</h2><p>Я пришёл на подмогу!</p></div>}
                {showMessageSpearThrowerNoLog && <div className={classes.textMessageSpearThrower}><h2>Метатель:</h2><p>Закончились колы!</p></div>}
                <div>
                    <div className={classes.orcLvl4}>
                        <progress className={classes.healthIndicatorOrc} max="8000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl4}></button>
                    </div>
                </div>
            </div>
            
            <div className={classes.orcLvlUnic}>
                <button className={buttonClass} onClick={handleSpearThrower} title="Метатель" ></button>
            </div>
           
            <ModalRules/>
            
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
            <ModalRules/>
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
                <div className={classes.blockSkilDwarvesBolts}>
                    {showSkilDwarvesBoltsImg && <button title="Арбалетные болты"></button>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x <p>Множитель урона</p>
            </div>
        </div>
    );
};