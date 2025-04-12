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

export const DwarvesBattlefieldLvl1 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(1000);
    const [orcHealth, setOrcHealth] = useState(1000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [dwarvesPoultice, setDwarvesPoultice] = useState(1);
    const [angryDwarf, setAngryDwarf] = useState(1);
    const [showSkilDwarvesPoulticeImg, setShowSkilDwarvesPoulticeImg] = useState(true);
    const [showSkilAndryDwarfImg, setShowSkilAngryDwarfImg] = useState(true);
    const [showMessageRules, setShowMessageRules] = useState(true);
    const [showMessageRules2, setShowMessageRules2] = useState(false);
    const [showMessageRules3, setShowMessageRules3] = useState(false);
    const [showMessageRules4, setShowMessageRules4] = useState(false);
    const [showMessageRules5, setShowMessageRules5] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilContagiousBiteImg, setShowSkilContagiousBiteImg] = useState(false);
    const [showLoseDwarvesMessage, setShowLoseDwarvesMessage] = useState(false);
    const [showWinDwarves123LvlMessage, setShowWinDwarves123LvlMessage] = useState(false);

    
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
        }
    }

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
            setShowSkilAngryDwarfImg(false)
            return
        }
    };

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleDwarfAttack = () => {
        multiplier();
        if (orcHealth > 0 && damageMultiplier !== null) {
            setOrcHealth(orcHealth - damageMultiplier * 10);
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 10);
            }, 100);   
        }
        if (orcHealth < 200 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 35)
            }, 100) 
            setShowSkilContagiousBiteImg(true)
        }
        if (orcHealth <= 200 && orcHealth >= 180 && damageMultiplier !== null) {
            setShowMessage3(true);
        }       
        if (orcHealth <= 500 && orcHealth >= 480 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 480 && orcHealth >= 230 && damageMultiplier !== null) {
            setShowSkilContagiousBiteImg(false)
        } 
       
        if (orcHealth <= 800 && orcHealth >= 780 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowMessage(true)
            setShowSkilContagiousBiteImg(true)
        }
        else if (orcHealth <= 780 && orcHealth >= 530 && damageMultiplier !== null) {
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
                    <progress className={classes.healthIndicatorDwarf} max="1000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl1}></button>
                    </div>
                </div>
                {showMessageRules && <div><div className={classes.textMessageRulesDwarves}>Это ваш противник. Для того чтобы атаковать его, кликайте по нему. Шкала над головой показывает, сколько у него здоровья.<p onClick={handleCloseMessageRules}>---Продолжить---</p></div>
                <div className={classes.arrowRulesDwarves1}></div></div>}
                {showMessageRules2 && <div><div className={classes.textMessageRulesDwarves}>Это ваш юнит. Как и у противника, его шкала здоровья находится над головой.<p onClick={handleCloseMessageRules2}>---Продолжить---</p></div>
                <div className={classes.arrowRulesDwarves2}></div></div>}
                {showMessageRules3 && <div><div className={classes.textMessageRulesDwarves}>Это панели ваших навыков и противника. Для того чтобы использовать определённый навык, кликните по нему.<p onClick={handleCloseMessageRules3}>---Продолжить---</p></div>
                <div className={classes.arrowRules3}></div><div className={classes.arrowRules4}></div></div>}
                {showMessageRules4 && <div><div className={classes.textMessageRulesDwarves}>Это энцинклопедия, в которой описанны все ваши навыки и противника.<p onClick={handleCloseMessageRules4}>---Продолжить---</p></div>
                <div className={classes.arrowRules5}></div></div>}
                {showMessageRules5 && <div><div className={classes.textMessageRulesDwarves}>Это множитель урона. Он показывает, насколько будет умножен урон от следующей обычной атаки.<p onClick={handleCloseMessageRules5}>---Начать---</p></div>
                <div className={classes.arrowRules6}></div></div>}
                {showMessage && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Коротышки.</p></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Больно!</p></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><h2>Орк:</h2><p>Умрите!</p></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="1000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl1} onClick={handleDwarfAttack}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBiteImg && <button title="Заразный укус"></button>}
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
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x <p>Множитель урона</p>
            </div>
        </div>
    );
};
