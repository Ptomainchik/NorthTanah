import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import classes from '../../Styles/Styles.module.css'

export const BearPeaks = () => {
    return <div>
        <Header/>
        <div>
          <Link to="/historybp" title="История Королевства Медвежьих Вершин" className={classes.btncar} >The history of Bear Peaks</Link>
          <Link to="/guildsbp" title="Гильдии Королевства Медвежьих Вершин" className={classes.btncar} >Guilds of Bear Peaks</Link>
        </div>
    </div>
}


