import { useEffect, useState } from 'react'
import classes from '../../Styles/Styles.module.css'

export const Market = () => {
    return <div>
        <div className={classes.rinok}>
  <h3>KUZNI I RINOK</h3>
  <div className={classes.kaznaKarakAzul}>KAZNAOBSHAYA</div>
 <div className={classes.proiz}>
  <div className={classes.kuznici}>KUZNICA5</div>
  <div className={classes.lavki}>LAVKI5</div>
 </div>
 <div className={classes.kaz}>
  <div className={classes.kaznaKuz}>KAZNAKUZNECOV</div>
  <div className={classes.kaznaTor}>KAZNATORGOVCEV</div>
 </div>
</div>
    </div>
}

export const Treasury = () => {
    const [treasury, setTreasury] = useState(1000)
    const [product, setProduct] = useState(0)
    const [marchantTreasury, setMerchantTreasury] = useState(0)
    const [blacksmithTreasury, setBlacksmithTreasury] = useState(0)

    
}



// const [state, setState] = useState(100)
// const [treasury, setTreasury] = useState(0)
// const [data, setData] = useState(0)


export function AppS() {
  const [state, setState] = useState(100); // Инициализируем состояние state с 100
  const [treasury, setTreasury] = useState(0); // Инициализируем treasury с 0
  const [data, setData] = useState(0); // Инициализируем data с 0

  useEffect(() => {
    // Обновляем treasury до 30% от state
    setTreasury(state * 0.3);
  }, [state]);

  useEffect(() => {
    // Обновляем data до 15% от treasury
    setData(treasury * 0.15);
  }, [treasury]);

 
  return (
    <div>
      <h1>State: {state}</h1>
      <h1>Treasury: {treasury}</h1>
      <h1>Data: {data}</h1>
    </div>
  );
}
