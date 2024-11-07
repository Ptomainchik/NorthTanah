import { Accordion } from "./Accordion";
import classes from '../OrcsKingdom.module.css'
import KingDwarfs from '../../../../images/BearPeaks/KingDwarfs.jpg'
import DwarfOnABear from '../../../../images/BearPeaks/DwarfOnABear.jpg'
import DwarfAngry from '../../../../images/BearPeaks/DwarfAngry.jpg'
import FloodedMines from '../../../../images/BearPeaks/FloodedMines.jpg'
import DwarfMines from '../../../../images/BearPeaks/DwarfMines.jpg'
import Forge from '../../../../images/BearPeaks/Forge.jpg'
import DwarfExpedition from '../../../../images/BearPeaks/DwarfExpedition.jpg'
import SapphireMountains from '../../../../images/BearPeaks/SapphireMountains.jpg'
import DwarvenTunnel from '../../../../images/BearPeaks/DwarvenTunnel.jpg'
import DwarvenTunnel2 from '../../../../images/BearPeaks/DwarvenTunnel2.jpg'



export const AccordionState = () => {
    const accordionItems = [
      {
        title: 'История Орков',
        content: (
          <div>
            <div className={classes.pictures}>
  <img title="Король" src={KingDwarfs} alt="Король" className={classes.KingVid}/>
  <img title="???" src={DwarfOnABear} alt="???" className={classes.KingVid}/>
</div>

 <div className={classes.scroll}>
  <h2>История Орков</h2>
     <p><strong>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi corporis labore dignissimos odit et, fuga doloribus numquam adipisci officia neque ut similique voluptatibus consequatur ipsum facere eos amet laudantium.       
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, exercitationem ex rem excepturi doloribus asperiores laudantium illum assumenda, dolorem cupiditate quo, quam cumque quaerat nulla corrupti odit repellendus architecto culpa.
     Exercitationem, obcaecati pariatur, vitae eum dignissimos minima sunt odit dicta suscipit ducimus labore ex magnam quasi dolore! Facere minima quaerat soluta nisi in, iste placeat eos dolores accusantium aliquid reprehenderit.
     </strong></p> 
</div>
          </div>
        ),
      },
      {
        title: '???',
        content: (
          <div>
           <div className={classes.pictures}>
    <img title="???" className={classes.picture} src={DwarfAngry} alt="???"/>
    <img title="???" className={classes.picture} src={FloodedMines} alt="???"/>
  </div>
  <div className={classes.scroll}>
      <h2>???</h2>
      <p><strong> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est quaerat ullam. Odit iure distinctio eligendi commodi deserunt at nam porro laborum natus, nisi enim repudiandae mollitia et cum facilis.
      Adipisci, nostrum aperiam cumque ipsa explicabo doloremque fuga inventore reprehenderit reiciendis veniam obcaecati. A aliquid modi doloremque dolor natus ea! Modi similique laudantium nesciunt autem velit saepe, dignissimos quos illo.
      </strong></p>
    </div>
          </div>
        ),
      },
      {
        title: '???',
        content: (
          <div>
      <div className={classes.pictures}>
   <img title="???" className={classes.picture}  src={DwarfMines} alt="???"/>
   <img title="???" className={classes.picture} src={Forge} alt="???"/>
  </div>

  <div className={classes.scroll}>
        <h2>???</h2>
        <p><strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fuga voluptatum illum quidem unde, molestias inventore numquam error, impedit ipsum omnis accusantium esse sit odit assumenda neque, ipsa dolorum officia.
        Dicta ratione consectetur nemo non ducimus dignissimos dolore ipsa beatae labore alias explicabo tenetur quibusdam accusantium iste, eaque ea. Eligendi, dolorem. Velit consequuntur nisi molestiae quis beatae amet officiis hic!   
        </strong></p>
      </div>

          </div>
        ),
      },
      {
        title: '???',
        content: (
          <div>
      <div className={classes.pictures}>
   <img title="???" className={classes.picture} src={SapphireMountains} alt="???"/>
   <img title="???" className={classes.picture} src={DwarfExpedition} alt="???"/>
  </div>

  <div className={classes.scroll}>
        <h2>???</h2>
        <p><strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum ut ipsa libero! Delectus repellendus veniam, blanditiis sit laudantium fuga voluptatem, ex quia asperiores necessitatibus sint incidunt! Mollitia, hic illum!
          Dolor inventore, facilis quasi optio corporis labore quo nulla esse perspiciatis impedit rerum similique dolorum asperiores voluptas laborum? Corporis, blanditiis? Delectus rerum sunt exercitationem iusto ab omnis veritatis, ipsam laborum.
        </strong></p>
  </div>
          </div>
        ),
      },
      {
        title: '???',
        content: (
          <div>
      <div className={classes.pictures}>
  <img title="???" className={classes.picture} src={DwarvenTunnel} alt="???"/>
  <img title="???" className={classes.picture} src={DwarvenTunnel2} alt="???"/>
  </div>
  <div className={classes.scroll}>
        <h2>???</h2>
        <p><strong>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quaerat esse, neque eligendi inventore voluptatum eius quasi delectus earum, cumque facilis quam quidem blanditiis quas perferendis fugiat, consequatur a. Veniam.
         Perferendis assumenda eius eveniet fugit rem facilis sunt rerum repellat! Porro nostrum recusandae dolor nihil consequatur odio fuga, necessitatibus dolorem soluta consequuntur facilis, maiores eos. Consequuntur dolorum nostrum voluptate ipsam.
        </strong></p>
  </div>
          </div>
        ),
      },
      {
        title: 'Пока не придумал',
        content: (
          <div>
      
          </div>
        ),
      },
      {
        title: 'Пока не придумал',
        content: (
          <div>
      
          </div>
        ),
      },
      {
        title: 'Пока не придумал',
        content: (
          <div>
      
          </div>
        ),
      },
    ];
  
    return (
      <div className={classes.containerAcc}>
        <Accordion items={accordionItems} />
      </div>
    );
  }