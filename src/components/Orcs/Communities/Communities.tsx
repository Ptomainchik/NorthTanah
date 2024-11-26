import classes from '../Styles/BlackForest.module.css'
import { SpiritCatchers } from './SpiritCatchers/SpiritCatchers'
import { Gangs } from './Gangs/Gangs'
import { Hunters } from './Hunters/Hunters'
import { TableOrcCommunities } from './TableOrcCommunities/TableOrcCommunities'
import { Workers } from './Workers/Workers'


export const Communities = () => {
    return <div className={classes.communities}>
      <h1>Communities</h1>
 <div className={classes.communitiesLists}>
    <div className={classes.communityBlock}>
        <SpiritCatchers/>
        <h2>Spirit Catchers</h2>  
    </div>

    <div className={classes.communityBlock}>
        <Hunters/>
        <h2>Hunters</h2>
    </div>   

 </div>

 <div className={classes.communitiesLists}>
    <div className={classes.communityBlock}>
        <Workers/>
        <h2>Workers</h2>
    </div>

    <div className={classes.communityBlock}>
        <Gangs/>
        <h2>Gangs</h2>
    </div>

    </div>

    <div>
        <TableOrcCommunities/>
    </div>

 </div>


}