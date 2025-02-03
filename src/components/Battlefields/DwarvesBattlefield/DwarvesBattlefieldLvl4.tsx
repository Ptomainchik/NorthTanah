import { useEffect, useState } from "react";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { RestartButton } from "../../Button/RestartButton/RestartButton";
import { ModalRules } from "../OverallBattlefield/ModalRules";
import { ModalDwarvesLose } from "./ModalsDwarves/ModalDwarvesLose";
import { ModalDwarvesVictory } from "./ModalsDwarves/ModalDwarvesVictory";

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const DwarvesBattlefieldLvl4 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(8000);
    const [orcHealth, setOrcHealth] = useState(8000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [dwarvesPoultice, setDwarvesPoultice] = useState(1);
    const [angryDwarf, setAngryDwarf] = useState(1);
    const [frozenGround, setFrozenGround] = useState(1);
    const [frozenGroundCount, setFrozenGroundCount] = useState(0);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [bearHug, setBearHug] = useState(1);
    const [crossbowman, setCrossbowman] = useState(3);
    const [showSkilDwarvesPoulticeImg, setShowSkilDwarvesPoulticeImg] = useState(true);
    const [showSkilAndryDwarfImg, setShowSkilAngryDwarfImg] = useState(true);
    const [showSkilFrozenGroundImg, setShowSkilFrozenGroundImg] = useState(true)
    const [showSkilBearHugImg, setShowSkilBearHugImg] = useState(true)
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showMessageCrossbowman, setShowMessageCrossbowman] = useState(true);
    const [showMessageCrossbowmanNoBolts, setShowMessageCrossbowmanNoBolts] = useState(false);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(false);
    const [showSkilFettersImg, setShowSkilFettersImg] = useState(false);
    const [showSkilOrcFerocityImg, setShowSkilOrcFerocityImg] = useState(false);
    const [showOrcsSpear,setShowOrcsSpear] = useState(false)
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
            setOrcHealth(orcHealth - 170);
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

    const handleBearHug = () => {
        if (bearHug === -1) { 
        } else {
            setBearHug( -1)
        const intervalId = setInterval(() => {
            setOrcHealth(prevHealth => prevHealth - 80)
        }, 1000)
        setTimeout(() => {
            clearInterval(intervalId)
        }, 5000)
        setShowSkilBearHugImg(false)
    }
    }

    const handleCrossbowman = () => {
        if (crossbowman > 0)  {
            setShowOrcsSpear(true)
            setCrossbowman(crossbowman - 1)
            setOrcHealth(orcHealth - 100)
            const intervalId1 = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 20)
            }, 1000)
            setTimeout(() => {
                clearInterval(intervalId1)
            }, 3000)
            setDwarfHealth(dwarfHealth - 100)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 10)
            }, 1000)
            setTimeout(() => {
                clearInterval(intervalId)
                setShowOrcsSpear(false)
            }, 8000)
        }
        if (crossbowman === 0) {
            setShowMessageCrossbowmanNoBolts(true)
            setTimeout(() => {
                setShowMessageCrossbowmanNoBolts(false)
            }, 3000)
        }
    }

    let buttonClass 
    if (crossbowman === 3) {
        buttonClass = classes.buttonDwarfLvlUnic3
    }
    else if (crossbowman === 2) {
        buttonClass = classes.buttonDwarfLvlUnic2
    }
    else if (crossbowman === 1) {
        buttonClass = classes.buttonDwarfLvlUnic1
    } 
    else if (crossbowman === 0) {
        buttonClass = classes.buttonDwarfLvlUnic           
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleDwarfAttack = () => {
        multiplier();
        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setOrcHealth(orcHealth - damageMultiplier * 80)
            setFrozenGroundCount(frozenGroundCount + 1)
        }
        if (frozenGroundCount >= 2) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        }

        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setOrcHealth(orcHealth - damageMultiplier * 80)
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 80)
            }, 100);
        }

        if (orcHealth < 1200 && damageMultiplier !== null && frozenGroundActive === true) { 
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth < 1200 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 160)
            }, 100) 
            setShowSkilContagiousBiteImg(true)
        }

        if (orcHealth <= 1200 && orcHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true);
        }    

        if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth + 10)
                setShowSkilOrcFerocityImg(true)
            },100)
        }
        else if (orcHealth <= 1840 && orcHealth >= 1000 && damageMultiplier !== null) {
            setShowSkilOrcFerocityImg(false)    
        }
        
        if (orcHealth <= 3000 && orcHealth >= 2680 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFettersImg(true)
        }
        else if (orcHealth <= 3000 && orcHealth >= 2680 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFettersImg(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFettersImg(false)
            }, 5000);
        }
        
        if (orcHealth <= 4000 && orcHealth >= 3600 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 4000 && orcHealth >= 3600 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 80)
            }, 100) 
            
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 3600 && orcHealth >= 3280 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
        } 

        if (orcHealth <= 4000 && orcHealth >= 3840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (orcHealth <= 5000 && orcHealth >= 4840 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth + 10)
                setShowSkilOrcFerocityImg(true)
            },100)
        }
        else if (orcHealth <= 4840 && orcHealth >= 4000 && damageMultiplier !== null) {
            setShowSkilOrcFerocityImg(false)    
        }

        if (orcHealth <= 6000 && orcHealth >= 5680 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFettersImg(true)
        }
        if (orcHealth <= 6000 && orcHealth >= 5680 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFettersImg(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFettersImg(false)
            }, 5000);
        }
       
        if (orcHealth <= 7000 && orcHealth >= 6600 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBiteImg(true)
        }
        if (orcHealth <= 7000 && orcHealth >= 6600 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 100)
            }, 100) 
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 6600 && orcHealth >= 6280 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
        } 
        if (orcHealth <= 7000 && orcHealth >= 6840 && damageMultiplier !== null) {
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

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowMessageCrossbowman(false)
        }, 3000);

        return () => clearTimeout(timeoutID)
    }, [showMessageCrossbowman])

    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonsDwarvesBattlefield}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl4}>
                    <progress className={classes.healthIndicatorDwarf} max="8000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl4}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Глупая мелочь.</p></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Недомерки!</p></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Север падёт!</p></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesVictory/>}
                {showMessageCrossbowman && <div className={classes.textMessageCrossbowman}><h2>Арбалетчик:</h2><p>Арбалетчик прибыл!</p></div>}
                {showMessageCrossbowmanNoBolts && <div className={classes.textMessageCrossbowman}><h2>Арбалетчик:</h2><p>Закончились болты.</p></div>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl4}>
                        <progress className={classes.healthIndicatorOrc} max="8000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl4} onClick={handleDwarfAttack}></button>
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
                <div className={classes.blockSkilOrcsSpear}>
                    {showOrcsSpear && <button title="Орочьи колы"></button>}
                </div>
            </div>

            <div className={classes.dwarfLvlUnic}>
                <button className={buttonClass} onClick={handleCrossbowman} title="Арбалетчик"></button>
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
