import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function OrcsSelectionButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("orcs");
  }

  return (
    <button className={classes.orcsButton} type="button" title="Orcs" onClick={handleClick}>
    </button>
  );
}