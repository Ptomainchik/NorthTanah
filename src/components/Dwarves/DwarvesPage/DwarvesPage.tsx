import classes from '../Styles/BearPeaks.module.css'
import DwarfWithBook from '../../../images/Dwarves/DwarvesPage/DwarfWithBook.jpg'
import { Link } from 'react-router-dom'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'



export const DwarvesPage = () => {
    return <div>
      <div className={classes.button}><HomeButton/><span>Dwarves</span><BackButton/></div>
    <div className={classes.info}>
    <div className={classes.blockPage}>
      <div className={classes.infoPage}>
             <img title="Альдорх Мудрый" src={DwarfWithBook} alt="Мудрый гном" className={classes.imgPage}/>
          <div className={classes.infoTextPage}>
          <h5>Альдорх Мудрый</h5>
         <p>Библиотекарь Королевства</p>
         </div>
      </div>
      <div>
          <Link to="/historybp" title="История Королевства Медвежьих Вершин" className={classes.dwarvesPageButton} ><h5>The history of Bear Peaks</h5></Link>
          <Link to="/guilds" title="Гильдии Королевства Медвежьих Вершин" className={classes.dwarvesPageButton} ><h5>Guilds of Bear Peaks</h5></Link>
          <Link to="/guildss" title="Гильдии Королевства Медвежьих Вершин" className={classes.dwarvesPageButton} ><h5>Battlefield</h5></Link>
    </div>
</div>
<div className={classes.story}>
  <div className={classes.storyText}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
  Reiciendis, velit amet quos aliquam reprehenderit magni voluptas optio architecto dolorum assumenda! 
  Ducimus quisquam iusto ratione minima mollitia illo voluptates commodi suscipit!</p></div>
  </div>
</div>
</div>
}