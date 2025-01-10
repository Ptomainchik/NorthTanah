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
    const [orcPoulticeImg, setOrcPoulticeImg] = useState(true);
    const [contagiousBiteImg, setContagiousBiteImg] = useState(true);
    const [fettersImg, setFettersImg] = useState(true);
    const [orcFerocityImg, setOrcFerocityImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showLoseOcrsMessage, setShowLoseOrcsMessage] = useState(false);
    const [showWinOcrs123LvlMessage, setShowWinOcrs123LvlMessage] = useState(false);
    const [showSkilsAngryDwarf, setShowSkilsAngryDwarf] = useState(false);
    const [showSkilsFrozenGround, setShowSkilsFrozenGround] = useState(false);
    const [showBearHug, setShowBearHug] = useState(false);
    const [ferocityActive, setFerocityActive] = useState(false);
    const [ferocityCount, setFerocityCount] = useState(0);

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice( -1)
            setOrcHealth(orcHealth + 120)
            setOrcPoulticeImg(false)
            return
        }
    }

    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1)
            setDwarfHealth(dwarfHealth - 100)
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
            setDwarfHealth(prevHealth => prevHealth - 40)
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
                setDwarfHealth(dwarfHealth - damageMultiplier * 80);
                setFerocityCount(ferocityCount + 1)
            if (ferocityCount >= 3) {
                    setFerocityActive(false)
                    setOrcFerocityImg(false)
                }
            } 
            else {
                setDwarfHealth(dwarfHealth - damageMultiplier * 40)
            }
            setTimeout(() => {
                setOrcHealth(orcHealth - 40)
            }, 100);
        }

        if (dwarfHealth < 800 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100) 
            setShowSkilsAngryDwarf(true)
        }

        if (dwarfHealth <= 1200 && dwarfHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true)
        } 

        if (dwarfHealth <= 1200 && dwarfHealth >= 1120 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth + 10)
            }, 100) 
            setShowSkilsFrozenGround(true)
        }
        else if (dwarfHealth <= 1120 && dwarfHealth >= 700 && damageMultiplier !== null) {
            setShowSkilsFrozenGround(false)    
        }

        if (dwarfHealth <= 1600 && dwarfHealth >= 1440 && damageMultiplier !== null) {
            setShowBearHug(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 30)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowBearHug(false)
            }, 5000);
        }
      
        if (dwarfHealth <= 2000 && dwarfHealth >= 1840 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 70)
            }, 100) 
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth <= 1840 && dwarfHealth >= 1680 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        }

        if (dwarfHealth <= 2000 && dwarfHealth >= 1840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (dwarfHealth <= 2400 && dwarfHealth >= 2320 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth + 10)
            }, 100)
            setShowSkilsFrozenGround(true)
        } 
        else if (dwarfHealth <= 2320 && dwarfHealth >= 2000 && damageMultiplier !== null) {
            setShowSkilsFrozenGround(false)
        } 

        if (dwarfHealth <= 3000 && dwarfHealth >= 2840 && damageMultiplier !== null) {
            setShowBearHug(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 30)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowBearHug(false)
            }, 5000);
        }
       
        if (dwarfHealth <= 3600 && dwarfHealth >= 3440 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 100)
            }, 100)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth <= 3440 && dwarfHealth >= 3280 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
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
            <div className={classes.buttonsBattlefields} style={{backgroundColor: 'rgb(4, 27, 1)', border: "solid rgb(168, 165, 155) 2px"}}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="4000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl3} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageDwarves}><span>И это всё?</span></div>}
                {showMessage2 && <div className={classes.textMessageDwarves}><span>Мы вас истребим!</span></div>}
                {showMessage3 && <div className={classes.textMessageDwarves}><span>Ничтожества!</span></div>}
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
                    {showSkilsFrozenGround && <button title="Мёрзлая земля - даёт неуязвимость к обычным атакам."></button>}
                    {showSkilsFrozenGround && <p>Мёрзлая земля</p>}
                </div>
                <div className={classes.blockSkilBearHug}>
                    {showBearHug && <button title="Медвежьи объятия - наносит слабый урон противнику в течение некоторого времени."></button>}
                    {showBearHug && <p>Медвежьи объятия</p>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};