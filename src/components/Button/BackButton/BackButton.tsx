import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function BackButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <button className={classes.backButton} type="button" onClick={handleClick}>
    </button>
  );
}