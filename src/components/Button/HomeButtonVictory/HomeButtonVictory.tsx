import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function HomeButtonVictory() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <button className={classes.homeButtonVictory} type="button" title="Home" onClick={handleClick}>
    </button>
  );
}