import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function BackButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div className={classes.button}>
    <button className={classes.backButton} type="button" title="Back" onClick={handleClick}>
    </button>
    </div>
  );
}