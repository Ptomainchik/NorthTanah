import classes from './../Styles/BearPeaks.module.css'
import CoatOfArmsOfBearPeaks from '../../../images/Dwarves/HistoryBearPeaks/CoatOfArmsOfBearPeaks.webp'
import { AccordionState } from './AccordionBearPeaks/AccordionState'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'

export const HistoryOfBearPeaks = () => {
    return (
<div className={classes.historyDwarves}>
      <div className={classes.buttons}><HomeButton/><span>History</span><BackButton/></div>
    <div className={classes.imageHistory}>
      <div className={classes.titleHistory}>
        <img title="Герб Медвежьих Вершин " src={CoatOfArmsOfBearPeaks} alt="Герб Медвежьих Вершин" className={classes.banner}/>
        <h1>Bear Peaks</h1>
        <img title="Герб Медвежьих Вершин" src={CoatOfArmsOfBearPeaks} alt="Герб Медвежьих Вершин" className={classes.banner}/>
      </div>
    <AccordionState/>
    </div>
</div>
)
} 