import classes from '../Styles/BearPeaks.module.css'
import DwarfWithBook from '../../../images/Dwarves/DwarvesPage/DwarfWithBook.jpg'


export const Header = () => {
    return  <div className={classes.Info}>
    <img title="Альдорх Мудрый" src={DwarfWithBook} alt="Мудрый гном" className={classes.dwarfWithBook}/>
<div className={classes.InfoText}>
  <h3>Альдорх Мудрый</h3>
  <p><strong>Библиотекарь Королевства</strong></p>
</div>

</div>
}