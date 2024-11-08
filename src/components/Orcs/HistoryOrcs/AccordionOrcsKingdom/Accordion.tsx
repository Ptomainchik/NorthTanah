import { ReactNode, useState } from 'react';
import classes from '../../Styles/OrcsKingdom.module.css'
import { AccordionItem } from './AccordionItem/AccordionItem';

export type AccordionDataType = {
    title: string;
    content: ReactNode;
  };


export const Accordion =({ items }: { items: Array<AccordionDataType> }) => {
    const [currentIdx, setCurrentIdx] = useState(-1);
    const btnOnClick = (idx: number) => {
        setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
      }
  
    return (
      <ul className={classes.accordion}>
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            data={item}
            isOpen={idx === currentIdx}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
      </ul>
    );
  }


