import classes from './BearPeaks.module.css'
import BannerOfBearPeaks from '../../../images/BearPeaks/BannerOfBearPeaks.webp'
import { AccordionState } from './AccordionBearPeaks/AccordionState'

export const HistoryOfBearPeaks = () => {
    return (
  <div className={classes.bodyHistory}>
  <div className={classes.Zaglavie}>
  <img title="Знамя Королевства Медвежьих Вершин " src={BannerOfBearPeaks}   alt="Герб Королевства Медвежьих Вершин" className={classes.Banner}/>
  <h1>The Kingdom of Bear Peaks</h1>
  <img title="Знамя Королевства Медвежьих Вершин" src={BannerOfBearPeaks} alt="Герб Королевства Медвежьих Вершин" className={classes.Banner}/>
 </div>
 <AccordionState/>
  </div>
  )
} 