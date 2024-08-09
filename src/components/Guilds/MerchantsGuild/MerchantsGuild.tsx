import React, { ReactElement, useState } from "react"
import classes from '../../Styles/Styles.module.css'
import HeadDwarfMerchantBarton from '../../../images/Osnova/HeadDwarfMerchantBarton.jpg'
import DwarfMerchantGarbert from '../../../images/Osnova/DwarfMerchantGarbert.jpg'



const MerchantsGuildDescription = () => {
    return (
        <div>
   <div className={classes.dt}>
    <img title="Бартон Златопалый" className={classes.t} src={HeadDwarfMerchantBarton} alt="fgdf"/>
    <span>Бартон Златопалый - глава гильдии торговцев. Во времена создания гильдии,
      именно он поднял вопрос за отделение от кузнецов. Когда же
      всё было решено, Златопалого выбрали главой новой гильдии. Ему подчиняются
      все торговцы гильдии и он решает какой процент с продаж пойдёт в казну.</span>
   </div>
   <div className={classes.dtt}>
    <img title="Гарберт" className={classes.tt} src={DwarfMerchantGarbert} alt="fgdf"/>
    <span>Гарберт - отвечает за наполнение складов товаром. Он договаривается о цене
      с гильдиями производителями и помогает торговцам заполнить их лавки.
      Его подчинённые путешествует в поисках нового ассортимента.</span>
   </div>
  </div>
  
    )
}

type ModalPropsType = {
    visible: boolean
    content: ReactElement | string
    close: ReactElement | string
  
}

const ModalMerchantsGuild = ({visible = false, content = '', close = ''}: ModalPropsType) => {
    if (!visible) return null;
    return (
    <div className={classes.diator} onClick={e => e.stopPropagation()}>
        <div>
        {content}
        </div>
        {close && <div>{close}</div>}
  </div>
 )
}

export const MerchantsGuild = () => {
    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)
    return (
        <React.Fragment>
            <button onClick={() => setModal(true)} className={classes.giltor} title="Гильдия Торговцев"/>
            <ModalMerchantsGuild
                visible={isModal}
                content={<MerchantsGuildDescription/>}
                close={<button onClick={onClose} className={classes.btnclt} value="Закрыть">Закрыть</button>}
            />
        </React.Fragment>
    );
};

