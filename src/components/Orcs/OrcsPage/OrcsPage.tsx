import classes from '../Styles/BlackForest.module.css'
import OrcShaman from '../../../images/Orcs/OrcsPage/OrcShaman.jpg'
import { Link } from 'react-router-dom'
import { BackButton } from '../../Button/BackButton/BackButton'
import { HomeButton } from '../../Button/HomeButton/HomeButton'



export const OrcsPage = () => {
    return <div>
      <div className={classes.button}><HomeButton/><span>Orcs</span><BackButton/></div>
    <div className={classes.info}> 
  <div className={classes.blockPage}>
     <div className={classes.infoPage}>
           <img title="Бурзульг" src={OrcShaman} alt="Орк хранитель знаний" className={classes.imgPage}/>
         <div className={classes.infoTextPage}>
           <h4>Барзульг</h4>
           <p>Хранитель знаний</p>
        </div>
    </div>
    <div>
          <Link to="/historybf" title="История Чёрного Леса" className={classes.orcsPageButton} ><h5>The history of Black Forest</h5></Link>
          <Link to="/communities" title="Общины Чёрного Леса" className={classes.orcsPageButton} ><h5>Communities of Black Forest</h5></Link>
          <Link to="/battlefieldorlwl4" title="Боевое поле" className={classes.orcsPageButton} ><h5>Battlefield</h5></Link>
    </div>
  </div>   
  <div className={classes.story}>
    <div className={classes.storyText}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium sint non unde laboriosam repudiandae quam esse nam possimus accusamus tenetur, assumenda labo
  re iure deserunt eaque quas architecto laborum quis!</p></div>
  </div>
</div></div>
}