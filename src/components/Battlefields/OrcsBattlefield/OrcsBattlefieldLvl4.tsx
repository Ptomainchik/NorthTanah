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
    const [orcPoulticeImg, setOrcPoulticeImg] = useState(true);
    const [contagiousBiteImg, setContagiousBiteImg] = useState(true);
    const [fettersImg, setFettersImg] = useState(true);
    const [orcFerocityImg, setOrcFerocityImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showLoseOcrsMessage, setShowLoseOrcsMessage] = useState(false);
    const [showOrcsVictoryMessage, setShowOrcsVictoryMessage] = useState(false);
    const [showMessageSpearThrower, setShowMessageSpearThrower] = useState(true);
    const [showMessageSpearThrowerNoLog, setShowMessageSpearThrowerNoLog] = useState(false);
    const [showSkilsAngryDwarf, setShowSkilsAngryDwarf] = useState(false);
    const [showSkilsFrozenGround, setShowSkilsFrozenGround] = useState(false);
    const [showBearHug, setShowBearHug] = useState(false);
    const [showDwarvesBolts, setShowDwarvesBolts] = useState(false);
    const [ferocityActive, setFerocityActive] = useState(false);
    const [ferocityCount, setFerocityCount] = useState(0);
    const [spearThrower, setSpearThrower] = useState(3)

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice(-1)
            setOrcHealth(orcHealth + 100)
            setOrcPoulticeImg(false)
            return
        }
    }
    
    const handleSpearThrower = () => {
        if (spearThrower > 0)  {
            setShowDwarvesBolts(true)
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
                setShowDwarvesBolts(false)
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
            setContagiousBiteImg(false)
            return
        }
    }

    const handleOrcFerocity = () => {
        if (orcFerocity === -1 || ferocityActive) {
            return
        } else {
            setOrcFerocity(-1)
            setFerocityActive(true)
            setFerocityCount(0);
        }
    }

    const handleFetters = () => {
        if (fetters === -1) { 
        } else {
            setFetters( -1)
        const intervalId = setInterval(() => {
            setDwarfHealth(prevHealth => prevHealth - 80)
        }, 1000)
        setTimeout(() => {
            clearInterval(intervalId)
        }, 5000)
        setFettersImg(false)
    }
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    }
    
    const handleOrcAttack = () => {
        multiplier()
        if (dwarfHealth > 0 && damageMultiplier !== null) {
            if (ferocityActive) {
                setDwarfHealth(dwarfHealth - damageMultiplier * 160);
                setFerocityCount(ferocityCount + 1)
            if (ferocityCount >= 3) {
                    setFerocityActive(false)
                    setOrcFerocityImg(false)
                }
            } 
            else {
                setDwarfHealth(dwarfHealth - damageMultiplier * 80)
            }
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100);
        }

        if (dwarfHealth < 1200 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 160)
            }, 100) 
            setShowSkilsAngryDwarf(true)
        }

        if (dwarfHealth <= 1200 && dwarfHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true)
        } 

        if (dwarfHealth <= 2000 && dwarfHealth >= 1840 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth + 10)
            }, 100) 
            setShowSkilsFrozenGround(true)
        }
        else if (dwarfHealth <= 1840 && dwarfHealth >= 1000 && damageMultiplier !== null) {
            setShowSkilsFrozenGround(false)    
        }

        if (dwarfHealth <= 3000 && dwarfHealth >= 2680 && damageMultiplier !== null) {
            setShowBearHug(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowBearHug(false)
            }, 5000);
        }

        if (dwarfHealth <= 4000 && dwarfHealth >= 3600 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100) 
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth <= 3600 && dwarfHealth >= 3280 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        }

        if (dwarfHealth <= 4000 && dwarfHealth >= 3840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (dwarfHealth <= 5000 && dwarfHealth >= 4840 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth + 10)
            }, 100)
            setShowSkilsFrozenGround(true)
        } 
        else if (dwarfHealth <= 4840 && dwarfHealth >= 4000 && damageMultiplier !== null) {
            setShowSkilsFrozenGround(false)
        } 

        if (dwarfHealth <= 6000 && dwarfHealth >= 5680 && damageMultiplier !== null) {
            setShowBearHug(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowBearHug(false)
            }, 5000);
        }
    
        if (dwarfHealth <= 7000 && dwarfHealth >= 6600 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 100)
            }, 100)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth <= 6600 && dwarfHealth >= 6280 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
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
        }, 7000);

        return () => clearTimeout(timeoutID)
    }, [showMessageSpearThrower])

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonsBattlefields} style={{backgroundColor: 'rgb(4, 27, 1)', border: "solid rgb(168, 165, 155) 2px"}}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl4}>
                    <progress className={classes.healthIndicatorDwarf} max="8000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl4} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageDwarves}><span>Зеленокожие тупицы.</span></div>}
                {showMessage2 && <div className={classes.textMessageDwarves}><span>Мерзкие твари!</span></div>}
                {showMessage3 && <div className={classes.textMessageDwarves}><span>Будьте прокляты!</span></div>}
                {showLoseOcrsMessage && <ModalOrcsLose/>}
                {showOrcsVictoryMessage && <ModalOrcsVictory/>}
                {showMessageSpearThrower && <div className={classes.textMessageSpearThrower}><span>Я пришёл на подмогу!</span></div>}
                {showMessageSpearThrowerNoLog && <div className={classes.textMessageSpearThrower}><span>Закончились колы!</span></div>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl4}>
                        <progress className={classes.healthIndicatorOrc} max="8000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl4}></button>
                    </div>
                </div>
            </div>
           
            <button className={buttonClass} onClick={handleSpearThrower} title="Метатель - наносит слабый урон противнику, а затем малый урон в течение некоторого времени." ></button>
            <ModalRules/>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilOrcPoultice}>
                    {orcPoulticeImg && <button onClick={handlePoultice} title="Лечебный гриб - восстанавливает здоровье."></button>}
                    {orcPoulticeImg && <p>Лечебный гриб</p>}
                </div>
                <div className={classes.blockSkilFetters}>
                    {fettersImg && <button onClick={handleFetters} title="Охотничьи путы - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {fettersImg && <p>Охотничьи путы</p>}
                </div>
                <div className={classes.blockSkilContagiousBite}>
                    {contagiousBiteImg && <button onClick={handleContagiousBite} title="Заразный укус - наносит средний урон противнику."></button>}
                    {contagiousBiteImg && <p>Заразный укус</p>} 
                </div>
                <div className={classes.blockSkilOrcFerocity}>
                    {orcFerocityImg && <button onClick={handleOrcFerocity} disabled={orcFerocity === -1 || ferocityActive} title="Свирепость орка - увеличивает урон от обычных атак на три раунда."></button>}
                    {orcFerocityImg && <p>Свирепость орка</p>} 
                </div>
            </div>
            <ModalRules/>
            <div className={classes.flexSkilsDwarves}>
                <div className={classes.blockSkilAngryDwarf}>
                    {showSkilsAngryDwarf && <button title="Гнев гнома - увеличивает урон от обычных атак."></button>}
                    {showSkilsAngryDwarf && <p>Гнев гнома</p>}
                </div>
                <div className={classes.blockSkilFrozenGround}>
                    {showSkilsFrozenGround && <button title="Мёрзлая земля - даёт постоянную неуязвимость к обычным атакам если находится в снегах, иначе даёт её на 3 раунда."></button>}
                    {showSkilsFrozenGround && <p>Мёрзлая земля</p>}
                </div>
                <div className={classes.blockSkilBearHug}>
                    {showBearHug && <button title="Объятия севера - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {showBearHug && <p>Объятия севера</p>}
                </div>
                <div className={classes.blockSkilDwarvesBolts}>
                    {showDwarvesBolts && <button title="Арбалетные болты - наносят слабый урон противнику, а затем малый урон в течение некоторого времени."></button>}
                    {showDwarvesBolts && <p>Арбалетные болты</p>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};