import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function HomeButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <button className={classes.homeButton} type="button" onClick={handleClick}>
    </button>
  );
}