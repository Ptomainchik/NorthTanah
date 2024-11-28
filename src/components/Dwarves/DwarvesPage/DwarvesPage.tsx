import classes from '../Styles/BearPeaks.module.css'
import DwarfWithBook from '../../../images/Dwarves/DwarvesPage/DwarfWithBook.jpg'
import { Link } from 'react-router-dom'


export const DwarvesPage = () => {
    return <div className={classes.info}>
    <div className={classes.blockPage}>
      <div className={classes.infoPage}>
             <img title="Альдорх Мудрый" src={DwarfWithBook} alt="Мудрый гном" className={classes.imgPage}/>
          <div className={classes.infoTextPage}>
          <h4>Альдорх Мудрый</h4>
         <p>Библиотекарь Королевства</p>
         </div>
      </div>
      <div>
          <Link to="/historybp" title="История Королевства Медвежьих Вершин" className={classes.historyButton} >The history of Bear Peaks</Link>
          <Link to="/guilds" title="Гильдии Королевства Медвежьих Вершин" className={classes.historyButton} >Guilds of Bear Peaks</Link>
          <Link to="/guildss" title="Гильдии Королевства Медвежьих Вершин" className={classes.historyButton} >Battlefield</Link>
    </div>
</div>
<div className={classes.story}>
  <div className={classes.storyText}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
  Reiciendis, velit amet quos aliquam reprehenderit magni voluptas optio architecto dolorum assumenda! 
  Ducimus quisquam iusto ratione minima mollitia illo voluptates commodi suscipit!</p></div>
  </div>
</div>
}