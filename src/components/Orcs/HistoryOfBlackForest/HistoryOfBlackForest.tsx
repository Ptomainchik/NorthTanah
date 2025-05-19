import classes from './../Styles/BlackForest.module.css'
import CoatOfArmsOfBlackForest from '../../../images/Orcs/HistoryBlackForest/CoatOfArmsOfBlackForest.webp'
import { AccordionState } from './AccordionOrcsKingdom/AccordionState'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'


export const HistoryOfBlackForest = () => {
    return (
<div className={classes.historyOrcs}>
      <div className={classes.buttons}><HomeButton/><span>История</span><BackButton/></div>
    <div className={classes.imageHistory}>
      <div className={classes.titleHistory}>
        <img title="Герб Чёрного леса" alt="Герб Чёрного леса" src={CoatOfArmsOfBlackForest} className={classes.banner} draggable="false"/>
        <h1>Чёрный Лес</h1>
        <img title="Герб Чёрного леса" alt="Герб Чёрного леса" src={CoatOfArmsOfBlackForest} className={classes.banner} draggable="false"/>
      </div>
    <AccordionState/>
    </div>
 </div>
  )
} 