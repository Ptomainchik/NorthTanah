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

export const OrcsBattlefieldLvl1 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(1000);
    const [orcHealth, setOrcHealth] = useState(1000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [orcPoultice, setOrcPoultice] = useState(1);
    const [contagiousBite, setContagiousBite] = useState(1);
    const [showSkilOrcPoulticeImg, setShowSkilOrcPoulticeImg] = useState(true);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(true);
    const [showMessageRules, setShowMessageRules] = useState(true);
    const [showMessageRules2, setShowMessageRules2] = useState(false);
    const [showMessageRules3, setShowMessageRules3] = useState(false);
    const [showMessageRules4, setShowMessageRules4] = useState(false);
    const [showMessageRules5, setShowMessageRules5] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilAngryDwarfImg, setShowSkilAngryDwarfImg] = useState(false);
    const [showLoseOcrsMessage, setShowLoseOrcsMessage] = useState(false);
    const [showWinOcrs123LvlMessage, setShowWinOcrs123LvlMessage] = useState(false);
    const [buttonDisebled, setButtonDisebled] = useState(true);

    const handleCloseMessageRules = () => {
        if (showMessageRules === true) {
            setShowMessageRules(false);
            setShowMessageRules2(true);
        }
    }

    const handleCloseMessageRules2 = () => {
        if (showMessageRules2 === true) {
            setShowMessageRules2(false);
            setShowMessageRules3(true);
        }
    }

    const handleCloseMessageRules3 = () => {
        if (showMessageRules3 === true) {
            setShowMessageRules3(false);
            setShowMessageRules4(true);
        }
    }

    const handleCloseMessageRules4 = () => {
        if (showMessageRules4 === true) {
            setShowMessageRules4(false);
            setShowMessageRules5(true);
        }
    }

    const handleCloseMessageRules5 = () => {
        if (showMessageRules5 === true) {
            setShowMessageRules5(false);
            setButtonDisebled(false);
        }
    }

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
            setDwarfHealth(dwarfHealth - 50);
            setShowSkilContagiousBiteImg(false)
            return
        }
    };

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleOrcAttack = () => {
        multiplier();
        if (dwarfHealth > 0 && damageMultiplier !== null) {
            setDwarfHealth(dwarfHealth - damageMultiplier * 10);
            setTimeout(() => {
                setOrcHealth(orcHealth - 10);
            }, 100);   
        }
        if (dwarfHealth < 200 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 35)
            }, 100) 
            setShowSkilAngryDwarfImg(true)
        }
        if (dwarfHealth <= 200 && dwarfHealth >= 180 && damageMultiplier !== null) {
            setShowMessage3(true);
        }       
        if (dwarfHealth <= 500 && dwarfHealth >= 480 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 480 && dwarfHealth >= 230 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
        } 
       
        if (dwarfHealth <= 800 && dwarfHealth >= 780 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage(true)
            setShowSkilAngryDwarfImg(true)
        }
        else if (dwarfHealth <= 780 && dwarfHealth >= 530 && damageMultiplier !== null) {
            setShowSkilAngryDwarfImg(false)
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
              <div className={classes.buttonsOrcsBattlefield}><HomeButton/><p>Поле боя</p><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="1000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl1} onClick={handleOrcAttack} disabled={buttonDisebled === true}></button>
                    </div>
                </div>
                {showMessageRules && <div><div className={classes.textMessageRulesOrcs}>Это ваш противник. Для того чтобы атаковать его, кликайте по нему. Шкала над головой показывает, сколько у него здоровья.<p onClick={handleCloseMessageRules}>---Продолжить---</p></div>
                <div className={classes.arrowRulesOrcs1}></div></div>}
                {showMessageRules2 && <div><div className={classes.textMessageRulesOrcs}>Это ваш юнит. Как и у противника, его шкала здоровья находится над головой.<p onClick={handleCloseMessageRules2}>---Продолжить---</p></div>
                <div className={classes.arrowRulesOrcs2}></div></div>}
                {showMessageRules3 && <div><div className={classes.textMessageRulesOrcs}>Это панели ваших навыков и противника. Для того чтобы использовать определённый навык, кликните по нему.<p onClick={handleCloseMessageRules3}>---Продолжить---</p></div>
                <div className={classes.arrowRules3}></div><div className={classes.arrowRules4}></div></div>}
                {showMessageRules4 && <div><div className={classes.textMessageRulesOrcs}>Это энциклопедия, в которой описаны все ваши навыки и навыки противника.<p onClick={handleCloseMessageRules4}>---Продолжить---</p></div>
                <div className={classes.arrowRules5}></div></div>}
                {showMessageRules5 && <div><div className={classes.textMessageRulesOrcs}>Это множитель урона. Он показывает, насколько будет умножен урон от следующей обычной атаки.<p onClick={handleCloseMessageRules5}>---Начать---</p></div>
                <div className={classes.arrowRules6}></div></div>}
                {showMessage && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Жалкие орки.</p></div>}
                {showMessage2 && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Это было больно.</p></div>}
                {showMessage3 && <div className={classes.textMessageDwarves}><h2>Гном:</h2><p>Мы вас уничтожим!</p></div>}
                {showLoseOcrsMessage && <ModalOrcsLose/>}
                {showWinOcrs123LvlMessage && <ModalOrcsWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="1000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl1}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilOrcPoultice}>
                    {showSkilOrcPoulticeImg && <button onClick={handlePoultice} title="Лечебный гриб" disabled={buttonDisebled === true}></button>}
                </div>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBiteImg && <button onClick={handleContagiousBite} title="Заразный укус" disabled={buttonDisebled === true}></button>}
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
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x <p>Множитель урона</p>
            </div>
        </div>
    );
};

