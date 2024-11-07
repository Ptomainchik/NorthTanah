import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import classes from '../../Styles/Styles.module.css'

export const OrcsKingdom = () => {
    return <div>
        <Header/>
        <div>
          <Link to="/historyok" title="История Королевства Orcs" className={classes.btncar} >The history of Kingdom Orcs</Link>
          <Link to="/guildsok" title="История Королевства Orcs" className={classes.btncar} >Guilds of Kingdom Orcs</Link>
        </div>
    </div>
}


