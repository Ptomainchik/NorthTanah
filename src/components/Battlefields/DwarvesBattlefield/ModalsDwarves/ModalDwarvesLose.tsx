import Modal from 'react-modal';
import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcSkull from "../../../../images/Battlefields/OrcsBattlefield/OrcSkull.webp"
import { RestartLevelButton } from '../../../Button/RestartLevelButton/RestartLevelButton';

export const ModalDwarvesLose = () =>{

    return (
        <div>
           <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(30, 46, 70, 0.7)'}, content: {border: '2px solid black' }}}
               className={classes.dwarvesLose} isOpen={true}>
             <h2>Defeat</h2>
    <img src={OrcSkull} alt="Lose" />
    <h5>Restart Level</h5>
        <RestartLevelButton/>
           </Modal>
       </div>
    )
}

