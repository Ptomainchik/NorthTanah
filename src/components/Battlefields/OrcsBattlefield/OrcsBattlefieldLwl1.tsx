import { useEffect, useState } from "react";
import { BackButton } from "../../Button/BackButton/BackButton";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLwl1 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(1000);
    const [orcHealth, setOrcHealth] = useState(1000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [orcPoultice, setOrcPoultice] = useState(1);
    const [contagiousBite, setContagiousBite] = useState(1);
    const [orcPoulticeImg, setOrcPoulticeImg] = useState(true);
    const [contagiousBiteImg, setContagiousBiteImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilsAngryDwarf, setShowSkilsAngryDwarf] = useState(false);

    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice( -1);
            setOrcHealth(orcHealth + 100);
            setOrcPoulticeImg(false);
            return
        }
    };

    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1);
            setDwarfHealth(dwarfHealth - 50);
            setContagiousBiteImg(false)
            return
        }
    };

    const rollDice = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleOrcAttack = () => {
        rollDice();
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
            setShowSkilsAngryDwarf(true)
        }
        if (dwarfHealth === 200 && damageMultiplier !== null) {
            setShowMessage3(true);
            setShowSkilsAngryDwarf(true)
        } 
        else if (dwarfHealth === 190 && damageMultiplier !== null) {
            setShowMessage3(true);
        }
        else if (dwarfHealth === 180 && damageMultiplier !== null) {
            setShowMessage3(true);
        }
        if (dwarfHealth === 500 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth === 490 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth === 480 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilsAngryDwarf(true)
            setShowSkilsAngryDwarf(false)
        }
        else if (dwarfHealth === 470 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        } 
        else if (dwarfHealth === 460 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        } 
        if (dwarfHealth === 800 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage(true)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth === 790 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage(true)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth === 780 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 50)
            }, 100) 
            setShowMessage(true)
            setShowSkilsAngryDwarf(true)
            setShowSkilsAngryDwarf(false)
        }
        else if (dwarfHealth === 770 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        } 
        else if (dwarfHealth === 760 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        } 
        if (dwarfHealth < 10){
            window.location.href = "battlefieldorlwl2";
        }
        if (orcHealth < 10){
            window.location.href = "*";
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
            <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl123}>
                    <progress className={classes.healthIndicatorDwarf} max="1000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLwl1} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessage}><span>Жалкие орки.</span></div>}
                {showMessage2 && <div className={classes.textMessage}><span>Это было больно.</span></div>}
                {showMessage3 && <div className={classes.textMessage}><span>Я тебя уничтожу!</span></div>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl123}>
                        <progress className={classes.healthIndicatorOrc} max="1000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLwl1}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkils}>
                    {orcPoulticeImg && <button className={classes.orcPoultice} onClick={handlePoultice} title="Лечебный гриб - восстанавливает 100 единиц здоровья."></button>}
                    {orcPoulticeImg && <div className={classes.titleSkils}>Лечебный гриб</div>}
                </div>
                <div className={classes.blockSkils}>
                    {contagiousBiteImg && <button className={classes.contagiousBite} onClick={handleContagiousBite} title="Заразный укус - наносит слабый урон противнику."></button>}
                    {contagiousBiteImg &&<div className={classes.titleSkils}>Заразный укус</div>} 
                </div>
            </div>
            <div className={classes.flexSkilsDwarves}>
                <div className={classes.blockSkils}>
                  {showSkilsAngryDwarf && <button className={classes.angryDwarf} title="Гнев гнома - отнимает увеличенное количество здоровья."></button>}
                  {showSkilsAngryDwarf && <div className={classes.titleSkils}>Гнев гнома</div>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkils}>Множитель урона</div> 
            </div>
        </div>
    );
};

