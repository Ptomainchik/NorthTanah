import classes from './../Styles/BlackForest.module.css'
import CoatOfArmsOfBlackForest from '../../../images/Orcs/HistoryOrcsForest/CoatOfArmsOfBlackForest.webp'
import { AccordionState } from './AccordionOrcsKingdom/AccordionState'

export const HistoryOfBlackForest = () => {
    return (
  <div className={classes.bodyHistory}>
  <div className={classes.titleHistory}>
  <img title="Герб Чёрного Леса" alt="Герб Чёрного Леса" src={CoatOfArmsOfBlackForest} className={classes.banner}/>
  <h1>Black Forest</h1>
  <img title="Герб Чёрного Леса" alt="Герб Чёрного Леса" src={CoatOfArmsOfBlackForest} className={classes.banner}/>
 </div>
 <AccordionState/>
  </div>
  )
} 