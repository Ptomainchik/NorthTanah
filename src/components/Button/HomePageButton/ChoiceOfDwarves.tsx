import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function DwarvesSelectionButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("dwarves");
  }

  return (
    <button className={classes.dwarvesButton} type="button" title="Dwarves" onClick={handleClick}>
    </button>
  );
}