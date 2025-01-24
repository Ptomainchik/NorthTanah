import classes from './../Styles/BlackForest.module.css'
import CoatOfArmsOfBlackForest from '../../../images/Orcs/HistoryBlackForest/CoatOfArmsOfBlackForest.webp'
import { AccordionState } from './AccordionOrcsKingdom/AccordionState'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'


export const HistoryOfBlackForest = () => {
    return (
    <div className={classes.historyOrcs}>
      <div className={classes.button}><HomeButton/><span>History</span><BackButton/></div>
  <div className={classes.imageHistory}>
  <div className={classes.titleHistory}>
  <img title="Герб Чёрного Леса" alt="Герб Чёрного Леса" src={CoatOfArmsOfBlackForest} className={classes.banner}/>
  <h1>Black Forest</h1>
  <img title="Герб Чёрного Леса" alt="Герб Чёрного Леса" src={CoatOfArmsOfBlackForest} className={classes.banner}/>
 </div>
 <AccordionState/>
 </div>
 </div>
  )
} 