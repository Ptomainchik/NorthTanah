import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import classes from '../Styles/BearPeaks.module.css'

export const BearPeaks = () => {
    return <div>
        <Header/>
        <div>
          <Link to="/historybp" title="История Королевства Медвежьих Вершин" className={classes.historyButton} >The history of Bear Peaks</Link>
          <Link to="/guilds" title="Гильдии Королевства Медвежьих Вершин" className={classes.historyButton} >Guilds of Bear Peaks</Link>
        </div>
    </div>
}


