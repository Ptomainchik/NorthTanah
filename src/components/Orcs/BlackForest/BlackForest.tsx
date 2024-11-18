import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import classes from '../Styles/BlackForest.module.css'

export const BlackForest = () => {
    return <div>
        <Header/>
        <div>
          <Link to="/historybf" title="История Чёрного Леса" className={classes.historyButton} >The history of Black Forest</Link>
          <Link to="/organizations" title="История Чёрного Леса" className={classes.historyButton} >Organizations of Black Forest</Link>
        </div>
    </div>
}


