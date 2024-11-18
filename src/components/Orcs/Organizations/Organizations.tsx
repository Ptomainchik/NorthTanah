import classes from '../Styles/BlackForest.module.css'
import { SpiritCatchers } from './SpiritCatchers/SpiritCatchers'
import { Gangs } from './Gangs/Gangs'
import { Hunters } from './Hunters/Hunters'
import { TableOrganizations } from './TableOrganizations/TableOrganizations'
import { Workers } from './Workers/Workers'


export const Organizations = () => {
    return <div className={classes.organizations}>
      <h1>Organizations</h1>
 <div className={classes.organizationsLists}>
    <div className={classes.organizationBlock}>
        <SpiritCatchers/>
        <h2>Spirit Catchers</h2>  
    </div>

    <div className={classes.organizationBlock}>
        <Hunters/>
        <h2>Hunters</h2>
    </div>   

 </div>

 <div className={classes.organizationsLists}>
    <div className={classes.organizationBlock}>
        <Workers/>
        <h2>Workers</h2>
    </div>

    <div className={classes.organizationBlock}>
        <Gangs/>
        <h2>Gangs</h2>
    </div>

    </div>

    <div>
        <TableOrganizations/>
    </div>

 </div>


}