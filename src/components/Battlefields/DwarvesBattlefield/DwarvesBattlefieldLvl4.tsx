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
    const [dwarvesPoulticeImg, setDwarvesPoulticeImg] = useState(true);
    const [skilAndryDwarfImg, setSkilAngryDwarfImg] = useState(true);
    const [skilFrozenGroundImg, setSkilFrozenGroundImg] = useState(true)
    const [skilBearHugImg, setSkilBearHugImg] = useState(true)
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showMessageCrossbowman, setShowMessageCrossbowman] = useState(true);
    const [showMessageCrossbowmanNoBolts, setShowMessageCrossbowmanNoBolts] = useState(false);
    const [showSkilContagiousBite, setShowSkilContagiousBite] = useState(false);
    const [showSkilFetters, setShowSkilFetters] = useState(false);
    const [showSkilOrcFerocity, setShowSkilOrcFerocity] = useState(false);
    const [showOrcsSpear,setShowOrcsSpear] = useState(false)
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
            setOrcHealth(orcHealth - 100);
            setSkilAngryDwarfImg(false);
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
            setOrcHealth(prevHealth => prevHealth - 40)
        }, 1000)
        setTimeout(() => {
            clearInterval(intervalId)
        }, 5000)
        setSkilBearHugImg(false)
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
            setOrcHealth(orcHealth - damageMultiplier * 40)
            setFrozenGroundCount(frozenGroundCount + 1)
        }
        if (frozenGroundCount >= 2) {
            setSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        }

        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setOrcHealth(orcHealth - damageMultiplier * 40)
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 40)
            }, 100);
        }

        if (orcHealth < 800 && damageMultiplier !== null && frozenGroundActive === true) { 
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth < 800 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 100)
            }, 100) 
            setShowSkilContagiousBite(true)
        }

        if (orcHealth <= 1200 && orcHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true);
        }    

        if (orcHealth <= 1400 && orcHealth >= 1320 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth + 10)
                setShowSkilOrcFerocity(true)
            },100)
        }
        else if (orcHealth <= 1320 && orcHealth >= 900 && damageMultiplier !== null) {
            setShowSkilOrcFerocity(false)    
        }
        
        if (orcHealth <= 1600 && orcHealth >= 1440 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFetters(true)
        }
        else if (orcHealth <= 1600 && orcHealth >= 1440 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFetters(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 20)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFetters(false)
            }, 5000);
        }
        
        if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 80)
            }, 100) 
            
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 1840 && orcHealth >= 1680 && damageMultiplier !== null) {
            setShowSkilContagiousBite(false)
        } 

        if (orcHealth <= 2000 && orcHealth >= 1840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (orcHealth <= 2600 && orcHealth >= 2520 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth + 10)
                setShowSkilOrcFerocity(true)
            },100)
        }
        else if (orcHealth <= 2520 && orcHealth >= 2100 && damageMultiplier !== null) {
            setShowSkilOrcFerocity(false)    
        }

        if (orcHealth <= 3000 && orcHealth >= 2840 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFetters(true)
        }
        if (orcHealth <= 3000 && orcHealth >= 2840 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFetters(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 20)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFetters(false)
            }, 5000);
        }
       
        if (orcHealth <= 3600 && orcHealth >= 3440 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBite(true)
        }
        if (orcHealth <= 3600 && orcHealth >= 3440 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 60)
            }, 100) 
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 3440 && orcHealth >= 3280 && damageMultiplier !== null) {
            setShowSkilContagiousBite(false)
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

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowMessageCrossbowman(false)
        }, 7000);

        return () => clearTimeout(timeoutID)
    }, [showMessageCrossbowman])

    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonsBattlefields} style={{backgroundColor: "rgb(30, 46, 70)", border: "solid rgb(247,189,0) 2px"}}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl4}>
                    <progress className={classes.healthIndicatorDwarf} max="8000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl4}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageOrcs}><span>Жалкие орки.</span></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><span>Это было больно.</span></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><span>Мы вас уничтожим!</span></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesVictory/>}
                {showMessageCrossbowman && <div className={classes.textMessageCrossbowman}><span>Я пришёл на подмогу!</span></div>}
                {showMessageCrossbowmanNoBolts && <div className={classes.textMessageCrossbowman}><span>Закончились болты!</span></div>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl4}>
                        <progress className={classes.healthIndicatorOrc} max="8000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl4} onClick={handleDwarfAttack}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBite && <button title="Заразный укус - наносит средний урон противнику."></button>}
                    {showSkilContagiousBite && <p>Заразный укус</p>} 
                </div>
                <div className={classes.blockSkilFetters}>
                    {showSkilFetters && <button title="Охотничьи путы - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {showSkilFetters && <p>Охотничьи путы</p>}
                </div>
                <div className={classes.blockSkilOrcFerocity}>
                    {showSkilOrcFerocity && <button title="Свирепость орка - даёт постоянную неуязвимость к обычным атакам если находится в снегах, иначе увеличивает урон от обычных атак на три раунда."></button>}
                    {showSkilOrcFerocity  && <p>Свирепость орка</p>} 
                </div>
                <div className={classes.blockSkilOrcsSpear}>
                    {showOrcsSpear && <button title="Орочьи колы - наносят слабый урон противнику, а затем малый урон в течение некоторого времени."></button>}
                    {showOrcsSpear && <p>Орочьи колы</p>}
                </div>
            </div>

            <button className={buttonClass} onClick={handleCrossbowman} title="Арбалетчик - наносит слабый урон противнику, а затем малый урон в течение некоторого времени."></button>
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
                <div className={classes.blockSkilFrozenGround}>
                    {skilFrozenGroundImg && <button onClick={handleFrozenGround} disabled={frozenGround === -1 || frozenGroundActive} title="Мёрзлая земля - даёт постоянную неуязвимость к обычным атакам если находится в снегах, иначе даёт её на 3 раунда."></button>}
                    {skilFrozenGroundImg && <p>Мёрзлая земля</p>}
                </div>
                <div className={classes.blockSkilBearHug}>
                    {skilBearHugImg && <button onClick={handleBearHug} title="Объятия севера - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {skilBearHugImg && <p>Объятия севера</p>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};
