import classes from '../../Styles/Styles.module.css'

export function RestartButton() {
  function handleClick() {
    window.location.reload();
  }

  return (
    <div className={classes.button}>
    <button className={classes.restartButton} type="button" title="Restart" onClick={handleClick}>
    </button>
    </div>
  );
}