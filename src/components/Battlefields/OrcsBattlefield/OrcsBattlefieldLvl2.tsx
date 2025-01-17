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

export const OrcsBattlefieldLvl2 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(2000);
    const [orcHealth, setOrcHealth] = useState(2000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [orcPoultice, setOrcPoultice] = useState(1);
    const [contagiousBite, setContagiousBite] = useState(1);
    const [fetters, setFetters] = useState(1);
    const [showSkilOrcPoulticeImg, setShowSkilOrcPoulticeImg] = useState(true);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(true);
    const [showSkilFettersImg, setShowSkilFettersImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showLoseOcrsMessage, setShowLoseOrcsMessage] = useState(false);
    const [showSkilAngryDwarfImg, setShowSkilAngryDwarfImg] = useState(false);
    const [showSkilFrozenGroundImg, setShowSkilFrozenGroundImg] = useState(false);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [showWinOcrs123LvlMessage, setShowWinOcrs123LvlMessage] = useState(false);

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice( -1);
            setOrcHealth(orcHealth + 100);
            setShowSkilOrcPoulticeImg(false);
            return
        }
    };

    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1);
            setDwarfHealth(dwarfHealth - 100);
            setShowSkilContagiousBiteImg(false)
            return
        }
    };

    const handleFetters = () => {
        if (fetters === -1) { 
        } else {
            setFetters( -1);
        const intervalId = setInterval(() => {
            setDwarfHealth(prevHealth => prevHealth - 20);
        }, 1000);
        setTimeout(() => {
            clearInterval(intervalId);
        }, 5000);
        setShowSkilFettersImg(false)
    }
    };

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleOrcAttack = () => {
        multiplier();
        if (dwarfHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 20);
            }, 100);   
        }
        else if (dwarfHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setDwarfHealth(dwarfHealth - damageMultiplier * 20);
            setTimeout(() => {
                setOrcHealth(orcHealth - 20);
            }, 100);
        }
        if (dwarfHealth < 400 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 40)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }
        if (dwarfHealth <= 400 && dwarfHealth >= 360 && damageMultiplier !== null) {
            setShowMessage3(true);
        } 
        if (dwarfHealth <= 800 && dwarfHealth >= 700 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(true)
            setFrozenGroundActive(true)
        }
        else if (dwarfHealth <= 700 && dwarfHealth >= 500 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)    
        }
        if (dwarfHealth <= 1000 && dwarfHealth >= 920 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 70)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 920 && dwarfHealth >= 800 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        }
        if (dwarfHealth <= 1000 && dwarfHealth >= 960 && damageMultiplier !== null) {
            setShowMessage2(true)
        }
        if (dwarfHealth <= 1500 && dwarfHealth >= 1400 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(true)
            setFrozenGroundActive(true)
        } 
        else if (dwarfHealth <= 1400 && dwarfHealth >= 1200 && damageMultiplier !== null) {
            setShowSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        } 
        if (dwarfHealth <= 1800 && dwarfHealth >= 1720 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 100)
            }, 100)
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 1720 && dwarfHealth >= 1600 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        } 
        if (dwarfHealth <= 1800 && dwarfHealth >= 1760 && damageMultiplier !== null) {
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
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonsBattlefields} style={{backgroundColor: 'rgb(4, 27, 1)', border: "solid rgb(168, 165, 155) 2px"}}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="2000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl2} onClick={handleOrcAttack}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageDwarves}><span>Ха-ха! Слабаки.</span></div>}
                {showMessage2 && <div className={classes.textMessageDwarves}><span>Упрямые идиоты!</span></div>}
                {showMessage3 && <div className={classes.textMessageDwarves}><span>Вы за это заплатите!</span></div>}
                {showLoseOcrsMessage && <ModalOrcsLose/>}
                {showWinOcrs123LvlMessage && <ModalOrcsWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="2000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl2}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilOrcPoultice}>
                    {showSkilOrcPoulticeImg && <button onClick={handlePoultice} title="Лечебный гриб - восстанавливает здоровье."></button>}
                    {showSkilOrcPoulticeImg && <p>Лечебный гриб</p>}
                </div>
                <div className={classes.blockSkilFetters}>
                    {showSkilFettersImg && <button onClick={handleFetters} title="Охотничьи путы - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {showSkilFettersImg && <p>Охотничьи путы</p>}
                </div>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBiteImg && <button onClick={handleContagiousBite} title="Заразный укус - наносит средний урон противнику."></button>}
                    {showSkilContagiousBiteImg &&<p>Заразный укус</p>} 
                </div>
            </div>
            <ModalRules/>
            <div className={classes.flexSkilsDwarves}>
                <div className={classes.blockSkilAngryDwarf}>
                    {showSkilAngryDwarfImg && <button title="Гнев гнома - увеличивает урон от обычных атак."></button>}
                    {showSkilAngryDwarfImg && <p>Гнев гнома</p>}
                </div>
                <div className={classes.blockSkilFrozenGround}>
                    {showSkilFrozenGroundImg && <button title="Мёрзлая земля - даёт постоянную неуязвимость к обычным атакам если находится в лесах, иначе даёт её на 3 раунда."></button>}
                    {showSkilFrozenGroundImg && <p>Мёрзлая земля</p>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};