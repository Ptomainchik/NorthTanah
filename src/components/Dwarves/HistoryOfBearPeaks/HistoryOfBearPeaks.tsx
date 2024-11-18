import classes from './../Styles/BearPeaks.module.css'
import CoatOfArmsOfBearPeaks from '../../../images/Dwarves/HistoryBearPeaks/CoatOfArmsOfBearPeaks.webp'
import { AccordionState } from './AccordionBearPeaks/AccordionState'

export const HistoryOfBearPeaks = () => {
    return (
  <div className={classes.bodyHistory}>
  <div className={classes.titleHistory}>
  <img title="Знамя Королевства Медвежьих Вершин " src={CoatOfArmsOfBearPeaks} alt="Герб Королевства Медвежьих Вершин" className={classes.banner}/>
  <h1>The Kingdom of Bear Peaks</h1>
  <img title="Знамя Королевства Медвежьих Вершин" src={CoatOfArmsOfBearPeaks} alt="Герб Королевства Медвежьих Вершин" className={classes.banner}/>
 </div>
 <AccordionState/>
  </div>
  )
} 