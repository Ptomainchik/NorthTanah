import classes from '../Styles/OrcsKingdom.module.css'
import OrcShaman from '../../../images/Orcs/OrcsPage/OrcShaman.jpg'


export const Header = () => {
    return  <div className={classes.Info}>
    <img title="???" src={OrcShaman} alt="???" className={classes.orcShaman}/>
<div className={classes.InfoText}>
  <h3>???</h3>
  <p><strong>???</strong></p>
</div>

</div>
}