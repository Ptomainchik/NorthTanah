import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import classes from '../Styles/OrcsKingdom.module.css'

export const OrcsKingdom = () => {
    return <div>
        <Header/>
        <div>
          <Link to="/historyok" title="История Королевства Orcs" className={classes.historyButton} >The history of Kingdom Orcs</Link>
          <Link to="/organization" title="История Королевства Orcs" className={classes.historyButton} >Organizations of Kingdom Orcs</Link>
        </div>
    </div>
}


