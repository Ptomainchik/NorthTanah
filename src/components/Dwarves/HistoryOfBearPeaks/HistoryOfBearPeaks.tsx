import classes from './../Styles/BearPeaks.module.css'
import CoatOfArmsOfBearPeaks from '../../../images/Dwarves/HistoryBearPeaks/CoatOfArmsOfBearPeaks.webp'
import { AccordionState } from './AccordionBearPeaks/AccordionState'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'

export const HistoryOfBearPeaks = () => {
    return (<div>
      <div className={classes.button}><HomeButton/><span>History</span><BackButton/></div>
  <div className={classes.bodyHistory}>
  <div className={classes.titleHistory}>
  <img title="Герб Королевства Медвежьих Вершин " src={CoatOfArmsOfBearPeaks} alt="Герб Королевства Медвежьих Вершин" className={classes.banner}/>
  <h1>The Kingdom of Bear Peaks</h1>
  <img title="Герб Королевства Медвежьих Вершин" src={CoatOfArmsOfBearPeaks} alt="Герб Королевства Медвежьих Вершин" className={classes.banner}/>
 </div>
 <AccordionState/>
  </div>
  </div>
  )
} 